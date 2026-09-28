import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";
export const EVENT_PATH = "src/content/events";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["otros"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${EVENT_PATH}` }),
  schema: z.object({
    title: z.string(),
    date: z.date().optional().nullable(),
    description: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    time: z.string().optional().nullable(),
    presenters: z.array(z.string()).optional().nullable(),
    tags: z.array(z.string()).default(["otros"]),
    mode: z.enum(["in-person", "online", "hybrid"]).optional().nullable(),
    timezone: z.string().optional().nullable(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts, pages, events };
