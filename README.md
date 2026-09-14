# vdbx.io

The public site and wiki for Voidbox Industries, built with Astro + Starlight.

Content is **not edited here**. Everything under `src/content/docs/`, `public/attachments/`, and `src/data/` is written by the publish step in the private ops vault and overwritten on every push there. Edit the notes in the vault; edit this repo for layout, styling, and site behavior.

- `astro.config.mjs` — site, sidebar (one group per section), redirects from the old GitBook paths
- `src/content.config.ts` — Starlight schema plus the `vdbx` frontmatter the vault emits
- `src/styles/vdbx.css` — brand tokens
- `src/pages/[...slug].md.ts` — raw Markdown endpoint for every page (`/products/flip_c3.md`), and `llms.txt` via starlight-llms-txt

Local: `npm install`, `npm run dev`. The `astro` branch deploys to the GitHub Pages preview; `main` still feeds GitBook until cutover.
