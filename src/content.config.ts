import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { productSchema } from 'starlight-theme-luna/schema';

// Extra frontmatter written by the vault's publish step: the theme's product block, with our status vocabulary.
const vdbx = productSchema.extend({
  type: z.enum(['product', 'page']),
  status: z.enum(['idea', 'prototype', 'validation', 'preorder', 'production', 'shipping', 'released', 'out_of_stock', 'retired']).optional(),
}).optional();

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: z.object({ vdbx }) }) }),
};
