# MEMORY.md — Persistent Project Memory

> Living log of decisions, gotchas, and conventions. Agents **append** after approved work; do not delete history without user consent.

## How to use

| Action | When |
|--------|------|
| **Read** | Start of any session touching architecture or design |
| **Append** | After user-approved merge of a non-trivial change |
| **Compact** | User asks to summarize; move old entries to `MEMORY.archive.md` |

## Format for new entries

```markdown
### YYYY-MM-DD — Short title
- **Decision:** …
- **Why:** …
- **Files:** `path/a`, `path/b`
- **Verify:** command run + result
```

---

## Project facts (stable)

- **Site:** Static Jekyll portfolio on GitHub Pages (`dimigeorgiou.github.io`)
- **Theme:** Minimal Mistakes via `remote_theme`
- **Design system:** Editorial Monochrome — see `AGENTS.md`
- **Local dev:** `./restart-jekyll.sh` → http://localhost:4000
- **Build:** `bundle exec jekyll build`
- **Home journey:** `_data/journey.yml` + `_includes/home-journey.html`; test: `node scripts/verify-journey-data.js`

## Architecture pointers

- Custom styles: `_sass/custom.scss` (+ page-specific SCSS)
- CSS variables / fonts: `_includes/head/custom.html`
- JS: `assets/js/design-system.js`, `animations.js`, page scripts
- Navigation: `_data/navigation.yml`
- Technical map: `TECHNICAL_REVIEW_SUMMARY.md`

## Agent harness (2026-05)

- Multi-agent workflow documented in `WORKFLOW.md`
- Skills in `.cursor/skills/` — index in `SKILLS.md`
- Cursor usage: `CURSOR.md`
- Hard limits: `LIMITATIONS.md`

---

## Decision log

<!-- Append new entries below this line -->

### 2026-08-14 — Local travel screenshot ingest
- **Decision:** Localhost tool at `scripts/travel-ingest/` reads screenshots (vision API), diffs vs `travel-posts-data.js`, shows last on-site post and missing-in-batch count. No Instagram scraping.
- **Why:** User wanted one-button ingest of new travel posts without Meta Graph setup.
- **Files:** `scripts/travel-ingest/*`, `.gitignore` (`.env`), `CURSOR.md`
- **Verify:** `node scripts/travel-ingest/server.mjs` + `GET /api/status`

### 2026-08-14 — Journey titles stay inside bars
- **Decision:** Reverted outside/hanging labels. Titles clip to the colored bar. Short bars use a compact name (org after `@`, or left of `·`) so the box is not empty garbage like “Polls An…”. Full title remains on hover.
- **Why:** User found names sitting outside the boxes awful.
- **Files:** `assets/js/home-journey.js`, `_sass/home-journey.scss`, `_includes/scripts.html` (`?v=33`)
- **Verify:** `node scripts/verify-journey-data.js`; `bundle exec jekyll build`

### 2026-08-14 — Journey titles pack beside bars
- **Decision:** Short bars are color-only; the title sits beside them. Sublane packing includes label width so names are not ellipsized into leftover gaps. Travel pills stay compact.
- **Why:** Post-layout hanging still clipped titles (no reserved gap) and looked worse.
- **Files:** `assets/js/home-journey.js`, `_sass/home-journey.scss`, `_includes/scripts.html` (`?v=32`)
- **Verify:** `node scripts/verify-journey-data.js`; `bundle exec jekyll build`

### 2026-08-14 — Journey bar titles hang right
- **Decision:** Short bars keep the color span; the title hangs to the right in the gap instead of being ellipsized inside the bar. Dense clusters still clip if there is no gap.
- **Why:** Duration-width bars cut titles like “Polls Analyzer - ..”.
- **Files:** `_sass/home-journey.scss`, `assets/js/home-journey.js`, `_includes/scripts.html` (`?v=31`)
- **Verify:** `node scripts/verify-journey-data.js`; `bundle exec jekyll build`

