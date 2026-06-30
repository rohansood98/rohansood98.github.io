# Portfolio — Design notes

## Direction
Refined **dark-technical** (the "A" direction the owner picked), elevated past generic AI-portfolio
looks. Warm amber accent on near-black; light theme is warm cream. Reads "serious AI/ML engineer,"
not edgy, not slop.

## Principles (distilled from premium portfolio research, Awwwards/Muzli)
- **Restraint + craft:** generous space, fine hairlines, one accent. Let the work speak.
- **Dual typography:** structural sans (**Sora**) + an editorial **serif** accent (**Instrument Serif**,
  italic — used for "agentic", "ships", "saves", "lisnara") + a **mono** (JetBrains) for labels/tags.
- **Motion with intent (Framer Motion):** one staggered load reveal on the hero; scroll-triggered
  `whileInView` fade-ups (once) per section; hover **line-draw** under each work row; smooth easing
  `cubic-bezier(0.22,1,0.36,1)` — never linear/default. Respects `prefers-reduced-motion`.
- **Atmosphere over flat:** subtle SVG **grain** overlay + a soft radial **glow** behind the hero.
- **Minimal nav,** numbered/curated work list, big-type contact close.

## Accent
Amber `#f2b541` (dark) / `#b87a16` (light, for contrast). Used sparingly — interactive bits, the
serif accent words, the hero glow. (Distinct from Keepsy orange and Lisnara brass on purpose.)

## Content rules
- Closed-source/work projects (Recruit Assist, AutoDoc AI, Cortex) = **high-level only**, marked
  "Private · Digit88". No proprietary internals, client names, or secrets.
- Open-source (Keepsy, NewsAI, Game Manual, Phishing×2) link to GitHub.

## References
- [Muzli — 100 best portfolio sites](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)
- [Awwwards — portfolio winners](https://www.awwwards.com/websites/portfolio/)
- Emil Kowalski animation skills (`emil-design-eng`, `review-animations`) + the taste skill informed the motion/easing choices.
