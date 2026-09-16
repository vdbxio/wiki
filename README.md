# vdbx.io

The public site and wiki for Voidbox Industries, built with Astro + Starlight on the shared [starlight-theme-luna](https://github.com/vdbxio/starlight-theme-luna) theme.

Content is **not edited here**. Everything under `src/content/docs/`, `public/attachments/`, and `src/data/` is written by the publish step in the private ops vault and overwritten on every push there. Edit the notes in the vault; edit this repo for site-specific styling and behavior; edit the theme repo for layout shared with the other sites.

- `astro.config.mjs` — site, theme options (logo, footer, Connect), sidebar (one group per section), redirects from the old GitBook paths
- `src/content.config.ts` — Starlight schema plus the `vdbx` product block the vault emits
- `src/styles/vdbx.css` — brand tokens only (fonts, colors, callout tints, button colors); layout comes from the theme
- `src/components/Connect.astro` — the browser installer dialog, opened by the theme's action button
- `src/pages/index.astro` — landing page
- `src/pages/[...slug].md.ts` — raw Markdown endpoint for every page (`/products/flip_c3.md`), and `llms.txt` via starlight-llms-txt

The theme is installed from its GitHub repo and tracks `main`; the Pages workflow refreshes it on every build so theme changes land here without a version bump.

Local: `npm install`, `npm run dev`. The `astro` branch deploys to the GitHub Pages preview; `main` still feeds GitBook until cutover.
