# Session Handoff — 2026-06-30

Read with `CLAUDE.md`. Covers the portfolio (active) + two related threads from this session.

## Repos / URLs
- **Portfolio (active):** `~/personal_projects/rohansood98.github.io` → GitHub `rohansood98/rohansood98.github.io` → **LIVE at https://rohansood98.github.io** (GitHub Pages via Actions; auto-deploys on push to `main`).
- **Lisnara studio (DONE):** `~/personal_projects/lisnara-web` → **live at lisnara.com** (Vercel + Cloudflare DNS + Cloudflare email routing `hello@`/`support@` → lisnara.studio@gmail.com). See its `CLAUDE.md` + `DEPLOYMENT.md`.
- **Keepsy app (paused thread):** `~/personal_projects/keepsy` — Phase **2F Android slice** built (Wave A) on branch `phase/2f-android-slice`, **unmerged**; Wave B device-verify pending. See `keepsy/.planning/phases/02f-dev-build-consolidation/{CONTEXT,PLAN}.md` + `keepsy/.planning/HANDOFF.md`. Phase 6 (iOS/native activation) scaffolded.

## Portfolio — current state (built, live)
- React + Vite + TS, plain CSS (`src/index.css`), Framer Motion, Spline 3D. Content in `src/content/profile.ts`.
- **3D | Lite segmented toggle** in nav (`useMode`, persisted). 3D = Spline robot as a **fixed full-page background** (`src/fancy/FancyBackground.tsx`) that **dims on scroll**. Lite = same hero, no robot. **Mobile auto-Lite**, 3D toggle hidden < 821px, Spline never loads on mobile.
- Light/dark theme (`useTheme`). Accent = cool electric blue (distinct from Keepsy/Lisnara warm).
- Sections: Nav, FancyHero (text), Marquee, Work, Experience (tabbed companies → role + check-bullets), About, Hobby (→ lisnara.com), Contact. Résumé at `public/resume.pdf` (real, committed); Experience = the web résumé.
- Disclosure: Digit88 work (Recruit Assist, AutoDoc AI, NewsAI) + Keepsy are **Private**, high-level only, no code links.

## OPEN ITEMS (next session)
1. **★ Robot lost mouse-tracking.** Cause: `.fancy-bg { pointer-events: none }` (so it doesn't block clicks/scroll). To restore the head-follow while keeping the fixed/dim background:
   - Set `.fancy-bg { pointer-events: auto }` AND let the overlaying content pass pointer events through — e.g. `.is-3d .shell { pointer-events: none }` with `.is-3d a, .is-3d button, .is-3d .seg-btn { pointer-events: auto }`.
   - **Test live:** links/anchors/toggles still clickable; work-row/xp-tab hovers still work (elements without href become `pointer-events:none` → may lose `:hover`); text not selectable in 3D mode (acceptable?). Iterate in the browser.
   - Alternative: only track in the hero (top) and accept no tracking over lower sections (robot is dimmed there anyway).
2. **Verify the LIVE site** end-to-end: https://rohansood98.github.io — both modes, light/dark, mobile (auto-Lite), résumé link, all section anchors, the Lisnara link.
3. Optional polish the owner may want: swap the default Spline robot for a custom/AI-themed scene; tune dim curve; readability of text over the dimmed robot on lower sections; per-project case-study pages (see `docs/BACKLOG.md`).
4. **Lisnara cross-link:** add a small "Made by Rohan →" on `lisnara-web` `/about` pointing to rohansood98.github.io (noted in lisnara `DEPLOYMENT.md`).

## How to run / deploy (portfolio)
- Dev: `cd ~/personal_projects/rohansood98.github.io && npm run dev` (add `-- --host` to view on phone over LAN; was http://192.168.1.27:5191).
- Build/typecheck: `npm run build`. Deploy: just `git push origin main` (Actions builds + deploys).
- Commits: use the repo git identity, **no `Co-Authored-By` trailer** (owner's global rule).

## Verification habit used this session
Build → run dev → screenshot via Playwright MCP (serve over http; `file://` blocked). Scroll-reveal sections need a scroll/settle before screenshotting. Owner reviews visually and iterates copy/colors.
