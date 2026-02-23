# REDESIGN_PLAN.md — jimmyg1997.github.io Full Site Redesign
# 
# HOW TO RUN:
# Paste this into Cursor Agent (Cmd+L):
# "Read REDESIGN_PLAN.md. Execute the first unchecked step. 
#  When done mark it ✅, run jekyll serve, verify it works, then stop and report results."
#
# Repeat for each step. Or for full auto:
# "Read REDESIGN_PLAN.md. Execute ALL unchecked steps in order.
#  After each step: mark ✅, run jekyll serve, confirm no build errors, then continue."
#
# GROUND RULES — enforce on every step:
# - NEVER edit _pages/, _posts/, _data/, _collections/ — content is sacred
# - ALL style changes → _sass/custom.scss ONLY
# - ALL JS changes → assets/js/design-system.js ONLY  
# - Font imports → _includes/head/custom.html (append only, never replace)
# - After every step: bundle exec jekyll serve --livereload → check in browser
# - If build fails: revert only the last change, report the error

## PAGES THIS REDESIGN COVERS
# /                    → Home (splash layout, hero, feature rows, timeline)
# /cv/                 → CV (timeline, honors, languages, download)
# /publications/       → Publications (cards, logos, gallery, buttons)
# /projects/           → Projects (project cards, tech stack, galleries)
# /articles/           → Articles (grid, filter, social links)
# /personal/           → Personal (books, courses, competitions, TOC)
# /volunteering/       → Volunteering
# /travelling/         → Travelling (map, Instagram, stats)
# /calisthenics/       → Calisthenics & Nutrition
# /wishlist/           → Wishlist (grid, cards)
# /contact/            → Contact (form, social links)
# /about/              → About / Coaches

---

## STATUS TRACKER
- [x] Step 01 — Install design system files
- [x] Step 02 — Global: fonts, colors, base typography
- [x] Step 03 — Navigation (masthead)
- [x] Step 04 — Home page (/, hero + feature rows + timeline)
- [x] Step 05 — CV page (/cv/)
- [x] Step 06 — Publications page (/publications/)
- [x] Step 07 — Projects page (/projects/)
- [x] Step 08 — Articles page (/articles/)
- [x] Step 09 — Personal page (/personal/)
- [x] Step 10 — Volunteering page (/volunteering/)
- [x] Step 11 — Travelling page (/travelling/)
- [x] Step 12 — Calisthenics page (/calisthenics/)
- [x] Step 13 — Wishlist page (/wishlist/)
- [x] Step 14 — Contact page (/contact/)
- [x] Step 15 — Sidebar (author profile, all pages)
- [x] Step 16 — Footer (all pages)
- [x] Step 17 — Dark mode pass (toggle every page)
- [x] Step 18 — Polish pass (undefined/null/broken images scan)
- [x] Step 19 — Build and deploy

---

## STEP 01 — Install design system files
**Goal:** Drop the 3 new files into the repo so all other steps can build on them.

```
1. Confirm _sass/custom.scss exists with the new design system content
   (Playfair Display, DM Sans, JetBrains Mono, CSS variables, dark mode, cards, etc.)
   If it only has the old Inter/blue system → replace it with the new custom.scss from AGENTS.md

2. Confirm assets/js/design-system.js exists with:
   - Dark mode toggle (localStorage, data-theme attribute)
   - Intersection Observer scroll animations
   - Reading progress bar
   - Active nav highlight
   - External links → target="_blank"

3. In _includes/head/custom.html — APPEND (do not replace) after existing content:
   - Google Fonts link (Playfair Display + DM Sans + JetBrains Mono)
   - Theme flash prevention inline script
   - <script src="/assets/js/design-system.js" defer></script>

4. In assets/css/main.scss — add at the very bottom:
   @import "custom";
   (only if not already there)

5. Run: bundle exec jekyll serve
   Confirm: no build errors, site loads at localhost:4000
```
Mark ✅ when build is clean.

---

## STEP 02 — Global: fonts, colors, base typography
**Goal:** Playfair Display on all headings, DM Sans on all body text, correct colors everywhere.

