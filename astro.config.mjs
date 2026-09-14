// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import redirects from './src/data/redirects.json' with { type: 'json' };
import sidebar from './src/data/sidebar.json' with { type: 'json' };
import remarkBase from './src/plugins/remark-base.mjs';

// SITE_URL / SITE_BASE let the same build serve the GitHub Pages preview (…github.io/wiki/) and vdbx.io.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://vdbx.io',
  base: process.env.SITE_BASE ?? '/',
  trailingSlash: 'always',
  redirects,
  markdown: { remarkPlugins: [remarkBase] },
  integrations: [
    starlight({
      title: 'Voidbox Industries',
      description: 'Open hardware for off-grid Home Assistant. FLIP_C3, PwrTool 500, and friends.',
      customCss: ['./src/styles/vdbx.css'],
      favicon: '/favicon.svg',
      components: {
        PageFrame: './src/components/PageFrame.astro',
        Sidebar: './src/components/Rail.astro',
        PageTitle: './src/components/PageTitle.astro',
      },
      plugins: [starlightLlmsTxt()],
      sidebar,
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/vdbxio' },
      ],
    }),
  ],
});
