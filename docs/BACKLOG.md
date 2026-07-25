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

## Project cover images (deferred 2026-07-25 — owner will generate and supply)

Decision: the work list stays typographic until real images exist. Reference site
(`kapilm26.github.io`) uses literal clipart in three unrelated visual languages — copying that
would cheapen this design, and **3 of 4 projects are Private/employer work**, where an image that
reads as a product screenshot looks fabricated or like a disclosure slip.

So: **abstract / architectural covers only. No UI mockups, no fake dashboards, no screenshots.**

When the four images land in `public/covers/`, the follow-up work is:
- add `cover` to each project in `profile.ts` (same pattern as `logo` on `experience`)
- convert `.work-list` rows to a 2-up card grid with a 16:9 cover, reusing `.tl-card`'s
  surface tokens (`--card`, `--shadow`, `backdrop-filter`) so it stays consistent in 3D mode
- keep the `more:` line as-is underneath

### Shared style preamble (prepend to every prompt)
> Abstract technical illustration, no text, no logos, no UI elements, no people. Dark near-black
> background (#0a0b0e). Single accent colour electric blue (#5b8cff) with cool grey-blue
> secondaries — no warm tones, no orange, no purple. Thin precise linework, generous negative
> space, subtle depth and grain. Editorial, restrained, engineering-diagram sensibility.
> Flat-to-isometric, not photorealistic. 16:9.

### Per-project prompts
1. **Recruit Assist** — "A funnel of thin horizontal document-like bars converging into a single
   branching decision path, with a soft audio waveform threading through the lower third.
   Suggests résumés being scored and filtered, then a spoken interview."
2. **Keepsy** — "Scattered small rounded rectangles drifting inward and snapping into an ordered
   grid, a faint search-radius ring expanding across them. Suggests saved clips becoming an
   organised, searchable library."
3. **NewsAI** — "A dense field of small nodes on the left resolving into a few ranked, weighted
   nodes on the right, connected by directed edges; a subtle waveform tail exits right.
   Suggests hundreds of articles ranked by agents, ending as audio."
4. **AutoDoc AI** — "A directed acyclic graph of connected nodes over a faint grid, several nodes
   marked with a checkpoint ring, edges resolving into layered document planes at the right.
   Suggests a resumable multi-agent workflow that emits documentation."

Export at 1600×900 PNG or WebP, keep each under ~200 KB.

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