```
Open localhost:4000 in browser. Check every visible element.

1. Headings (h1-h4):
   - Must use: font-family: var(--font-display) = Playfair Display
   - If still showing Inter/system font → add to _sass/custom.scss:
     h1, h2, h3, h4, h5, h6,
     .page__title, .archive__item-title, .site-title {
       font-family: var(--font-display) !important;
     }

2. Body text (p, li, nav links):
   - Must use: font-family: var(--font-body) = DM Sans
   - If not applying → add:
     body, p, li, a, .page__content, .author__bio {
       font-family: var(--font-body) !important;
     }

3. Dates, tags, labels:
   - Must use: font-family: var(--font-mono) = JetBrains Mono
   - Apply to: .page__date, .archive__item-date, .page__taxonomy-item a

4. Colors:
   - Background: var(--bg) = #FAFAF8 (not pure white)
   - Body text: var(--text-secondary) = #555550 (not full black)
   - Headings: var(--text-primary) = #111111
   - Links: var(--accent) = #C8A96E (gold)
   - Check no hardcoded #ffffff backgrounds or #000000 text remaining

5. Verify no page shows raw "undefined" or "null" in text
   Run: grep -r "undefined\|null" _site/*.html (check build output)
```
Mark ✅ when fonts and colors are correct on all pages.

---

## STEP 03 — Navigation (masthead)
**Goal:** Clean sticky nav, gold hover, dark mode toggle button visible.

```
Open localhost:4000. Look at the navigation bar.

1. Masthead must be sticky (position: sticky, top: 0, z-index: 100)
2. Background: var(--bg) with backdrop-filter: blur(12px)
3. Border bottom: 1px solid var(--border)
4. Site title: Playfair Display, links to /
5. Nav links: DM Sans 0.875rem, color var(--text-secondary)
6. Nav link hover: color var(--accent) — gold
7. Active page link: color var(--accent)
8. Dark mode toggle button (◐/☀):
   - Must be visible on the right side of nav
   - design-system.js injects it automatically
   - If missing: check design-system.js is loaded (view page source)
9. On narrow screens (< 900px): hamburger menu must still work
   Do NOT break the greedy-nav collapse behavior

Check: nav does not overlap page content when scrolling
Check: all 9 nav items visible and correctly ordered:
  CV | Publications | Projects | Personal | Volunteering | Travelling | Calisthenics | Wishlist | Contact
```
Mark ✅ when nav looks clean and dark mode toggle works.

---

## STEP 04 — Home page (/)
**Goal:** Professional hero section, clean feature cards, timeline section.

```
Open localhost:4000

HERO SECTION:
1. Find the splash layout hero (_layouts/splash.html or index.md front matter)
2. The hero should show:
   - Eyebrow text (mono font, gold color): "Data Scientist · Researcher · Calisthenics Athlete"
   - Name in large Playfair Display: "Dimitrios Georgiou"
   - Role description in DM Sans: short bio sentence
   - 3 CTA buttons: View CV, Projects, Contact
   - A thin gold divider line below
3. Remove or restyle the old blue gradient hero overlay if present
4. Apply class="dg-hero" to the hero container
5. Use CSS classes: dg-hero__eyebrow, dg-hero__name, dg-hero__role, dg-hero__links

FEATURE CARDS (Professional Journey + Personal Interests sections):
1. Each card must have: white bg, 1px border, 12px border-radius, hover shadow
2. Section titles: Playfair Display, class="dg-section__title"
3. Card images: 180px height, object-fit: cover, border-radius 8px
4. If any card image is broken (404): replace src with working URL or remove img
5. Wrap both feature sections in <div class="dg-stagger"> for scroll animation

TIMELINE SECTION:
1. The Gantt-style CV timeline at bottom of home page
2. Must render without horizontal overflow on desktop
3. Verify filter buttons (Professional Work / Education / Personal / Achievements) work
4. Verify hover tooltips appear on timeline bars
5. Verify Ctrl+scroll zoom works

VISIT COUNTER (footer area):
1. CountAPI call should still work — do not remove it
2. Verify the visitor number shows (may take a moment to load)
```
Mark ✅ when home page hero, cards, and timeline all look correct.

---

## STEP 05 — CV page (/cv/)
**Goal:** Professional, scannable CV layout with clean typography.

