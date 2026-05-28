# AGENTS.md — Portfolio Agent Operating Manual

> Machine-readable project manual ([agents.md](https://agents.md/) convention). Humans: start with `CURSOR.md`.

## Project

Personal portfolio — **Dimitrios Georgiou** (ML engineer, researcher, calisthenics, travel).  
**Stack:** Jekyll 4.x · Minimal Mistakes · Liquid · YAML · vanilla CSS/JS · GitHub Pages.  
**Not React** — do not introduce React/Vue/Next unless the user explicitly migrates the stack.

## Commands (run exactly)

```bash
bundle install                    # once
./restart-jekyll.sh               # dev → http://localhost:4000
bundle exec jekyll build          # must pass before "done"
node scripts/verify-journey-data.js   # if _data/journey.yml changed
```

## Design: Editorial Monochrome

| Token | Value |
|-------|--------|
| Background | `#FAFAF8` |
| Text | `#111111` |
| Accent | `#C8A96E` (gold, sparse) |
| Border | `#E8E8E4` |
| Dark bg | `#0F0F0E` |

**Fonts:** Playfair Display (headings) · DM Sans (body) · JetBrains Mono (labels)  
**Classes:** prefix `dg-` · styles in `_sass/custom.scss` only  
**Inspiration:** menisorfeas.com — calm, editorial, not cluttered academic

Full rules: see § Design implementation below and `LIMITATIONS.md`.

## File map

```
_sass/custom.scss           ← primary style overrides
_sass/*-page.scss           ← page-specific SCSS
_includes/head/custom.html  ← fonts, CSS variables
_layouts/                   ← page shells
_pages/                     ← static pages
_data/navigation.yml        ← nav
assets/js/                  ← behavior
_config.yml                 ← site config (restart Jekyll after edits)
```

## Agent roles

Invoke by pasting the role block at the start of a Cursor chat. Full loop: `WORKFLOW.md`.

### Planner

```
You are the Planner for dimitriosgeorgiou.github.io.
Read WORKFLOW.md, LIMITATIONS.md, PLAN.md, MEMORY.md.
Output: updated PLAN.md sections only — goals, tasks, files touched, risks, verification commands.
Do NOT write implementation code. Ask clarifying questions if scope is unclear.
Stop when the plan is ready for human approval.
```

### Implementer

```
You are the Implementer for dimitriosgeorgiou.github.io.
Plan must be user-approved. Follow AGENTS.md, LIMITATIONS.md, WORKFLOW.md.
Edit only allowed paths. Run bundle exec jekyll build before claiming done.
For UI work, apply skill frontend-design.
Hand off to Reviewer — do not mark task complete yourself.
```

### Designer (frontend)

```
You are the Designer for dimitriosgeorgiou.github.io.
Use .cursor/skills/frontend-design/SKILL.md — Editorial Monochrome, Jekyll-safe HTML/CSS.
No generic AI aesthetics. No React. Output working Liquid-friendly markup + SCSS.
```

### Reviewer (mandatory gate)

```
You are the Reviewer for dimitriosgeorgiou.github.io.
Use .cursor/skills/review-gate/SKILL.md checklist.
Read the diff; run bundle exec jekyll build.
Status: PASS (with evidence) or FAIL (numbered fixes). Never say "done" on FAIL.
```

## Design implementation

### CSS

- Override via `_sass/custom.scss` — never vendor theme files
- CSS variables for colors, fonts, spacing
- Mobile-first; desktop `@media (min-width: 768px)`
- Max 3× `!important` in custom.scss

### Typography

- H1: Playfair 3.5rem / 2.2rem mobile, weight 700
- H2: Playfair 2rem, weight 600
- H3: DM Sans 1.25rem, weight 600
- Body: DM Sans 1rem, line-height 1.75
- Labels: JetBrains Mono 0.75rem uppercase

### Components

- Cards: white, 1px border, radius 12px, light hover shadow
- CTAs: gold accent, radius ≤ 6px
- Nav: DM Sans, gold hover/active

### Do NOT

Purple gradients, neon, Inter/Roboto/Arial, heavy shadows, animations > 600ms, Bootstrap/jQuery, full-width color heroes

## Documentation index

| Doc | Role |
|-----|------|
| `WORKFLOW.md` | Multi-agent loop + gates |
| `LIMITATIONS.md` | Hard constraints |
| `MEMORY.md` | Persistent decisions |
| `SKILLS.md` | Skill catalog |
| `CURSOR.md` | Tooling & troubleshooting |
| `PLAN.md` | Active sprint |
| `RESOLUTION.md` | How we fix classes of bugs |
| `TECHNICAL_REVIEW_SUMMARY.md` | Routes & architecture |

## Session start (agents)

1. Read `MEMORY.md` (recent entries)
2. Read `PLAN.md` if multi-step task
3. Obey `LIMITATIONS.md`
4. First chat line: `🟢 dimitriosgeorgiou.github.io — <short topic>`
