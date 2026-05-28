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

- **Site:** Static Jekyll portfolio on GitHub Pages (`jimmyg1997.github.io`)
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