```
Open localhost:4000/cv/

1. Page title: Playfair Display, large, clean
2. CV Summary box: var(--bg-subtle) background, readable
3. Download CV button: gold accent color (var(--accent)), prominent
4. Work experience sections:
   - Company logos (cv-logo): 36px height, grayscale filter
   - Company names: DM Sans, bold, deep color
   - Dates: JetBrains Mono, small, var(--text-muted)
   - Bullet points: comfortable line-height (1.65)
5. Education sections: same treatment as work
6. Skills badges: small, mono font, subtle background
7. Languages section (cv-lang-bar): progress bars should be visible
8. Honors grid (cv-honors): 2-column on desktop, 1-column on tablet
9. Timeline at bottom: same as home page timeline — verify it works on this page too
10. All links on CV page: deep blue #1e40af (already in existing CSS — preserve this)
11. Page must use layout: single with TOC enabled
    Verify TOC shows all major sections and scroll-spy works
```
Mark ✅ when CV page is clean and professional.

---

## STEP 06 — Publications page (/publications/)
**Goal:** Each publication is a clear card with image gallery, logos, and action buttons.

```
Open localhost:4000/publications/

1. Page title: Playfair Display
2. Each publication-item:
   - White card background, border, border-radius
   - Publication title: Playfair Display, 1.2rem, bold
   - Authors/venue: DM Sans, italic, var(--text-secondary)
   - Image gallery (gallery-container): must show images, prev/next arrows work
   - Publication logos (publication-logos): logos display at 50px height, grayscale
   - Action buttons (publication-buttons): styled with dg-btn classes
3. Gallery functionality:
   - Verify clicking prev/next arrows cycles through images
   - Active image shows, inactive hidden
   - Dots indicator updates correctly
4. Lightbox:
   - Clicking publication image opens fullscreen lightbox
   - Close button (×) works
   - Escape key closes lightbox
5. TOC on right side: shows all publication sections, scroll-spy works
   Verify ALL publication items appear in TOC (known issue — force visibility)
6. No horizontal overflow on any publication card
```
Mark ✅ when publications page cards and galleries work correctly.

---

## STEP 07 — Projects page (/projects/)
**Goal:** Clean project cards in 2-column grid, tech stack styled, galleries work.

```
Open localhost:4000/projects/

1. Projects intro box: subtle background, centered text
2. Each project-card:
   - 2-column layout on desktop: image left (240px), content right
   - Full-width layout for full-width projects
   - Project title: Playfair Display or DM Sans bold
   - Description: DM Sans, comfortable line-height
   - Tech stack paragraph: JetBrains Mono, subtle blue-left-bordered box
   - Bullet points: clean, not cramped
   - Project links (GitHub, Demo, etc.): dg-btn styled buttons
3. Project galleries: same as publications — arrows and dots work
4. Project main images: max-height 250px, object-fit contain
5. Section headers (h2): Playfair Display with gold underline accent
6. TOC works and shows all project sections
```
Mark ✅ when projects page is clean.

---

## STEP 08 — Articles page (/articles/)
**Goal:** Clean article grid with filter buttons and social links.

```
Open localhost:4000/articles/

1. Articles intro: clean centered box
2. Social links (Substack, LinkedIn etc.):
   - Each is a styled button with icon
   - Hover effect works
3. Filter buttons (if present): 
   - Active state clearly visible (gold or blue highlight)
   - Filtering works (JS behavior preserved)
4. Article cards grid:
   - 2-3 columns on desktop
   - Each card: border, border-radius, hover shadow
   - Article title: Playfair Display
   - Date: JetBrains Mono, small
   - Read more link: gold accent
5. No broken article thumbnails
```
Mark ✅ when articles page looks clean.

---

## STEP 09 — Personal page (/personal/)
**Goal:** Books, courses, competitions all well-styled. TOC works fully.

```
Open localhost:4000/personal/

1. Page intro: clean
2. Books section:
   - current-books grid: 2 columns, book cards with cover image + details
   - "Currently Reading" green ribbon: visible and pulsing
   - completed-books grid: same layout
   - Book cover images: 80px wide, 120px tall, object-fit cover
   - Book title: DM Sans bold
   - Author: italic, muted
   - Rating/progress badge: subtle blue background
3. Courses section:
   - Each course-card: clean border, provider name in blue pill
   - Certificate ID: JetBrains Mono, small, muted
   - Date: muted, small
4. Competitions section:
   - Clean presentation
5. TOC CRITICAL:
   - ALL sections must appear in TOC (Competitions, Books, Courses etc.)
   - Scroll-spy must update active item
   - Sub-items (individual competitions) must be visible in TOC
   - This is a known bug — force with CSS visibility rules in custom.scss
6. Image lightbox:
   - Clicking any personal page image opens lightbox
   - Works correctly
```
Mark ✅ when personal page and TOC are fully working.

