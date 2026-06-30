# Portfolio — Backlog

Deferred / future work for the portfolio. Nothing here blocks the first launch.

## Certifications (deferred — room kept, not featured yet)
- Owner has **no certifications to show yet** (decision 2026-06-30). Do **not** add a Certifications
  section to the homepage until there's real content — an empty/"coming soon" section reads worse than none.
- When ready: add a `certifications` array to `src/content/profile.ts` and a compact `<Certifications/>`
  section (logo + name + issuer + year + verify link). The nav already has room to add a "Certs" link.

## Per-project case-study pages (planned)
- Owner wants each project to eventually have its **own page** (some as separate GitHub Pages repos),
  linked from the work list. Plan:
  - Add a `slug` + `caseStudyUrl` to each project in `profile.ts`.
  - Either: (a) external links to per-project GitHub Pages sites, or (b) in-repo routes (add a router —
    `react-router` or a lightweight hash route) for `/work/<slug>` detail pages.
  - The work rows already render as links — swap `href` to the case-study URL when it exists.
- Keep closed-source (Digit88) case studies **high-level** — no proprietary internals (same rule as now).

## Nice-to-haves
- `public/resume.pdf` — add the real résumé.
- OG share image (`public/og.png`) for nicer link previews.
- A subtle custom cursor / magnetic buttons (Emil Kowalski animation polish) — only if it stays tasteful.
- Optional: a "Writing"/notes section if Rohan starts blogging.
- Analytics (privacy-friendly, e.g. Plausible) if desired.
- Light/dark: respect `prefers-color-scheme` on first visit (currently defaults to dark + remembers choice).

## Cross-links
- Portfolio → Lisnara Studio (`lisnara.com`) is done (Hobby card).
- TODO: add a small "Made by Rohan →" link on Lisnara's About page pointing back here once this is live.
