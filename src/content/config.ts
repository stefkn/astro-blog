// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    imageAlt: z.string(),
    tags: z.array(z.string())
  })
});
const photographyCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection, photographyCollection
};
