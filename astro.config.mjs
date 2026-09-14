// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import redirects from './src/data/redirects.json' with { type: 'json' };
import sections from './src/data/sections.json' with { type: 'json' };

// SITE_URL / SITE_BASE let the same build serve the GitHub Pages preview (…github.io/wiki/) and vdbx.io.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://vdbx.io',
  base: process.env.SITE_BASE ?? '/',
  trailingSlash: 'always',
  redirects,
  integrations: [
    starlight({
      title: 'Voidbox Industries',
      description: 'Open hardware for off-grid Home Assistant. FLIP_C3, PwrTool 500, and friends.',
      customCss: ['./src/styles/vdbx.css'],
      plugins: [starlightLlmsTxt()],
      sidebar: Object.entries(sections).map(([slug, label]) => ({ label, items: [{ autogenerate: { directory: slug } }] })),
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/vdbxio' },
      ],
    }),
  ],
});
