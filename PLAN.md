# PLAN.md — Active Sprint Plan

> **Planner agent** maintains this file. Implementer does not start multi-file work until the user approves the plan below.

## Status

| Field | Value |
|-------|-------|
| **Sprint** | Track A: orphans, then Home mock, then CV mock |
| **Updated** | 2026-08-14 |
| **Approved by user** | Draft |

## Decisions already captured

- Stay on Jekyll / GitHub Pages. No React, Next, Vue, Tailwind.
- Keep the navy home/CV hero (`overlay_color: "#001f3f"`).
- User likes both mocks in `_previews/` as visual direction.
- Map layout and tone only. Real name, roles, dates, and copy stay. No invented people or fake employers.
- Sequence: **orphans first**, then Home, then CV. Each phase needs its own approval.

## Goal (phase 1 only)

Remove unused duplicate theme files and sample routes. Live nav permalinks stay. Home and CV must look the same after this phase.

## Phase 1 tasks (this approval)

- [ ] Delete `_includes/head2.html`, `assets/css/main2.scss`, `_sass/minimal-mistakes2.scss`, `_sass/minimal-mistakes/_page2.scss`
- [ ] Delete `_pages/sample-page.md`, `_pages/splash-page.md`, `_pages/recipes-archive.md`, `_pages/portfolio-archive.html`
- [ ] Delete `assets/js/hello-france.js` and unused `assets/js/d3/`
- [ ] `bundle exec jekyll build` must pass
- [ ] Spot-check `/`, `/cv/`, `/contact/` on http://localhost:4000 (no visual change)

## Later (not this approval)

- Phase 2: restyle Home toward `_previews/home-keep-hero-mock.png` (navy hero kept, cream cards, gold links, real journey data).
- Phase 3: restyle CV toward `_previews/cv-keep-hero-mock.png` (navy header, gold accents instead of blue, real CV content).

## Out of scope (phase 1)

- Any CSS or Liquid visual change
- Splitting mega `_pages`
- De-vendoring Minimal Mistakes
- jQuery removal

## Risks

- Sample URLs (`/sample-page/`, `/splash-page/`, `/recipes-archive/`, `/portfolio/`) will 404. They are not in main nav.
- Forgotten include of `main2.css` would break a page. Mitigation: already grepped layouts; then build.

## Verification

```bash
bundle exec jekyll build
./restart-jekyll.sh
# visual: http://localhost:4000  /cv/  /contact/
```

## HITL

Type `Yes, I reviewed the plan` to start **phase 1 (orphan delete) only**. Home and CV restyles wait until that build is green and you approve the next phase.

## Previous sprint (closed)

Home journey timeline (2026-05-25) implemented. Visual review at localhost was still open.
