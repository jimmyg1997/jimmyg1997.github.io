# Technical Review Summary: dimitriosgeorgiou.github.io

**Scope:** Operations, functionality, and endpoints from Day 1 to present.  
**Stack:** Jekyll (Minimal Mistakes theme), static site, GitHub Pages.  
**Last updated:** February 2025.

---

## 1. Architecture Overview

| Layer | Technology |
|-------|------------|
| **Generator** | Jekyll 4.x (GitHub Pages) |
| **Theme** | Minimal Mistakes (remote_theme: mmistakes/minimal-mistakes) |
| **Hosting** | GitHub Pages (static) |
| **Data** | Liquid + YAML (`_data/`, front matter) + client-side JSON/JS |

The site is **fully static**: no server-side APIs or dynamic backends. All “endpoints” are either **page routes** (URLs), **external third-party APIs**, or **static assets**.

---

## 2. Site Routes & Endpoints (Pages)

### 2.1 Core Pages (Main navigation)

| Route | Source | Purpose |
|-------|--------|---------|
| `/` | `index.md` (splash layout) | Home: hero, feature rows, CV timeline |
| `/cv/` | `_pages/cv.md` | Curriculum Vitae |
| `/publications/` | `_pages/publications.md` + collection | Academic & industry publications |
| `/projects/` | `_pages/projects.md` + collection | Portfolio projects |
| `/articles/` | `_pages/articles.md` + collection | Articles (e.g. Substack, LinkedIn) |
| `/personal/` | `_pages/personal.md` + collection | Personal development, books, courses |
| `/volunteering/` | `_pages/volunteering.md` | Volunteering & NGOs |
| `/travelling/` | `_pages/travelling.md` | Travel map, Instagram feed, travel posts |
| `/calisthenics/` | `_pages/calisthenics.md` + collection | Fitness & nutrition |
| `/wishlist/` | `_pages/wishlist.md` + `_data/wishlist.yml` | Gift wishlist (data-driven grid) |
| `/contact/` | `_pages/contact.md` | Contact form + social links |

### 2.2 Jekyll Collections (content-driven sub-routes)

Each collection uses permalink `/:collection/:path/` (e.g. `/publications/paper-name/`).

| Collection | Purpose |
|------------|---------|
| `publications` | Papers, talks |
| `datascience` | Data science content |
| `phd` | PhD-related content |
| `travelling` | Travel collection items |
| `calisthenics` | Calisthenics posts |
| `personal` | Personal development posts |
| `dl`, `ml`, `st`, `bigdata`, `tuto` | Thematic content |
| `projects` | Project write-ups |

### 2.3 Utility & System Pages

| Route | Purpose |
|-------|---------|
| `/search/` | Site search (Lunr by default; config: `search_provider`) |
| `/sitemap/` | Human-readable sitemap page |
| `/archive/`, `/year-archive/`, `/tags-archive/`, `/categories-archive/` | Archives |
| `/blog/`, `/portfolio/`, `/splash-page/`, `/sample-page/` | Theme/sample pages |
| `/404.html` | Custom 404 |

### 2.4 Generated Assets (Jekyll plugins)

- **Sitemap:** `jekyll-sitemap` → `/sitemap.xml` (machine-readable).
- **Feed:** `jekyll-feed` → `/feed.xml` (Atom feed; path configurable in `_config.yml`).

---

## 3. External Endpoints & Integrations

### 3.1 Contact & Forms

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `https://formspree.io/f/xqarllrb` | POST | Contact form submissions. Client uses `fetch()` with `Accept: application/json`; form includes `_subject`, `_format`, `_replyto`, honeypot `_gotcha`. |

**Operation:** Contact page form → Formspree → email to site owner. No backend on the repo.

### 3.2 Analytics & Visit Counting

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `https://api.countapi.xyz/hit/dimitriosgeorgiou.github.io/visits` | GET | Increment visit counter (called from footer). |
| `https://api.countapi.xyz/get/dimitriosgeorgiou.github.io/visits` | GET | Read current visit count (displayed in footer). |

**Operation:** CountAPI used as a serverless hit counter; no backend on the repo.

### 3.3 Newsletter (Mailchimp)

- **Embed:** Mailchimp embed/popup scripts (e.g. `mc.us3.list-manage.com`, `downloads.mailchimp.com`).
- **Form action:** `https://gmail.us3.list-manage.com/subscribe/post?u=...&id=...` (POST).  
Present in theme layout (`_layouts/single.html`) and thus on many pages; form may be hidden or removed on some pages (e.g. “Removed subscribe form” in project pages).

### 3.4 Instagram

- **Embed:** `//www.instagram.com/embed.js`; embeds use `data-instgrm-permalink` (e.g. `/travelling/`).
- **Data:** Travel posts reference `instagramUrl` / `instagramPostId` in `assets/js/travel-posts-data.js` (links only; no Instagram API).

### 3.5 Other External Resources

