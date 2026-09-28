// RSS 2.0 feed of the blog, built from the posts the vault publishes.
import type { APIRoute } from 'astro';
import posts from '../data/posts.json';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const GET: APIRoute = () => {
  const root = new URL(import.meta.env.BASE_URL, import.meta.env.SITE);
  const url = (p: string) => new URL(p.replace(/^\//, ''), root).href;
  const items = posts.map((p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${url(p.path)}</link>
      <guid isPermaLink="true">${url(p.path)}</guid>
      <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>${p.author ? `\n      <dc:creator>${esc(p.author)}</dc:creator>` : ''}
      <description>${esc(p.description ?? '')}</description>
    </item>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Voidbox Industries</title>
    <link>${url('blog/')}</link>
    <description>Updates from Voidbox Industries.</description>
    <language>en</language>
    <atom:link href="${url('rss.xml')}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
