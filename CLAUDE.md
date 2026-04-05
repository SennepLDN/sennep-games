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
├── index.html              ← sennepgames.com homepage (not yet built)
├── netlify.toml            ← Netlify config
├── .gitignore
├── polyverse/
│   └── index.html          ← sennepgames.com/polyverse
├── assets/
│   ├── css/
│   │   ├── global.css      ← shared styles, fonts, CSS variables
│   │   └── polyverse.css   ← Polyverse page styles
│   ├── js/
│   │   └── polyverse.js
│   └── images/
│       └── polyverse/      ← all images for Polyverse page

## Design system
- Fonts: Paytone One (headings), Manrope (body)
- Colour and type styles defined in Figma
- Designed at 1440px wide desktop
- CSS variables to be defined in global.css matching Figma tokens

## Pages
### /polyverse (sennepgames.com/polyverse)
- Status: IN PROGRESS
- Figma sections (in order): Hero unit, Intro, Intro_2, iphone_screens, ocean_scene
- Desktop build first, then mobile, then responsive
- Priority: live before London Games Festival event (approx 2 weeks)

### / (homepage)
- Status: NOT STARTED — build after Polyverse page is complete

## Mailing list + analytics
- To be integrated after core page is built
- Likely Mailchimp embed for mailing list
- Analytics TBD (Google Analytics or Plausible)

## Deployment
- Netlify connected to this GitHub repo
- Every push to main branch auto-deploys
- Temporary live URL: https://rainbow-bavarois-9e5d79.netlify.app
- Custom domain: sennepgames.com (DNS to be pointed at Netlify — do this after Polyverse page is built)
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
- [ ] Polyverse page — desktop build
- [ ] Polyverse page — mobile build
- [ ] Polyverse page — responsive
- [ ] Point sennepgames.com domain at Netlify
- [ ] Mailing list integration
- [ ] Analytics integration
- [ ] Homepage (sennepgames.com)

## How to start a new session
1. Open Terminal
2. Run: cd ~/Documents/sennep-games
3. Run: claude
4. Tell Claude: "Please read CLAUDE.md and let's continue building the Polyverse page"
5. Share your Figma file link when asked