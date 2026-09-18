// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import luna from 'starlight-theme-luna';
import remarkBase from 'starlight-theme-luna/remark-base';
import redirects from './src/data/redirects.json' with { type: 'json' };
import sidebar from './src/data/sidebar.json' with { type: 'json' };

const BASE = (process.env.SITE_BASE ?? '/').replace(/\/$/, '');

// SITE_URL / SITE_BASE let the same build serve the GitHub Pages preview (…github.io/wiki/) and vdbx.io.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://vdbx.io',
  base: process.env.SITE_BASE ?? '/',
  trailingSlash: 'always',
  redirects,
  markdown: { remarkPlugins: [[remarkBase, { base: BASE }]] },
  integrations: [
    starlight({
      title: 'Voidbox Industries',
      description: 'Open hardware for off-grid Home Assistant. FLIP_C3, PwrTool 500, and friends.',
      customCss: ['./src/styles/vdbx.css'],
      favicon: '/favicon.svg',
      head: [
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '64x64', href: `${BASE}/favicon.png` } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: `${BASE}/apple-touch-icon.png` } },
        // Umami: cookie-free page analytics (dashboard at cloud.umami.is)
        { tag: 'script', attrs: { defer: true, src: 'https://cloud.umami.is/script.js', 'data-website-id': '88d2fea6-1973-480f-bd11-79b7c61ea444' } },
      ],
      plugins: [
        // The layout (rail, mobile nav, TOC bar, product headers, link buttons) lives in the shared theme.
        luna({
          logo: './src/cube.svg',
          footer: ['VDBX.io', 'CC-BY-SA 4.0', 'Voidbox Industries', 'Branding rights reserved'],
          action: { label: 'Connect', title: 'Flash a board from your browser', dialog: './src/components/Connect.astro' },
          frontmatterKey: 'vdbx',
        }),
        starlightLlmsTxt(),
      ],
      sidebar,
      // vault H1/H2/H3 sections publish as H2/H3/H4 (the title is the page's H1); keep all three in the TOC
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/vdbxio' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/mDYYXy3Erm' },
      ],
    }),
  ],
});
