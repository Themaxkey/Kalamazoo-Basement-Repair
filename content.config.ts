import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seo = {
  title:       z.string(),          // <h1> on the page
  seoTitle:    z.string(),          // <title> tag
  description: z.string(),          // meta description
  hero:        z.string().optional(),
  heroAlt:     z.string().optional(),
  tagline:     z.string().optional(),   // short human sub-headline for heroes
  heroCaption: z.string().optional(),   // optional caption under the hero image
  noindex:     z.boolean().optional(),
};

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({ ...seo, order: z.number().default(99) }),
});

/**
 * Symptom pages. A separate collection rather than more `services` entries,
 * because "water in my basement" is a problem a homeowner has, not a service
 * anybody sells — and the two need different page furniture. A service page
 * ends with "where we work"; a problem page ends with "here is which service
 * actually fixes this".
 *
 * `fixedBy` is the slug of the service that solves it, and it is required.
 * That link is the whole point of the collection: it turns an 11pm search for
 * a symptom into a route to the commercial page.
 */
const problems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/problems' }),
  schema: z.object({ ...seo, fixedBy: z.string(), order: z.number().default(99) }),
});

const towns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/towns' }),
  schema: z.object({ ...seo, town: z.string() }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({ ...seo, question: z.string().optional() }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object(seo),
});

export const collections = { services, problems, towns, faqs, pages };