- **Fonts:** `fonts.googleapis.com`, `fonts.gstatic.com` (preconnect in `_includes/seo-enhanced.html`).
- **Icons:** Font Awesome 5 (use.fontawesome.com).
- **Analytics:** Google Analytics placeholder in `_config.yml` (`analytics.provider: google`, `tracking_id: "YOUR_GA_ID"`).

---

## 4. Client-Side Data & Functionality

### 4.1 Travel Map (Travelling page)

- **Data source:** `window.myTravelPosts` in `assets/js/travel-posts-data.js` (~300+ post objects: `lat`, `lng`, `title`, `description`, `date`, `city`, `country`, `instagramUrl`, etc.).
- **Map:** OpenLayers (`#openlayers-map`); markers and counts (countries, cities, posts) derived from `myTravelPosts`.
- **Alternative data:** `assets/js/travels.json` (similar structure; may be legacy or duplicate).

**Operation:** No server call for travel data; all data is in static JS/JSON.

### 4.2 Wishlist

- **Data source:** `_data/wishlist.yml` (YAML list: name, price_range, category, image, link, bought, etc.).
- **Rendering:** Liquid in `_pages/wishlist.md` (or layout) to render a grid of wishlist cards.

**Operation:** Pure Jekyll; no endpoints.

### 4.3 CV / Professional Timeline (Home page)

- **Logic:** `_data/journey.yml` + `_includes/home-journey.html` + `assets/js/home-journey.js` (vertical curated timeline).
- **Data:** Inline in script (work, education, personal, achievements with `start`/`end`, `link`).
- **Features:** Zoom (e.g. Ctrl+scroll), filters by type, hover details, links to internal pages.

**Operation:** Client-side only; no endpoints.

### 4.4 Animations & UX

- **File:** `assets/js/animations.js`.
- **Features:** Intersection Observer fade-in for cards (`.feature__item`, `.project-card`, `.publication-item`, `.wishlist-item`); TOC active state on scroll; smooth anchor scrolling overridden in `_includes/scripts.html` (custom smooth scroll + TOC link fixing).

**Operation:** Client-side only.

### 4.5 Search

- **Provider:** Lunr (default) or Google/Algolia per `_config.yml` (`search`, `search_provider`).
- **Scripts:** Loaded via `_includes/scripts.html` → `search/lunr-search-scripts.html` (or Google/Algolia). Lunr index is built at build time (e.g. `lunr-store.js`, language variants).

**Operation:** Client-side search over static index; no search API endpoint on the site.

---

## 5. SEO, Performance & Security (Operations)

- **SEO:** `_includes/seo-enhanced.html`: meta (title, description, keywords, author, robots), Open Graph, Twitter cards, canonical, JSON-LD (Person + Article), favicons, theme-color.
- **Performance:** Preload for main CSS/JS; preconnect/dns-prefetch for fonts, Font Awesome, Google Analytics.
- **Security:** CSP and referrer meta tags in `seo-enhanced.html`; Formspree honeypot and HTTPS only.
- **HTML:** `compress_html` (Jekyll) enabled for production; development env excluded.

---

## 6. Summary Table: Operations, Functionality, Endpoints

| Area | What exists | Type |
|------|-------------|------|
| **Page routes** | `/`, `/cv/`, `/publications/`, `/projects/`, `/articles/`, `/personal/`, `/volunteering/`, `/travelling/`, `/calisthenics/`, `/wishlist/`, `/contact/`, plus collection permalinks, archives, search, sitemap | Static pages |
| **Contact** | Form → Formspree POST | External endpoint |
| **Visit counter** | CountAPI hit + get | External API |
| **Newsletter** | Mailchimp embed + subscribe POST | External |
| **Travel map** | OpenLayers + `travel-posts-data.js` | Client-side data + map |
| **Wishlist** | `_data/wishlist.yml` → Liquid | Static data |
| **Home journey** | `_data/journey.yml` | Jekyll data + light JS filter |
| **Search** | Lunr (or Google/Algolia) over static index | Client-side |
| **Sitemap / Feed** | `/sitemap.xml`, `/feed.xml` | Generated static |
| **Analytics** | GA placeholder (ID to be set) | External (when configured) |
| **Instagram** | Embed script + permalinks in content | External embed |

---

## 7. Conclusion

- **Operations:** Build (Jekyll) → static HTML/CSS/JS; deploy to GitHub Pages. No app server or database.
- **Functionality:** Rich static site with contact form (Formspree), visit counter (CountAPI), travel map (OpenLayers + large JS dataset), wishlist (YAML), CV timeline (JS), client-side search (Lunr), and theme features (archives, categories, tags).
- **Endpoints:** The only “your” endpoints are **page URLs**. All write/read operations that leave the site use **external services**: Formspree (contact), CountAPI (visits), Mailchimp (newsletter). No custom REST or GraphQL APIs are implemented in the repository.

This document can be updated as new pages, integrations, or client-side features are added.
