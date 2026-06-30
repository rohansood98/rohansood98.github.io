# rohansood98.github.io

Personal portfolio for **Rohan Sood** — AI/ML Engineer. React + Vite + Framer Motion,
deployed to GitHub Pages. Dark/light themes, scroll-triggered motion.

## Stack
- **React 18 + TypeScript + Vite**
- **Framer Motion** for entrance + scroll-reveal animation
- Plain CSS design system (`src/index.css`) — no framework, one accent (amber), Sora / Instrument Serif / JetBrains Mono
- Content is data-driven: edit **`src/content/profile.ts`** (don't touch components for copy changes)

## Develop
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # preview the build
```

## Deploy (GitHub Pages, automatic)
1. Create a **public** GitHub repo named exactly **`rohansood98.github.io`** (user site → serves at the root).
2. Push this repo to it (`main`).
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds + deploys on every push to `main`.
5. Live at **https://rohansood98.github.io**. (Custom domain optional, later.)

## Add your résumé
Drop your PDF at **`public/resume.pdf`** — the hero's "résumé.pdf" button links to `/resume.pdf`.
(It's committed/deployed on purpose; it's your public résumé.)

## Edit content
Everything (bio, projects, links, the Lisnara hobby card) lives in `src/content/profile.ts`.
Project write-ups are intentionally **high-level for closed-source work** (Digit88) — see `docs/DESIGN.md`.

## Roadmap
See `docs/BACKLOG.md` — per-project case-study pages, certifications section, and more.
