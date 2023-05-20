import {z, defineCollection} from 'astro:content';

const posts = defineCollection({
    type: 'content',
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
export const collections = {
    'posts': posts,
};