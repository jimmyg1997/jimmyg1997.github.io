# PLAN.md — Active Sprint Plan

> **Planner agent** maintains this file. Implementer does not start multi-file work until the user approves the plan below.

## Status

| Field | Value |
|-------|-------|
| **Sprint** | Home journey timeline |
| **Updated** | 2026-05-25 |
| **Approved by user** | Implicit (implement request) |

## Goal

Replace index Gantt timeline with curated vertical journey aligned to site content.

## Tasks

- [x] Agent harness docs
- [x] `_data/journey.yml` curated milestones (work / research / impact)
- [x] `_includes/home-journey.html` + SCSS + filter JS
- [x] Remove `cv-timeline.js` and ~400 lines Gantt SCSS
- [x] Build + `verify-journey-data.js` PASS
- [ ] User visual review at http://localhost:4000

## Out of scope

- Migrating to React or Tailwind
- Redesigning entire site in one pass

## Verification

```bash
bundle exec jekyll build
node scripts/verify-journey-data.js
```

## Notes

_Add planner notes here._
