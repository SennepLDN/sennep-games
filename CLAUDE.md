# Sennep Games — Claude Code Briefing

## What this project is
The official Sennep Games website at sennepgames.com. Built as a static HTML/CSS/JS site, deployed via Netlify, version controlled on GitHub at https://github.com/SennepLDN/sennep-games.

## About Sennep
Sennep is an independent design/games studio based in London. Shipped titles include OLO (2012) and Alphaputt (2018). Current game in production: Polyverse.

## Tech stack
- Plain HTML/CSS/JS — no frameworks
- Google Fonts: Paytone One, Manrope
- Deployed on Netlify
- Figma is the design source of truth

## File structure
sennep-games/
├── CLAUDE.md               ← this file — read at start of every session
├── README.md
├── index.html              ← sennepgames.com homepage
├── netlify.toml            ← Netlify config
├── .gitignore
├── polyverse/
│   └── index.html          ← sennepgames.com/polyverse
├── alphaputt/
│   └── index.html          ← sennepgames.com/alphaputt
├── olo-loco/
│   └── index.html          ← sennepgames.com/olo-loco
├── olo-classic/
│   └── index.html          ← sennepgames.com/olo-classic
├── assets/
│   ├── css/
│   │   ├── global.css      ← shared styles, fonts, CSS variables
│   │   ├── polyverse.css   ← Polyverse page styles
│   │   ├── alphaputt.css   ← Alphaputt page styles
│   │   ├── olo-loco.css    ← OLO Loco page styles
│   │   ├── olo-classic.css ← OLO Classic page styles
│   │   └── homepage.css    ← Homepage styles
│   ├── js/
│   │   └── polyverse.js
│   ├── images/
│   │   ├── polyverse/      ← Polyverse images + logo SVGs (logo.svg, logo-dark.svg)
│   │   ├── alphaputt/      ← Alphaputt images
│   │   ├── olo_loco/       ← OLO Loco images
│   │   ├── olo/            ← OLO Classic images
│   │   └── homepage/       ← Homepage images (game cards, headline SVG)
│   └── videos/
│       ├── polyverse/      ← Polyverse video assets
│       ├── alphaputt/      ← Alphaputt video assets
│       ├── olo_loco/       ← OLO Loco video assets
│       └── olo/            ← OLO Classic video assets

## Design system
- Fonts: Paytone One (headings), Manrope (body)
- Colour and type styles defined in Figma
- Designed at 1440px wide desktop
- CSS variables to be defined in global.css matching Figma tokens

