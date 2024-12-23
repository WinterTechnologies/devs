import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const tools = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    author: z.string().default("Anonymous"),

    draft: z.boolean().default(false),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    category: z.enum(["art", "video", "audio", "code", "other"]),
  }),
});

export const collections = { tools };
