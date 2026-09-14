import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Extra frontmatter written by the vault's publish step.
const vdbx = z.object({
  type: z.enum(['product', 'page']),
  id: z.string().optional(),
  status: z.enum(['idea', 'prototype', 'validation', 'preorder', 'production', 'shipping', 'released', 'out_of_stock', 'retired']).optional(),
  status_note: z.string().optional(),
  section: z.string().optional(),
  menu_tag: z.string().optional(),
  msrp: z.number().optional(),
  hero: z.string().optional(),
  works_with: z.array(z.string()).optional(),
  parent: z.string().optional(),
  links: z.array(z.object({ url: z.string(), label: z.string().optional() })).optional(),
  files: z.array(z.object({ url: z.string(), name: z.string(), label: z.string().optional() })).optional(),
}).optional();

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: z.object({ vdbx }) }) }),
};