### 2026-08-14 — Journey DM Sans + scrollable hover card
- **Decision:** Journey title/body/filters use DM Sans (no Playfair). Hover card is pointer-interactive, max-height scrollable, stays open while the pointer is on it; “Click for full popup” removed in favor of a real page link.
- **Why:** User wanted matching fonts and to scroll the hover window without a click-here hint.
- **Files:** `_sass/home-journey.scss`, `assets/js/home-journey.js`, `_data/journey.yml`, `_includes/home-journey.html`, `_includes/scripts.html` (`?v=30`)
- **Verify:** `node scripts/verify-journey-data.js` PASS; `bundle exec jekyll build` exit 0

### 2026-08-14 — Home excerpt size, journey sans titles, lane emojis
- **Decision:** Larger feature-card excerpts; journey popup titles use DM Sans not Playfair; left lanes get emojis (Personal = 🌱).
- **Why:** User found card copy too small, disliked serif on journey detail, wanted Personal emoji to match the Personal tab.
- **Files:** `_sass/custom.scss`, `_sass/home-journey.scss`, `_data/journey.yml`, `assets/js/home-journey.js`, `_includes/scripts.html` (`?v=29`)
- **Verify:** `node scripts/verify-journey-data.js` PASS; `bundle exec jekyll build` exit 0

### 2026-08-14 — Reverted phases 1–3
- **Decision:** Discarded local orphan-delete and Home/CV restyle. Site matches `fa6b9ca` again.
- **Why:** User did not like the mock-based look and asked to restore the discussed checkpoint.
- **Files:** `git restore .` from `fa6b9ca` (no reset, no push)
- **Verify:** `git status` clean vs `origin/main` before this MEMORY note

### 2026-05-25 — Agent documentation harness
- **Decision:** Added WORKFLOW, MEMORY, SKILLS, CURSOR, PLAN, LIMITATIONS, `.cursor/rules/`, `.cursor/skills/`
- **Why:** Repeatable planner → implement → review loop; frontend-design skill adapted for Jekyll (not React)
- **Files:** repo root + `.cursor/**`
- **Verify:** `scripts/verify-agent-harness.sh` — PASS (2026-05-25)

### 2026-05-25 — Jekyll build fixes (harness QA)
- **Decision:** Exclude agent docs from Jekyll (`_config.yml` exclude); ASCII-only em-dashes in SCSS comments
- **Why:** Root `.md` files are processed by Liquid; UTF-8 em-dash in SCSS broke `jekyll build` on US-ASCII
- **Files:** `_config.yml`, `_sass/custom.scss`, `_sass/cv-page.scss`, `_sass/calisthenics-page.scss`
- **Verify:** `bundle exec jekyll build` exit 0

### 2026-05-25 — Home journey timeline (replaced Gantt)
- **Decision:** Horizontal lane chart; one row per site section (`lane` in `_data/journey.yml`)
- **Lanes:** work, education, publications, articles, projects, volunteering, calisthenics, travel
- **Hover:** detail panel on bar hover/focus; clears only when pointer leaves chart panel (not when moving between bars)
- **Files:** `index.md`, `_includes/home-journey.html`, `_sass/home-journey.scss`, `assets/js/home-journey.js?v=6`
- **Verify:** `node scripts/verify-journey-data.js`; `bundle exec jekyll build` exit 0

### 2026-08-27 — GitHub username / Pages rename
- **Decision:** After username `jimmyg1997` → `dimigeorgiou`, rename Pages repo to `dimigeorgiou.github.io` and update site `url` / GitHub links
- **Why:** User Pages require `{username}.github.io`; old root URLs 404’d; no Pages redirects
- **Files:** `_config.yml`, `_includes/footer.html`, `_includes/seo-enhanced.html`, `_pages/{contact,projects,personal,entrepreneurship}.md`, `MEMORY.md`
- **Left alone:** X/Twitter handle `jimmyg1997`
- **Verify:** `gh repo rename`; `bundle exec jekyll build`; curl `https://dimigeorgiou.github.io/`
