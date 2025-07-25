// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1, "Must have a blog post title"),
      hero: z.object({
        src: image(),
        squareSrc: image().refine((img) => img.width === img.height, {
          message: "`squareSrc` must be a square image for the blog post list",
        }),
        alt: z.string(),
      }),
      hide: z.boolean().optional(),
      summary: z.string().min(1, "Must have a blog post summary."),
      subtitle: z.string().optional(),
      date: z.coerce.date(),
      tags: z.array(z.string().min(1)).optional().nullable(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: blogCollection,
};
