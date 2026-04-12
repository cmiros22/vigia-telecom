import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog collection schema
// const blogCollection = defineCollection({
//   loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
//   schema: z.object({
//     id: z.string().optional(),
//     title: z.string(),
//     subtitle: z.string().optional(),
//     date: z.date().optional(),
//     image: z.string().optional(),
//     author: z.string().optional(),
//     categories: z.array(z.string()).default(["others"]),
//     draft: z.boolean().optional(),
//     featured: z.boolean().optional(),
//   }),
// });

// Pages collection schema
// const pagesCollection = defineCollection({
//   loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/pages" }),
//   schema: z.object({
//     id: z.string().optional(),
//     title: z.string(),
//     meta_title: z.string().optional(),
//     description: z.string().optional(),
//     image: z.string().optional(),
//     layout: z.string().optional(),
//     draft: z.boolean().optional(),
//   }),
// });

// Integrations collection schema
const integrationsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/integrations" }),
  schema: z.object({
    id: z.string().optional(),
    name: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// How collection schema
const howCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/how" }),
  schema: z.object({
    title: z.string(),
    page_subtitle: z.string().optional(),
    page_title: z.string().optional(),
    page_description: z.string().optional(),
    buttons: z.array(z.object({
      label: z.string(),
      link: z.string(),
      enable: z.boolean()
    })).optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  integrations: integrationsCollection,
  how: howCollection,
};
