# RESOLUTION.md — How We Fix Things

Structured playbook so agents and humans resolve issues the same way.

## 1. Classify the problem

| Type | Examples | First step |
|------|----------|------------|
| **Build** | Jekyll error, Liquid exception | Read full `jekyll build` output |
| **Visual** | Wrong font, spacing, mobile break | Compare to Editorial Monochrome in `AGENTS.md` |
| **Behavior** | Journey filter broken on home | `assets/js/home-journey.js` + `_data/journey.yml` |
| **Content** | Wrong nav link, missing page | `_pages/`, `_data/navigation.yml`, collections |
| **Deploy** | 404 on GitHub Pages | `baseurl`, `url` in `_config.yml`, permalink |
| **Agent** | Wrong repo edited, skipped review | Re-open correct folder; re-run `WORKFLOW.md` |

## 2. Standard resolution loop

1. **Reproduce** — local URL or exact command failure  
2. **Locate** — smallest file set (use `TECHNICAL_REVIEW_SUMMARY.md` for routes)  
3. **Hypothesis** — one sentence cause  
4. **Fix** — minimal diff; respect `LIMITATIONS.md`  
5. **Verify** — commands from `CURSOR.md`  
6. **Record** — append `MEMORY.md` if non-obvious  

## 3. Common fixes

### Jekyll build fails

- Check front matter (`---` blocks) on new pages  
- Collection name must match `_config.yml`  
- Liquid syntax: unclosed Liquid tags or variables (see Jekyll docs)  

### CSS not applying

- Edit `_sass/custom.scss`, not `_site/assets/css/`  
- Specificity: use `.dg-` or parent scope, not endless `!important`  
- Clear browser cache / hard reload  

### Config change has no effect

```bash
./restart-jekyll.sh
```

### Minimal Mistakes override ignored

- Wrong layer: theme wins if selector is weaker — increase specificity on `body` or `.page` wrapper  
- Skin variables: check `_includes/head/custom.html` CSS variables  

### Home journey missing or wrong milestone

1. Edit `_data/journey.yml` (single source of truth)  
2. Run `node scripts/verify-journey-data.js`  
3. Rebuild site (`bundle exec jekyll build`)  

### Agent marked done but site broken

- Reviewer gate was skipped — run `.cursor/skills/review-gate/SKILL.md`  
- Revert commit or fix forward; log lesson in `MEMORY.md`  

## 4. Escalation

| Situation | Action |
|-----------|--------|
| Gem/ruby version conflict | Document in PLAN.md; user runs `bundle update` consciously |
| Theme upstream breaking change | Pin `remote_theme` version or document override in MEMORY |
| Needs backend / API | Out of scope — discuss separate project |

## 5. After resolution

- [ ] `bundle exec jekyll build` passes  
- [ ] Visual check on mobile + desktop widths  
- [ ] MEMORY.md updated if future agents would repeat the mistake  
