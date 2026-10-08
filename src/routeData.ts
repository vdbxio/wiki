// Points each page's og:image / twitter:image at its own preview card (src/lib/og.ts).
// Without these, Instagram and friends grab the first <img> in the page, which is the Connect dialog's board picture.
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { getCards, OG_W, OG_H } from './lib/og';

export const onRequest = defineRouteMiddleware(async (context) => {
  const route = context.locals.starlightRoute;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const slug = context.url.pathname.slice(base.length).replace(/^\/|\/$/g, '') || 'index';
  const cards = await getCards();
  const card = cards.get(slug) ?? cards.get('index')!;
  const url = new URL(`${base}/og/${card.slug}.jpg`, context.site).href;
  route.head.push(
    { tag: 'meta', attrs: { property: 'og:image', content: url } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: String(OG_W) } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: String(OG_H) } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: card.title } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: url } },
  );
});
