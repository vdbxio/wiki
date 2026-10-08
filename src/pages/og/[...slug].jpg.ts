// One social preview card per page; see src/lib/og.ts.
import type { APIRoute } from 'astro';
import { getCards, renderCard } from '../../lib/og';

export async function getStaticPaths() {
  return [...(await getCards()).values()].map((card) => ({ params: { slug: card.slug }, props: { card } }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await renderCard(props.card), { headers: { 'Content-Type': 'image/jpeg' } });
