/**
 * Local travel-screenshot ingest. Bind 127.0.0.1 only.
 * Does not scrape Instagram. Vision reads screenshots you drop.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const DATA_FILE = path.join(ROOT, 'assets/js/travel-posts-data.js');
const PUBLIC = path.join(__dirname, 'public');
const HOST = '127.0.0.1';
const PORT = Number(process.env.TRAVEL_INGEST_PORT || 8765);

loadDotEnv(path.join(__dirname, '.env'));
loadDotEnv(path.join(ROOT, '.env'));

function loadDotEnv(file) {
  if (!fs.existsSync(file)) return;
  const text = fs.readFileSync(file, 'utf8');
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    if (i < 1) continue;
    const key = t.slice(0, i).trim();
    let val = t.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] == null || process.env[key] === '') process.env[key] = val;
  }
}

function visionProvider() {
  if (process.env.OPENAI_API_KEY) return 'openai';
  if (process.env.ANTHROPIC_API_KEY) return 'anthropic';
  return null;
}

function loadPosts() {
  const src = fs.readFileSync(DATA_FILE, 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(src, sandbox, { timeout: 2000 });
  const posts = sandbox.window.myTravelPosts;
  if (!Array.isArray(posts)) throw new Error('myTravelPosts is not an array');
  return posts;
}

function normalizeDate(d) {
  const s = String(d || '').replace(/\./g, '-');
  const m = s.match(/^(\d{4})-(\d{1,2})/);
  if (!m) return '0000-00';
  return m[1] + '-' + m[2].padStart(2, '0');
}

function shortcodeFromUrl(url) {
  if (!url) return '';
  const m = String(url).match(/instagram\.com\/(?:p|reel|reels|tv)\/([A-Za-z0-9_-]+)/i);
  return m ? m[1] : '';
}

function lastPost(posts) {
  let best = null;
  let bestKey = '';
  posts.forEach((p, i) => {
    const key = normalizeDate(p.date) + '-' + String(i).padStart(5, '0');
    if (!best || key >= bestKey) {
      best = p;
      bestKey = key;
    }
  });
  return best
    ? {
        title: best.title || '',
        date: best.date || '',
        city: best.city || '',
        country: best.country || '',
        instagramPostId: best.instagramPostId || shortcodeFromUrl(best.instagramUrl),
        instagramUrl: best.instagramUrl || ''
      }
    : null;
}

function idSet(posts) {
  const ids = new Set();
  for (const p of posts) {
    const id = p.instagramPostId || shortcodeFromUrl(p.instagramUrl);
    if (id) ids.add(id);
  }
  return ids;
}

function similarExisting(posts, draft) {
  const title = (draft.title || '').trim().toLowerCase().slice(0, 48);
  const city = (draft.city || '').trim().toLowerCase();
  const date = normalizeDate(draft.date);
  if (!title) return null;
  return (
    posts.find((p) => {
      const pt = (p.title || '').trim().toLowerCase().slice(0, 48);
      return pt === title && (p.city || '').trim().toLowerCase() === city && normalizeDate(p.date) === date;
    }) || null
  );
}

const EXTRACT_PROMPT = `You read a screenshot of an Instagram post (often a whole browser tab).
Return ONLY JSON, no markdown:
{
  "instagramUrl": "https://www.instagram.com/p/SHORTCODE/ or empty",
  "instagramPostId": "shortcode from the URL bar if visible, else empty",
  "title": "short title from first line of caption",
  "description": "full caption text visible, keep language as-is",
  "date": "YYYY.MM if you can tell, else empty",
  "city": "city if mentioned or tagged",
  "country": "country if mentioned or tagged",
  "isTravel": true,
  "matchesStopPost": false
}
If the URL bar is in the screenshot, always extract /p/ or /reel/ shortcode.
isTravel false for gym, food-only, memes, or non-place posts.
matchesStopPost true only if this screenshot is clearly the same post as the stop post described.`;

async function extractWithOpenAI(imageB64, mime, stopHint) {
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
  const body = {
    model,
    temperature: 0,
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: EXTRACT_PROMPT + '\nStop post already on the website:\n' + stopHint },
          { type: 'image_url', image_url: { url: `data:${mime};base64,${imageB64}` } }
        ]
      }
    ]
  };
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || 'OpenAI request failed');
  return JSON.parse(json.choices[0].message.content);
}

async function extractWithAnthropic(imageB64, mime, stopHint) {
  const model = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5';
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      max_tokens: 1500,
      temperature: 0,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: EXTRACT_PROMPT + '\nStop post already on the website:\n' + stopHint },
            { type: 'image', source: { type: 'base64', media_type: mime, data: imageB64 } }
          ]
        }
      ]
    })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error?.message || 'Anthropic request failed');
  const text = json.content.map((c) => c.text || '').join('\n');
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('No JSON in model response');
  return JSON.parse(match[0]);
}

async function geocode(city, country) {
  const q = [city, country].filter(Boolean).join(', ');
  if (!q) return { lat: null, lng: null };
  const url =
    'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(q);
  const res = await fetch(url, {
    headers: { 'User-Agent': 'dimitriosgeorgiou.github.io-travel-ingest/1.0' }
  });
  if (!res.ok) return { lat: null, lng: null };
  const rows = await res.json();
  if (!rows[0]) return { lat: null, lng: null };
  return { lat: Number(rows[0].lat), lng: Number(rows[0].lon) };
}

function jsString(s) {
  return JSON.stringify(s == null ? '' : String(s));
}

function formatPost(p) {
  const desc = String(p.description || '').replace(/`/g, "'");
  const date = String(p.date || '').replace(/-/g, '.');
  const id = p.instagramPostId || '';
  const url = p.instagramUrl || (id ? 'https://www.instagram.com/p/' + id + '/' : '');
  const lat = Number.isFinite(p.lat) ? p.lat : 0;
  const lng = Number.isFinite(p.lng) ? p.lng : 0;
  return `  {
    lat: ${lat},
    lng: ${lng},
    title: ${jsString(p.title || '')},
    description: \`${desc}\`,
    date: ${jsString(date)},
    instagramPostId: ${jsString(id)},
    instagramUrl: ${jsString(url)},
    city: ${jsString(p.city || '')},
    country: ${jsString(p.country || '')}
  }`;
}

function appendPosts(posts) {
  let src = fs.readFileSync(DATA_FILE, 'utf8');
  const idx = src.lastIndexOf('];');
  if (idx < 0) throw new Error('Could not find end of myTravelPosts array');
  const block = posts.map(formatPost).join(',\n') + ',\n';
  src = src.slice(0, idx) + block + src.slice(idx);
  fs.writeFileSync(DATA_FILE, src);
}

function json(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let n = 0;
    req.on('data', (c) => {
      n += c.length;
      if (n > 25 * 1024 * 1024) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function mimeOk(m) {
  return m === 'image/jpeg' || m === 'image/png' || m === 'image/webp';
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://127.0.0.1');

    if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) {
      const html = fs.readFileSync(path.join(PUBLIC, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/status') {
      const posts = loadPosts();
      const last = lastPost(posts);
      json(res, 200, {
        postCount: posts.length,
        lastPost: last,
        vision: visionProvider(),
        host: `http://${HOST}:${PORT}`
      });
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/process-one') {
      const provider = visionProvider();
      if (!provider) {
        json(res, 400, {
          error: 'No vision key. Add OPENAI_API_KEY or ANTHROPIC_API_KEY to scripts/travel-ingest/.env'
        });
        return;
      }
      const payload = JSON.parse(await readBody(req));
      const mime = payload.mime || 'image/jpeg';
      if (!mimeOk(mime)) {
        json(res, 400, { error: 'Use png, jpg, or webp screenshots' });
        return;
      }
      const posts = loadPosts();
      const last = lastPost(posts);
      const ids = idSet(posts);
      const stopHint = last
        ? `${last.title} | ${last.city}, ${last.country} | ${last.date} | ${last.instagramPostId}`
        : '(none)';
      const raw =
        provider === 'openai'
          ? await extractWithOpenAI(payload.data, mime, stopHint)
          : await extractWithAnthropic(payload.data, mime, stopHint);

      const id = raw.instagramPostId || shortcodeFromUrl(raw.instagramUrl) || '';
      const instagramUrl =
        raw.instagramUrl || (id ? 'https://www.instagram.com/p/' + id + '/' : '');
      const coords = raw.city || raw.country ? await geocode(raw.city, raw.country) : { lat: null, lng: null };
      if (raw.city || raw.country) await new Promise((r) => setTimeout(r, 1100));

      const draft = {
        filename: payload.name || '',
        title: raw.title || '',
        description: raw.description || '',
        date: raw.date || '',
        city: raw.city || '',
        country: raw.country || '',
        instagramPostId: id,
        instagramUrl,
        lat: coords.lat,
        lng: coords.lng,
        isTravel: raw.isTravel !== false,
        matchesStopPost: Boolean(raw.matchesStopPost) || (id && last && id === last.instagramPostId)
      };

      let status = 'new';
      if (id && ids.has(id)) status = 'duplicate';
      else if (draft.matchesStopPost) status = 'stop';
      else if (!id && similarExisting(posts, draft)) status = 'duplicate';
      else if (draft.isTravel === false) status = 'skip';
      draft.status = status;
      json(res, 200, { post: draft });
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/commit') {
      const payload = JSON.parse(await readBody(req));
      const incoming = Array.isArray(payload.posts) ? payload.posts : [];
      if (!incoming.length) {
        json(res, 400, { error: 'No posts to append' });
        return;
      }
      const posts = loadPosts();
      const ids = idSet(posts);
      const toWrite = [];
      for (const p of incoming) {
        const id = p.instagramPostId || shortcodeFromUrl(p.instagramUrl);
        if (id && ids.has(id)) continue;
        if (p.status === 'duplicate' || p.status === 'stop' || p.status === 'skip') continue;
        toWrite.push({
          title: p.title,
          description: p.description,
          date: p.date,
          city: p.city,
          country: p.country,
          instagramPostId: id,
          instagramUrl: p.instagramUrl,
          lat: p.lat,
          lng: p.lng
        });
        if (id) ids.add(id);
      }
      if (!toWrite.length) {
        json(res, 200, { written: 0, message: 'Nothing new to append' });
        return;
      }
      appendPosts(toWrite);
      json(res, 200, { written: toWrite.length, file: 'assets/js/travel-posts-data.js' });
      return;
    }

    json(res, 404, { error: 'Not found' });
  } catch (err) {
    json(res, 500, { error: err.message || 'Server error' });
  }
});

server.listen(PORT, HOST, () => {
  process.stdout.write(`Travel ingest: http://${HOST}:${PORT}\n`);
});
