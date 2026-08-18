import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Hero — headline, subheadline, CTA labels + links, meta title/description.
const hero = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hero' }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    skipLink: z.string(),
    sectionAriaLabel: z.string(),
    wordmark: z.string(),
    headline: z.string(),
    subheadline: z.string(),
    logoAriaLabel: z.string(),
    ctaPrimaryLabel: z.string(),
    ctaPrimaryHref: z.string(),
    ctaSecondaryLabel: z.string(),
    ctaSecondaryHref: z.string(),
  }),
});

// How it works section header + supported-forge logos.
const howItWorks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/how-it-works' }),
  schema: z.object({
    title: z.string(),
    sub: z.string(),
    logosAriaLabel: z.string(),
    githubSrc: z.string(),
    githubAlt: z.string(),
    gitlabSrc: z.string(),
    gitlabAlt: z.string(),
  }),
});

// Each of the six steps: title, description, and the forge mini-mockup.
// The mockup body is an ordered list of typed blocks, each reproducing one
// DOM fragment exactly. A step may have an empty/absent mock so it degrades
// gracefully (only the bar renders, no empty DOM artifacts).
const mockBlock = z.discriminatedUnion('type', [
  z.object({ type: z.literal('badge'), text: z.string(), className: z.string().optional() }),
  z.object({ type: z.literal('title'), text: z.string() }),
  z.object({ type: z.literal('desc'), text: z.string() }),
  z.object({ type: z.literal('meta'), text: z.string(), avatarClass: z.string().optional() }),
  z.object({ type: z.literal('author'), text: z.string(), avatarClass: z.string().optional() }),
  z.object({ type: z.literal('comment'), text: z.string() }),
  z.object({ type: z.literal('preview') }),
  z.object({
    type: z.literal('reactions'),
    items: z.array(z.object({ label: z.string(), active: z.boolean().optional() })),
  }),
  z.object({ type: z.literal('hint'), text: z.string() }),
  z.object({ type: z.literal('status'), text: z.string() }),
  z.object({ type: z.literal('prTitle'), text: z.string() }),
  z.object({ type: z.literal('verdict'), text: z.string(), className: z.string() }),
  z.object({ type: z.literal('deploy') }),
  z.object({ type: z.literal('deployLabel'), text: z.string() }),
  z.object({ type: z.literal('liveBadge'), text: z.string() }),
]);

const steps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/steps' }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    description: z.string(),
    ariaLabel: z.string(),
    url: z.string().optional(),
    blocks: z.array(mockBlock).default([]),
  }),
});

// Why boucle section header + the five promise cards.
const whyBoucle = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/why-boucle' }),
  schema: z.object({
    title: z.string(),
    sub: z.string(),
  }),
});

const cards = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cards' }),
  schema: z.object({
    order: z.number().int().positive(),
    featured: z.boolean().default(false),
    title: z.string(),
    pain: z.string(),
    answer: z.string(),
  }),
});

// Quick start section: toggle, install/prompt code, transition, docs link.
const quickStart = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/quick-start' }),
  schema: z.object({
    title: z.string(),
    sub: z.string(),
    tablistAriaLabel: z.string(),
    onelinerTab: z.string(),
    promptTab: z.string(),
    onelinerCode: z.string(),
    promptCode: z.string(),
    copyLabel: z.string(),
    copiedLabel: z.string(),
    failedLabel: z.string(),
    transitionNum: z.string(),
    transitionPrefix: z.string(),
    transitionTag: z.string(),
    transitionSuffix: z.string(),
    docsLabel: z.string(),
    docsHref: z.string(),
  }),
});

// Footer: attribution + link labels/URLs + icons credit.
const footer = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/footer' }),
  schema: z.object({
    madePrefix: z.string(),
    madeLabel: z.string(),
    madeHref: z.string(),
    navAriaLabel: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),
    iconsPrefix: z.string(),
    iconsLabel: z.string(),
    iconsHref: z.string(),
  }),
});

export const collections = {
  hero,
  howItWorks,
  steps,
  whyBoucle,
  cards,
  quickStart,
  footer,
};
