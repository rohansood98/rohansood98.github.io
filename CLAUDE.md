# CLAUDE.md — Rohan Sood portfolio (`rohansood98.github.io`)

Context for any agent working on this repo independently. Read this first.

## What this is
Personal portfolio for **Rohan Sood — AI/ML Engineer**. Single-page React site deployed to
**GitHub Pages** at `https://rohansood98.github.io`. Built by an AI agent with the owner reviewing.

## Stack
- **React 18 + TypeScript + Vite** (no Tailwind — plain CSS design system in `src/index.css`).
- **Framer Motion** for entrance + scroll-reveal animation.
- **@splinetool/react-spline** for the optional 3D robot (lazy-loaded, desktop + "3D" mode only).
- Commands: `npm install`, `npm run dev` (http://localhost:5173), `npm run build` (typecheck + build), `npm run preview`.

## How it's structured
- **All copy/content lives in `src/content/profile.ts`** — edit there, never hard-code copy in components.
- Sections: `src/sections/{Nav,Experience,Education,Work,About,Hobby,Contact}.tsx` — that's also the
  page order (experience-first: it's a résumé-forward site, evidence before narrative).
- Company logos live in `public/logos/` and are referenced by `logo:` on each `experience` entry.
  `LogoTile` in `Experience.tsx` falls back to the monogram (`short:`) if a file is missing.
- Fancy bits: `src/fancy/{FancyBackground,FancyHero,Spotlight,SplineScene,Marquee}.tsx` + `fancy.css`.
- Hooks: `useTheme` (light/dark) and `useMode` ('fancy' = 3D / 'clean' = Lite), both persisted in localStorage.
- `src/App.tsx` composes everything based on `theme` + `mode`.

## Key behaviors (don't regress these)
- **One site, two views via a nav segmented toggle `[ ◆ 3D | Lite ]`:**
  - **3D mode** (desktop default): a Spline robot is a **fixed full-page background** (`FancyBackground`) that **dims on scroll** (a dark overlay fades in) so it never fights the text.
  - **Lite mode**: identical hero, **robot removed** (no Spline loaded). Same text/layout.
- **Mobile auto-uses Lite** and never loads the heavy 3D; the 3D toggle is hidden on mobile (`useMode` defaults by viewport; `.seg` hidden < 821px).
- **Light/dark theme** toggle, persisted. The hero's backdrop follows the **theme**, never the mode —
  it was once hard-coded dark with only `.is-3d` clearing it, which made the Lite+light hero a black
  slab with dark text. If you touch `.fancy-hero`, keep the dark-theme and `.is-3d` selectors in sync
  (the dark selector is more specific, so the 3D-transparent rule spells out its dark variant).
- **Experience + Education are scroll-revealed timelines**, every entry rendered. Don't reintroduce a
  tabbed/click-to-expand experience — it hid 3 of 4 roles from readers and from search engines.
- **Resume is the one primary CTA in the nav** (filled accent pill) and survives the mobile nav
  collapse. Write it as "Resume" — no `résumé.pdf`, no filename-as-label, no `↓` (reads as scroll).
- One accent (electric blue `#5b8cff` dark / `#3257d6` light) — deliberately cool, distinct from the
  owner's other brands (Keepsy orange, Lisnara gold). Don't reintroduce warm beige.
- Fonts: **Sora** (structure), **Instrument Serif** (italic accent words), **JetBrains Mono** (labels).

## Content rules (IMPORTANT — disclosure)
- Closed-source / employer (Digit88) projects — **Recruit Assist, AutoDoc AI, NewsAI** — are marked
  **Private** and described **high-level only**. NEVER add proprietary internals, client names, secrets,
  or repo links for these.
- **Keepsy** = "Private · Lisnara" (the owner's studio app, lisnara.com). No public code link.
- Older public projects (Game Manual Q&A, Phishing×2) may link to GitHub.

## Résumé
- `public/resume.pdf` is the owner's real résumé (committed on purpose — it's public). Replacing that one
  file updates the "résumé.pdf" link everywhere. The on-page **Experience** section is the web résumé
  (so an HTML résumé page is intentionally NOT built).

## Deploy (GitHub Pages, automatic)
- Repo is the **user site** `rohansood98.github.io` → serves at root, `base: '/'` in `vite.config.ts`.
- `.github/workflows/deploy.yml` builds + deploys on every push to `main`.
- One-time: GitHub → Settings → Pages → Source = **GitHub Actions**.

## Roadmap / deferred
See `docs/BACKLOG.md` (per-project case-study pages, a certifications section — held until there's real
content, etc.) and `docs/DESIGN.md` (design rationale + references).

## Cross-link
This portfolio links to **Lisnara Studio** (`lisnara.com`) as the owner's hobby-apps studio (Hobby card).
The Lisnara site lives in the sibling repo `lisnara-web`.
