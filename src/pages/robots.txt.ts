import type { APIRoute } from 'astro';
export const GET: APIRoute = () => {
  const sitemap = new URL('sitemap-index.xml', import.meta.env.SITE + import.meta.env.BASE_URL);
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, { headers: { 'Content-Type': 'text/plain' } });
};
