# LIMITATIONS.md — Hard Constraints for AI Agents

Violating these counts as a failed task, even if the site "looks fine."

## Project boundary

- **Only** edit files under `dimitriosgeorgiou.github.io/`
- Never modify other workspace repos or global git config
- Never commit unless the user explicitly asks

## Stack locks

| Allowed | Forbidden |
|---------|-----------|
| Jekyll 4.x, Minimal Mistakes (remote theme) | React, Vue, Next.js, Tailwind |
| Liquid in layouts/includes | Editing vendored theme inside `vendor/` |
| SCSS in `_sass/custom.scss` (+ page SCSS like `cv-page.scss`) | Editing generated `_site/` (except debugging) |
| Vanilla JS in `assets/js/` | Adding Bootstrap, jQuery, or new heavy frameworks |
| GitHub Pages static output | Server-side APIs, databases, auth |

## Design locks (Editorial Monochrome)

- Colors: `#FAFAF8`, `#111111`, `#C8A96E`, `#E8E8E4` (see `AGENTS.md`)
- Fonts: Playfair Display, DM Sans, JetBrains Mono only
- Class prefix: `dg-` for custom components
- **Banned aesthetics:** Inter/Roboto/Arial, purple gradients, neon, pill buttons, hero color banners, shadows > `0 2px 12px rgba(0,0,0,0.08)`, animations > 600ms

## CSS discipline

- Max **3** `!important` declarations in `custom.scss` (if more, fix selectors)
- Mobile-first: base mobile, `@media (min-width: 768px)` for desktop
- Never patch Minimal Mistakes core files — override in `_sass/`

## Content & SEO

- Do not break existing permalinks or collection URLs without user approval
- `_config.yml` changes require **Jekyll restart** (`./restart-jekyll.sh`)
- Keep `url` / `baseurl` consistent with GitHub Pages

## Security & privacy

- Never commit `.env`, API keys, or tokens
- Do not embed third-party trackers without user approval
- Contact forms: do not wire real backends without explicit request

## Review gate

- Multi-file or UI tasks: **Reviewer checklist must pass** before "done"
- Must run `bundle exec jekyll build` after structural changes
- Report build errors verbatim; do not claim success on failure

## Human approval required

- Deleting pages or collections
- Changing site title, domain, or repository settings
- Large dependency upgrades (`Gemfile`)
- Force push or destructive git operations
