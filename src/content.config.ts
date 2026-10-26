import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    publishedAt: z.date(),
    modifiedAt: z.date().nullable(),
    draft: z.boolean(),
  }),
});

const tags = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/tags" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});
export const collections = {
  posts: posts,
  tags: tags,
};
