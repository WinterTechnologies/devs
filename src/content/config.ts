import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const tools = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    author: z.string().default("Anonymous"),

    link: z.string().url(),
    pricingModel: z.enum(["Free", "Paid", "Freemium"]),

    draft: z.boolean().default(false),
    featured: z.boolean().default(false).optional(),
    date: z.coerce.date(),
    platform: z.array(z.enum(["Windows", "macOS", "Linux", "Web", "Mobile"])),
    category: z.enum(["design", "video", "audio", "development", "other"]),
  }),
});

const resources = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    links: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
      }),
    ),
  }),
});

export const collections = { tools, resources };
