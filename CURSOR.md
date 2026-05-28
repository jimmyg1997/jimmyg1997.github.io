# CURSOR.md — How We Work in This Repo

Quick reference for you and for AI agents using Cursor.

## Files map

| File | Purpose |
|------|---------|
| `AGENTS.md` | Roles, stack, design system, commands |
| `WORKFLOW.md` | Planner → implement → review loop |
| `LIMITATIONS.md` | Hard "never do" rules |
| `MEMORY.md` | Durable decisions (append-only log) |
| `SKILLS.md` | Index of `.cursor/skills/` |
| `PLAN.md` | Current sprint / active task plan |
| `CURSOR.md` | This guide |
| `.cursorrules` | Project lock + session greeting |
| `.cursor/rules/*.mdc` | Role-specific rules (auto-loaded) |

## Modes (Cursor)

| Mode | Use for |
|------|---------|
| **Ask** | Explore codebase, no edits |
| **Plan** | Large feature; editable plan before code |
| **Agent** | Implementation after plan approval |
| **Debug** | Tricky JS/build issues |

Recommended sequence: **Plan → approve → Agent → Reviewer skill**.

## Commands

```bash
# Install (once)
bundle install

# Dev server (kills port 4000 first)
./restart-jekyll.sh
./restart-jekyll.sh --livereload

# Production build (CI check)
bundle exec jekyll build

# CV timeline logic test
node scripts/verify-journey-data.js
```

## Resolving problems

| Symptom | Likely fix |
|---------|------------|
| Styles not updating | Hard refresh; confirm edits in `_sass/custom.scss` not `_site/` |
| Config change ignored | Restart Jekyll (`./restart-jekyll.sh`) |
| Theme override lost | Wrong file — use `_sass/custom.scss`, not vendor theme |
| Layout broken mobile | Check mobile-first order in SCSS |
| Build fails | Read error; often Liquid syntax or missing front matter |
| Agent edits wrong project | Open folder `dimitriosgeorgiou.github.io` only; check 🟢 greeting |

## Review before merge

1. Cursor: **Review → Find Issues** on the diff
2. Agent: run `review-gate` skill checklist
3. Human: scan visual diff at http://localhost:4000

## Copying this harness to a React project

Replace build commands with `npm run build`, `npm test`, `npm run lint`. Keep `WORKFLOW.md`, `LIMITATIONS.md`, reviewer gate, and `frontend-design` (allow React in limitations). See `WORKFLOW.md` § React.