---

## STEP 10 — Volunteering page (/volunteering/)
**Goal:** Clean, readable, well-structured.

```
Open localhost:4000/volunteering/

1. Page title: Playfair Display
2. Intro section: subtle background box
3. Each volunteering item/section: clean border, good spacing
4. Organization logos (if any): consistent height, grayscale
5. Dates: JetBrains Mono, muted
6. Links: gold accent
7. TOC works if enabled
```
Mark ✅ when page looks clean.

---

## STEP 11 — Travelling page (/travelling/)
**Goal:** Travel map renders, Instagram section clean, stats visible.

```
Open localhost:4000/travelling/

1. Travel intro: clean box with Instagram button
2. Instagram button: gradient style preserved (already in CSS)
3. OpenLayers map (#openlayers-map):
   - Map must render (requires OpenLayers JS loaded)
   - Markers visible
   - Country/city/post counts shown correctly
4. Travel stats (countries visited, cities, posts):
   - Numbers load from travel-posts-data.js
   - Display cleanly in stat boxes
5. Any Instagram embeds: must load (requires browser JS)
6. No horizontal overflow from map container
```
Mark ✅ when map renders and stats show.

---

## STEP 12 — Calisthenics page (/calisthenics/)
**Goal:** Fitness content clean and well-organized.

```
Open localhost:4000/calisthenics/

1. Page intro: clean
2. Workout/exercise content sections: good spacing, readable
3. Any stat cards: consistent with global stat-card style
4. Progress images/galleries: work correctly
5. Nutrition content: clean typography
6. TOC works if enabled
```
Mark ✅ when page is clean.

---

## STEP 13 — Wishlist page (/wishlist/)
**Goal:** Grid of wishlist items, clean cards, bought items visually distinct.

```
Open localhost:4000/wishlist/

1. Wishlist intro: centered, subtle background
2. Each wishlist-item:
   - 2-column layout: image left (180px), content right
   - Item image: correct aspect ratio, no stretching
   - Item name: bold, DM Sans
   - Price range: muted, small
   - Category badge: JetBrains Mono pill
   - "Already bought" items: visually distinct (opacity or strikethrough)
   - Buy link button: gold accent
3. Wishlist footer: clean centered thank-you message
4. No broken item images
```
Mark ✅ when wishlist looks clean.

---

## STEP 14 — Contact page (/contact/)
**Goal:** Clean form, social links, professional presentation.

```
Open localhost:4000/contact/

1. Contact form:
   - Input fields: var(--bg-card) background, 1px border, border-radius 8px
   - Focus state: gold border (var(--accent))
   - Submit button: gold accent, dg-btn--primary style
   - Placeholder text: muted color
2. Form submits to Formspree (https://formspree.io/f/xqarllrb) — do NOT change this
3. Social links section: clean icons + labels
4. Location/contact info: readable, good spacing
5. After submit: success/error message should display (Formspree handles this)
```
Mark ✅ when contact form is clean.

---

## STEP 15 — Sidebar (author profile)
**Goal:** Consistent sidebar across all pages that use it.

```
Check sidebar on: /cv/, /publications/, /projects/, /personal/

1. Author avatar: 100px circle, 3px border var(--border), gold on hover
2. Author name: Playfair Display, 1.2rem, bold
3. Author bio: DM Sans, 0.875rem, line-height 1.6, var(--text-secondary)
4. Social links (GitHub, LinkedIn, Twitter, etc.):
   - Each link: clean icon + label
   - Hover: var(--accent) gold
5. Sidebar background: transparent (no white box unless specified)
6. Sidebar should not have a visible seam/border that looks broken
```
Mark ✅ when sidebar looks consistent across all pages.

---

## STEP 16 — Footer
**Goal:** Professional 3-column footer on every page.

```
Scroll to bottom of every page and check:

1. Footer structure (3 columns):
   - Left: Social links (GitHub, LinkedIn, etc.) with hover effects
   - Center: Newsletter signup (Mailchimp form) — preserve existing form action URL
   - Right: Visitor counter + location + last updated
2. Visitor counter: loads from CountAPI — shows number or "loading..."
3. Gold shimmer bar at top of footer: visible
4. Copyright line at bottom: clean, correct year
5. Footer background: var(--bg-subtle), not harsh white or dark
6. All footer links: hover to var(--accent) gold
7. In dark mode: footer still readable, no white backgrounds exposed
```
Mark ✅ when footer looks consistent on all pages.

