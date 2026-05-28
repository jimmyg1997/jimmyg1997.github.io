# SKILLS.md — Cursor Agent Skills Index

Skills live in `.cursor/skills/<name>/SKILL.md`. Cursor loads them when the task matches the skill `description`.

## Project skills

| Skill | Path | Use when |
|-------|------|----------|
| **frontend-design** | `.cursor/skills/frontend-design/SKILL.md` | UI, layout, typography, colors, animations, new page visuals |
| **jekyll-implement** | `.cursor/skills/jekyll-implement/SKILL.md` | New pages, collections, Liquid layouts, `_config.yml` |
| **planner** | `.cursor/skills/planner/SKILL.md` | Breaking down features before coding |
| **review-gate** | `.cursor/skills/review-gate/SKILL.md` | **Mandatory** before marking task complete |

## How to invoke

In chat:
```
Use skill review-gate before finishing.
```

Or paste the relevant **AGENT block** from `AGENTS.md` § Agent roles.

## Adding a skill

1. Create `.cursor/skills/<kebab-name>/SKILL.md`
2. YAML frontmatter: `name`, `description` (third person; include trigger terms)
3. Add row to this file
4. Test: ask Cursor to perform a task that should trigger the skill

## External reference

Anthropic's generic [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) skill inspired ours; this repo's version is **locked to Editorial Monochrome + Jekyll**.
