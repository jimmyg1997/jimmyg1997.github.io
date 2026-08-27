# Travel screenshot ingest

Local tool (localhost only). Drop Instagram screenshots, compare them to posts already in `assets/js/travel-posts-data.js`, preview, then append.

It does **not** scrape Instagram.

## Run

```bash
cp scripts/travel-ingest/.env.example scripts/travel-ingest/.env
# add OPENAI_API_KEY or ANTHROPIC_API_KEY
node scripts/travel-ingest/server.mjs
```

Open http://127.0.0.1:8765

## How to capture

1. Open the last post shown on the page (stop sign).
2. Screenshot **newer** posts as whole browser tabs so the URL bar is visible (`instagram.com/p/SHORTCODE`).
3. Include that last-on-site post in the batch.
4. Drop all images → Process batch → tick what to keep → Append.

The missing count is **vs this batch**, not vs your full Instagram grid.

## After append

Hard-refresh http://localhost:4000/travelling/ (Jekyll watch should pick up the JS file).
