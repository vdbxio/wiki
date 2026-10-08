// Social preview cards: every page gets its own 1200x630 image at /og/<slug>.jpg.
// The picture is the page's hero, else the first attachment in its body, else (posts) its product's hero,
// else a plain branded card with the title. Built by src/pages/og/[...slug].jpg.ts, linked by src/routeData.ts.
import fs from 'node:fs';
import path from 'node:path';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import products from '../data/products.json';
import posts from '../data/posts.json';
import meta from '../data/home/meta.json';

export const OG_W = 1200;
export const OG_H = 630;

type Card = { slug: string; title: string; image?: string };

const PUBLIC = path.resolve('public');
const heroById = new Map(products.map((p: any) => [p.id, p.hero]));
const productByPost = new Map(posts.map((p: any) => [p.path.replace(/^\/|\/$/g, ''), p.product]));

/** A site path like /attachments/Foo%20Bar.png → the file under public/, if it exists and is a raster image. */
function localFile(src?: string) {
  if (!src || !src.startsWith('/attachments/')) return undefined;
  if (!/\.(png|jpe?g|webp|gif|avif)$/i.test(src)) return undefined;
  let rel = src;
  try { rel = decodeURIComponent(src); } catch {}
  const file = path.join(PUBLIC, rel);
  return fs.existsSync(file) ? file : undefined;
}

function firstBodyImage(body = '') {
  for (const m of body.matchAll(/!\[[^\]]*\]\(<?([^)\s>]+)>?|<img[^>]*\ssrc="([^"]+)"/g)) {
    const file = localFile(m[1] ?? m[2]);
    if (file) return file;
  }
}

let cards: Promise<Map<string, Card>> | undefined;

/** Every page that gets a preview card, keyed by slug (URL path without slashes; the landing page is "index"). */
export function getCards() {
  return (cards ??= (async () => {
    const out = new Map<string, Card>();
    out.set('index', { slug: 'index', title: meta.title });
    out.set('blog', { slug: 'blog', title: 'Blog.' });
    for (const e of await getCollection('docs')) {
      const v: any = e.data.vdbx ?? {};
      const image = localFile(v.hero) ?? firstBodyImage(e.body) ?? localFile(heroById.get(productByPost.get(e.id)));
      out.set(e.id, { slug: e.id, title: e.data.title, image });
    }
    return out;
  })());
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** The site's tint gradient (--luna-tint), the backdrop product renders sit on. */
const tint = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#abc2ff"/><stop offset="1" stop-color="#ff00ff"/></linearGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/></svg>`);

export async function renderCard(card: Card) {
  if (card.image) {
    const img = sharp(card.image, { animated: false });
    const { hasAlpha } = await img.metadata();
    // Cut-out renders (transparent PNGs) sit on the tint like they do on the page; photos sit whole
    // over a blurred, dimmed copy of themselves so nothing gets cropped.
    const pad = hasAlpha ? Math.round(OG_H * 0.08) : 0;
    const fg = await img.clone().resize(OG_W - 2 * pad, OG_H - 2 * pad, { fit: 'inside' }).png().toBuffer();
    const bg = hasAlpha ? sharp(tint) : sharp(await img.clone().resize(OG_W, OG_H, { fit: 'cover' }).blur(40).modulate({ brightness: 0.6 }).toBuffer());
    return bg.composite([{ input: fg, gravity: 'center' }]).jpeg({ quality: 85 }).toBuffer();
  }
  // the logo draws in currentColor (black by default); paint it the site's light text colour
  const svg = fs.readFileSync(path.resolve('src/cube.svg'), 'utf8').replace('<svg ', '<svg color="#ececec" fill="#ececec" ');
  const cube = await sharp(Buffer.from(svg), { density: 300 }).resize({ height: 260 }).png().toBuffer();
  const title = card.title.length > 38 ? `${card.title.slice(0, 36).trimEnd()}…` : card.title;
  const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
    <rect width="100%" height="100%" fill="#111113"/>
    <rect y="${OG_H - 12}" width="100%" height="12" fill="#ff5cff"/>
    <text x="80" y="470" font-family="League Spartan, Inter, DejaVu Sans, sans-serif" font-size="64" font-weight="700" fill="#ececec">${esc(title)}</text>
    <text x="80" y="540" font-family="Inter, DejaVu Sans, sans-serif" font-size="32" fill="#ff5cff">vdbx.io</text></svg>`);
  return sharp(text).composite([{ input: cube, left: 80, top: 90 }]).jpeg({ quality: 85 }).toBuffer();
}