---

## STEP 17 — Dark mode pass
**Goal:** Toggle dark mode on every page — nothing should look broken.

```
Click the ◐ toggle in the nav. Visit every page in dark mode:

Check each page for:
- White hardcoded backgrounds that don't change → replace with var(--bg-card)  
- Black hardcoded text that doesn't change → replace with var(--text-primary)
- Images with white backgrounds that look harsh → add border-radius or subtle border
- Cards that disappear (white on white) → add var(--border) border
- Form inputs: must be readable in dark mode
- Code blocks: must have dark background
- Timeline: bars and labels readable in dark

Fix all issues in _sass/custom.scss under [data-theme="dark"] { } block.

Pages to check: /, /cv/, /publications/, /projects/, /articles/, /personal/,
/volunteering/, /travelling/, /calisthenics/, /wishlist/, /contact/
```
Mark ✅ when dark mode looks good on all pages.

---

## STEP 18 — Final polish pass
**Goal:** Catch every small broken detail that makes the site feel unfinished.

```
Do a systematic sweep of every page looking for:

1. BROKEN IMAGES:
   Run: grep -r 'src=""' _site/ 
   Also visually check every page for broken image icons
   Fix: replace with working URL or remove img tag

2. RAW DATA LEAKS:
   Run: grep -r '\bundefined\b\|\bNaN\b\|\[object Object\]' _site/*.html
   Fix any that appear in visible page content

3. TYPOGRAPHY CONSISTENCY:
   - Every h1/h2 is Playfair Display
   - Every body paragraph is DM Sans 1rem line-height 1.75
   - Every date/tag/badge is JetBrains Mono uppercase
   - No element accidentally inheriting wrong font

4. SPACING:
   - No section cramped against another without breathing room
   - No excessive gaps either
   - Consistent padding on all cards

5. HOVER STATES:
   - Every clickable element has a hover state
   - Cards: translateY(-2px) + shadow
   - Links: color change to gold
   - Buttons: darken + slight lift

6. SELECTION COLOR:
   ::selection { background: rgba(200,169,110,0.2); }
   Should show gold tint when selecting text — verify

7. SCROLLBAR:
   Should be styled (thin, gold thumb on hover) — verify on Chrome

8. READING PROGRESS BAR:
   Should appear on single/article pages as thin gold bar at top

9. CONSOLE ERRORS:
   Open DevTools → Console on each page
   Fix any JS errors (excluding external service errors like GA, Formspree)

10. EXTERNAL LINKS:
    All external links should open in new tab with rel="noopener"
    design-system.js handles this automatically — verify it's working
```
Mark ✅ when no broken details remain.

---

## STEP 19 — Build and deploy
**Goal:** Clean production build pushed to GitHub Pages.

```
1. Production build:
   JEKYLL_ENV=production bundle exec jekyll build
   Check: no build errors or warnings
   Check: _site/ folder generated correctly

2. Check _site/ for obvious issues:
   - _site/index.html exists and has content
   - _site/cv/index.html exists
   - All other pages exist

3. Git commit:
   git add _sass/custom.scss
   git add assets/js/design-system.js  
   git add _includes/head/custom.html
   git add assets/css/main.scss
   git status  ← review what changed
   git commit -m "redesign: editorial design system — Playfair Display, DM Sans, dark mode, full site"

4. Push:
   git push origin main

5. Wait 2-3 minutes for GitHub Pages to rebuild
   Monitor: https://github.com/jimmyg1997/jimmyg1997.github.io/actions

6. Verify live site:
   Open https://jimmyg1997.github.io/
   Check: fonts loaded, dark mode works, all pages accessible
   
7. If GitHub Pages build fails:
   Check Actions tab for error
   Common causes:
   - Unsupported Jekyll plugin → check Gemfile
   - SCSS syntax error → check _sass/custom.scss line numbers
   - Liquid template error → check the file mentioned in error
   Report the exact error and fix it
```
Mark ✅ when live site is deployed and verified.

---

## DONE 🎉
All 19 steps complete. The site now has:
- Playfair Display headings + DM Sans body + JetBrains Mono labels
- Dark/light mode toggle persisted in localStorage  
- Scroll animations on cards and sections
- Gold accent color system throughout
- Clean professional design on all 12 pages
- Reading progress bar on article pages
- Styled scrollbar, text selection, external links
