import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getCollection('docs');
  return docs.map((d) => ({ params: { slug: d.id }, props: { body: d.body ?? '', title: d.data.title } }));
};

export const GET: APIRoute = ({ props }) => {
  const { body, title } = props as { body: string; title: string };
  return new Response(`# ${title}\n\n${body}`, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
