import { defineCollection, z } from 'astro:content';

const beat = z.object({
  id: z.string().default(''),
  type: z.string().default('local'),
  location_name: z.string().default(''),
  image: z.string().default(''),
  sensory: z
    .object({
      sight: z.string().default(''),
      sound: z.string().default(''),
      smell: z.string().default(''),
      touch: z.string().default(''),
      taste_mood: z.string().default(''),
    })
    .default({}),
  images: z
    .array(z.object({ image: z.string().default(''), caption: z.string().default('') }))
    .default([]),
  narration: z.string().default(''),
  caption: z.string().default(''),
});

const episode = z.object({
  no: z.number(),
  title: z.string().default(''),
  intro_hook: z.string().default(''),
  outro: z.string().default(''),
  beats: z.array(beat).default([]),
});

const series = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    world: z.string().default(''),
    era_gap: z.string().default(''),
    narrator: z
      .object({
        origin: z.string().default(''),
        motive: z.string().default(''),
        budget: z.string().default(''),
      })
      .default({}),
    final_destination: z.string().default(''),
    prologue: z.string().default(''),
    cover_image: z.string().default(''),
    route_map: z.string().default(''),
    published_at: z.string().default(''),
    order: z.number().default(0),
    episodes: z.array(episode).default([]),
  }),
});

export const collections = { series };
