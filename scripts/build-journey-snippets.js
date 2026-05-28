#!/usr/bin/env node
/**
 * Extract page content for journey timeline modals from site markdown/HTML pages.
 * Output: _data/journey_snippets.json (keyed by milestone link, e.g. /cv/#klimaka)
 *
 * Usage: node scripts/build-journey-snippets.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const journeyPath = path.join(root, '_data', 'journey.yml');
const outPath = path.join(root, '_data', 'journey_snippets.json');

const PAGE_MAP = {
  '/cv/': '_pages/cv.md',
  '/volunteering/': '_pages/volunteering.md',
  '/publications/': '_pages/publications.md',
  '/articles/': '_pages/articles.md',
  '/projects/': '_pages/projects.md',
  '/entrepreneurship/': '_pages/entrepreneurship.md',
  '/personal/': '_pages/personal.md',
  '/calisthenics/': '_pages/calisthenics.md',
  '/travelling/': '_pages/travelling.md'
};

const pageCache = {};

function readPage(relPath) {
  if (pageCache[relPath]) return pageCache[relPath];
  const full = path.join(root, relPath);
  if (!fs.existsSync(full)) return null;
  pageCache[relPath] = fs.readFileSync(full, 'utf8');
  return pageCache[relPath];
}

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function stripTags(html) {
  return decodeHtml(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanLine(s) {
  const t = stripTags(s).replace(/\s*Expand\s*$/i, '').replace(/\s*Collapse\s*$/i, '');
  return t.length > 8 ? t : '';
}

function uniqueLines(lines, max) {
  const seen = new Set();
  const out = [];
  for (const line of lines) {
    const key = line.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(line);
    if (out.length >= max) break;
  }
  return out;
}

function parseLink(link) {
  if (!link || !link.startsWith('/')) return null;
  const hashIdx = link.indexOf('#');
  let pagePath = hashIdx >= 0 ? link.slice(0, hashIdx) : link;
  if (!pagePath.endsWith('/')) pagePath += '/';
  const anchor = hashIdx >= 0 ? link.slice(hashIdx + 1) : '';
  return { pagePath, anchor };
}

function sliceUntilNextSection(content, startIdx) {
  const rest = content.slice(startIdx);
  const tail = rest.slice(80);
  const nextInTail = tail.search(
    /\n###\s|\n##\s(?!\#)|<div class="timeline-item"|<div class="project-card full-width"|<article class="article-card"/
  );
  const sliceEnd = nextInTail >= 0 ? 80 + nextInTail : Math.min(rest.length, 14000);
  return rest.slice(0, sliceEnd);
}

function findSectionStart(content, anchor) {
  if (!anchor) return 0;
  const patterns = [
    new RegExp(`<h3[^>]*id="${anchor}"`, 'i'),
    new RegExp(`\\{#${anchor}\\}`, 'i'),
    new RegExp(`<article[^>]*id="${anchor}"`, 'i'),
    new RegExp(`<div class="timeline-item" id="${anchor.replace(/-\d{4}$/, '')}"`, 'i')
  ];
  for (const re of patterns) {
    const m = content.match(re);
    if (m && m.index != null) return m.index;
  }
  const base = anchor.replace(/-\d{4}$/, '');
  if (base !== anchor) {
    const divRe = new RegExp(`<div class="timeline-item" id="${base}"`, 'i');
    const m = content.match(divRe);
    if (m && m.index != null) return m.index;
  }
  return -1;
}

function extractMeta(section) {
  const meta = [];
  const re = /<div class="cv-meta[^"]*">[\s\S]*?<span class="cv-meta__label">([^<]+)<\/span>[\s\S]*?<span class="cv-meta__value">([^<]+)<\/span>/gi;
  let m;
  while ((m = re.exec(section))) {
    meta.push(`${m[1].trim()}: ${stripTags(m[2])}`);
  }
  const tech = section.match(/<p class="tech-stack">([\s\S]*?)<\/p>/i);
  if (tech) {
    const line = stripTags(tech[1]);
    if (line) meta.push(line);
  }
  return meta.slice(0, 4);
}

function extractFromSection(section) {
  const paragraphs = [];
  const bullets = [];

  const detailsMatch =
    section.match(/id="[^"]*-details"[^>]*>([\s\S]*?)<\/(?:p|ul|div)>/i) ||
    section.match(/class="timeline-details"[^>]*>([\s\S]*?)<\/p>/i);
  if (detailsMatch) {
    const block = detailsMatch[1];
    const lis = block.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (lis) {
      lis.forEach((li) => {
        const t = cleanLine(li);
        if (t) bullets.push(t);
      });
    } else {
      const t = cleanLine(block);
      if (t) paragraphs.push(t);
    }
  }

  const summaryUl = section.match(/id="[^"]*-summary"[^>]*>([\s\S]*?)<\/ul>/i);
  if (summaryUl) {
    const lis = summaryUl[1].match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    lis.forEach((li) => {
      const t = cleanLine(li);
      if (t) bullets.push(t);
    });
  }

  if (!bullets.length) {
    const lis = section.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    lis.forEach((li) => {
      const t = cleanLine(li);
      if (t && t.length < 420) bullets.push(t);
    });
  }

  const ps = section.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  ps.forEach((p) => {
    if (/expand-link|collapse-link|cv-expand/i.test(p)) return;
    const t = cleanLine(p);
    if (!t || t.length < 20) return;
    if (/^Purpose:|^Features:|^Implementation:|^Architecture:|^Analytics:/i.test(t)) {
      bullets.push(t);
    } else if (!paragraphs.includes(t)) {
      paragraphs.push(t);
    }
  });

  const excerpt = section.match(/class="article-excerpt"[^>]*>([\s\S]*?)<\/p>/i);
  if (excerpt) {
    const t = cleanLine(excerpt[1]);
    if (t) paragraphs.unshift(t);
  }

  const em = section.match(/<p><em>([\s\S]*?)<\/em><\/p>/i);
  if (em) {
    const t = cleanLine(em[1]);
    if (t && !paragraphs.includes(t)) paragraphs.unshift(t);
  }

  return {
    paragraphs: uniqueLines(paragraphs, 3),
    bullets: uniqueLines(bullets, 10),
    meta: extractMeta(section)
  };
}

function extractSnippet(link) {
  const parsed = parseLink(link);
  if (!parsed) return null;
  const rel = PAGE_MAP[parsed.pagePath];
  if (!rel) return null;
  const content = readPage(rel);
  if (!content) return null;

  if (!parsed.anchor) {
    const intro = content.match(/^[^\n#].{40,400}/m);
    if (!intro) return null;
    return { paragraphs: [stripTags(intro[0]).slice(0, 280)], bullets: [], meta: [] };
  }

  const start = findSectionStart(content, parsed.anchor);
  if (start < 0) return null;
  const section = sliceUntilNextSection(content, start);
  const extracted = extractFromSection(section);
  if (!extracted.paragraphs.length && !extracted.bullets.length) return null;
  return extracted;
}

function collectLinks() {
  const raw = fs.readFileSync(journeyPath, 'utf8');
  const links = new Set();
  const re = /^\s+link:\s*["']?([^"'\n]+)["']?\s*$/gm;
  let m;
  while ((m = re.exec(raw))) {
    links.add(m[1].trim());
  }
  return [...links];
}

function main() {
  const links = collectLinks();
  const snippets = {};
  let ok = 0;
  let miss = 0;

  links.forEach((link) => {
    const snip = extractSnippet(link);
    if (snip && (snip.paragraphs.length || snip.bullets.length)) {
      snippets[link] = snip;
      ok += 1;
    } else {
      miss += 1;
      console.warn('No snippet:', link);
    }
  });

  fs.writeFileSync(outPath, JSON.stringify(snippets, null, 2) + '\n');
  console.log(`Wrote ${ok} snippets (${miss} missing) → ${path.relative(root, outPath)}`);
}

main();