## Pages
### /polyverse (sennepgames.com/polyverse)
- Status: BUILT — desktop + mobile + fluid scaling done
- Figma sections (in order): Hero unit, Intro, Intro_2, iphone_screens, ocean_scene, Sign Up, Also from Sennep Games
- Logo links back to homepage (../index.html)
- Sign Up section: "Get in early" panel with button linking to Google Form (opens new tab), hover snaps to mid blue (#274D65)
- "Also from" section links to Alphaputt, OLO Loco, OLO Classic
- Next session: subtle animation and scroll behaviour

### /alphaputt (sennepgames.com/alphaputt)
- Status: BUILT — desktop + mobile + fluid scaling done
- Figma sections (in order): Hero unit, Main title, App Links, Video section, Quote, 3 features, A-Z image, Escape scene, Also from Sennep Games
- Dark logo (logo-dark.svg), links back to homepage
- App Links: iOS App Store + Viverse buttons (100px desktop, 50px mobile), hover swaps to light blue circle variant
- Video player: poster image with play button, tap to play/stop, resets on end
- Two video sections: promo (ap_promo_sm.mp4) and escape (ap_escape.mp4)
- A-Z section: single wide image on desktop, two stacked squares on mobile
- "Also from" section links to Polyverse, OLO Loco, OLO Classic

### /olo-loco (sennepgames.com/olo-loco)
- Status: BUILT — desktop + mobile + fluid scaling done
- Figma sections (in order): Hero unit, Main title, Video section (promo), Quote, 3 features, Video section 2 (devices autoplay), Reverso Mode (autoplay), Also from Sennep Games
- Dark logo (logo-dark.svg), links back to homepage
- Promo video: play/stop/reset (OLO_LOCO_1920x1080.mp4)
- Devices + Reverso videos: autoplay, loop, muted
- "Also from" section links to Polyverse, Alphaputt, OLO Classic

### /olo-classic (sennepgames.com/olo-classic)
- Status: BUILT — desktop + mobile + fluid scaling done
- Figma sections (in order): Hero unit, Main title, Video section (promo), Quote, 2 features, Safari Theme (autoplay), Also from Sennep Games
- Dark logo (logo-dark.svg), links back to homepage
- Promo video: play/stop/reset (olo_game_sm.mp4)
- Safari video: autoplay, loop, muted (olo_safari_sm.mp4)
- "Also from" section links to Polyverse, Alphaputt, OLO Loco

### / (homepage)
- Status: IN PROGRESS — desktop + mobile + game card fluid scaling done, hero fluid scaling still to do
- Figma sections: Hero (SVG headline_optical + tagline), 4 game cards (Polyverse, Alphaputt, OLO Loco, OLO Classic)
- All 4 game cards link to their respective pages
- Next session: hero section fluid scaling (834px–1439px)

## Homepage — game card hover interaction (desktop)
- Each card is 1100×620px with rounded corners and overflow: hidden
- On hover: image slides left 120px, colour panel slides in from the right
- Panel uses CSS spring animation: cubic-bezier(0.34, 1.56, 0.64, 1), 800ms, 300ms delay on enter
- Panel final position: translateX(50px) — sits 50px proud of the card's right edge
- Panel structure: 652px container (translateX(100%) → translateX(50px))
  - panel-edge: 103px radial-gradient circles, tiled vertically
  - panel-body: 620px wide (right: -20px), covers exactly the right half of the circles
  - Panel colour set per card via inline CSS custom property --panel-color
- Arrow: 100×100px circle, 2px solid border, inside .game-card__panel at bottom: 50px, right: 100px
  (right: 100px within the panel = right: 50px on the card at translateX(50px))
- Arrow slides in with the panel — not visible on the image before hover
- Text (title + desc): top-aligned in panel-body with 70px top padding
- Desc copy: fixed width 400px
- Hover animation gated on @media (hover: hover) and (min-width: 834px) — disabled at narrow widths
- Polyverse card links to polyverse/index.html

## Homepage — mobile layout (max-width: 833px)
- Based on Figma: home_375
- Hero: 100px top padding, 276px wide headline, 14px tagline, 40px gap
- Logo: 48×42px at top: 20px, left: 20px
- Cards: 26px side margins, 30px top padding, 30px border-radius, drop shadow
- Images: swap to _mob.jpg via <picture> + <source media="(max-width: 833px)">
- Square images (aspect-ratio: 1) stacked above the coloured panel
- Scalloped circle edge: ::after pseudo-element on .game-card__image — horizontal row of
  panel-color circles (53px diameter) centered on the image/panel boundary (bottom: -26px)
- Panel always visible (transform: none, position: relative), no animation
- Vertical desktop circle strip hidden (display: none)
- Title: 28px / 34px; desc: 16px / 23px; arrow: 36×36px / 1px border / margin-top: 14px

## Mailing list + analytics
- Analytics: Cloudflare Web Analytics — snippet added to all 5 HTML pages (token: e3170e2c4fa24565a236b3cf2ba2d98e)
- Mailing list: TBD — likely Mailchimp embed

## Deployment
- Netlify connected to this GitHub repo
- Every push to main branch auto-deploys
- Temporary live URL: https://rainbow-bavarois-9e5d79.netlify.app
- Custom domain: sennepgames.com — live, DNS pointed at Netlify
- Netlify account: SennepLDN on Netlify, connected to GitHub SennepLDN/sennep-games

## Session notes
- Matt is a designer, not a developer — explain reasoning behind decisions
- No frameworks, keep code simple and readable
- Check this file at the start of every session for current status
- Update the Pages section status when work is completed

## Current session status
- [x] GitHub repo created
- [x] Repo cloned to Mac (~Documents/sennep-games)
- [x] Folder structure created
- [x] CLAUDE.md written
- [x] netlify.toml configured
- [x] .gitignore configured
- [x] Netlify account set up and deploying
- [x] Polyverse page — desktop build
- [x] Polyverse page — ocean scene videos (autoplay, loop, muted)
- [x] Polyverse page — mobile layout (375px) — single column, square hero image, 2×3 phone grid
- [x] Polyverse page — fluid responsive scaling (834px–1440px) using CSS clamp()
- [x] Polyverse page — wide breakpoint (1441px+) — full-viewport hero with hero_wide_new.jpg
- [x] Polyverse page — 2500px+ hero scales with browser via background-size: cover
- [x] Polyverse page — logo links back to homepage
- [x] Homepage — desktop build (hero + 4 game cards with hover panel animation)
- [x] Homepage — mobile layout (max-width 833px) — square images, scalloped circle edge, rounded cards, drop shadow
- [x] Homepage — fluid responsive scaling (834px–1439px) — game cards scale via clamp() from 834px to 1440px desktop values
- [ ] Homepage — hero section fluid scaling (834px–1439px)
- [x] Alphaputt page — desktop + mobile + fluid scaling, video player with play/stop/reset
- [x] OLO Loco page — desktop + mobile + fluid scaling, promo video + autoplay devices/reverso videos
- [x] OLO Classic page — desktop + mobile + fluid scaling, promo video + autoplay safari video
- [x] "Also from Sennep Games" cross-promotion on all 4 game pages with scalloped mini cards
- [x] Dark logo variant (logo-dark.svg) for Alphaputt, OLO Loco, OLO Classic pages
- [x] Consistent logo padding: 40px desktop, 20px mobile across all pages
- [x] Homepage game card circles — exactly 6 on both vertical (desktop) and horizontal (mobile) edges
- [x] Homepage panel body width uses calc() to align precisely with circle centres at all viewports
- [x] Homepage headline updated to headline_optical.svg
- [x] Homepage mobile tagline fixed at 263px width
- [x] All homepage game cards linked to their respective pages
- [x] Polyverse iPhone screens section — overflow: hidden to prevent horizontal scroll on tablet
- [x] Analytics — Cloudflare Web Analytics added to all 5 pages
- [x] content.md — extracted all visible copy across the site for editorial review
- [x] Open Graph + Twitter/X meta tags on all 5 pages (absolute image URLs via assets/images/og/)
- [x] Footer — added to all 5 pages (scalloped circle edge, links, social icons, desktop + mobile)
- [x] Polyverse Sign Up section — "Get in early" panel with Google Form link
- [x] Alphaputt App Links — iOS App Store + Viverse buttons with hover state SVGs
- [x] Title section tagline uppercase on all game pages
- [x] Instagram footer link updated to sennep_games
- [x] Homepage 120px gap before footer
- [x] Polyverse iPhone screens — only clip below 1440px, full display on wider screens
- [x] Sticky hero on all game pages — image + logo fixed, content scrolls over
- [x] Achievement badges — fixed with hero on desktop, scroll with content on mobile (dual HTML approach)
- [x] Wide viewport (1441px+) — page max-width removed, content centred via calc padding, hero full-width
- [ ] Polyverse page — animation and scroll behaviour
- [x] Point sennepgames.com domain at Netlify
- [ ] Mailing list integration

## Responsive breakpoints
- Mobile:   max-width 833px  — single column, square hero image swapped in (hero_image_sq.jpg)
- Tablet:   834px–1439px     — two column, fluid scaling via clamp() from Figma 834 & 1024 designs
- Desktop:  1440px           — base design, all fixed values
- Wide:     1441px–2499px    — hero breaks out of page wrapper, full-viewport width (hero_wide_new.jpg, auto 811px)
- X-Wide:   2500px+          — hero background-size: cover, scales with browser

## CSS architecture
- global.css: design tokens (colours, fonts, spacing variables using clamp() for fluid scaling)
- polyverse.css: page layout, desktop-first with mobile @media (max-width: 833px) at bottom
- homepage.css: homepage layout, desktop-first with tablet @media (834–1439px) and mobile @media (max-width: 833px)
- alphaputt.css: Alphaputt page layout, desktop-first with mobile @media (max-width: 833px), shared .video-player component
- olo-loco.css: OLO Loco page layout, same pattern as Alphaputt + reverso/other-games sections
- olo-classic.css: OLO Classic page layout, same pattern + safari/other-games sections
- All game page CSS files include .game-card-mini styles for "Also from Sennep Games" cross-promotion
- Breakpoint reference comments in global.css :root block

## How to start a new session
1. Open Terminal
2. Run: cd ~/Documents/sennep-games
3. Run: claude
4. Tell Claude: "Please read CLAUDE.md and let's continue"
5. Share your Figma file link when asked

## Technical overview

**Hosting & Deployment**
Static site hosted on Netlify, auto-deploying from the main branch on GitHub (SennepLDN/sennep-games). Every push to main goes live automatically. Custom domain sennepgames.com is live with DNS pointed at Netlify.

**Codebase**
Plain HTML/CSS/JS — no frameworks, no build tools, no dependencies. Five pages: homepage, Polyverse, Alphaputt, OLO Loco, OLO Classic. CSS split across a shared global.css for design tokens and per-page stylesheets. One JS file (polyverse.js). All assets — images, videos, fonts — served statically.

**Design system**
Figma is the design source of truth. Fonts are Paytone One and Manrope via Google Fonts. CSS variables in global.css match Figma tokens. Responsive across five breakpoints from 375px mobile up to 2500px+ widescreen, using CSS clamp() for fluid scaling.

**Analytics**
Cloudflare Web Analytics — free, cookieless, privacy-first. JS snippet added manually to all five pages. No cookie consent banner required.

**Version control**
GitHub repo at SennepLDN/sennep-games. Connected to Netlify for auto-deploy.

**Still to set up**
Favicon, Open Graph images, footer, privacy page, mailing list (likely Mailchimp), homepage hero fluid scaling (834px–1439px), Polyverse animation and scroll behaviour.
