# VISUAL-CHARTER.md — boucle.dev

> The design system for the boucle.dev landing page. The worker reads this
> before any UI work; it overrides generic design recommendations.

## 1. Product context

**boucle** is a zero-code autonomous product builder — from a forge issue to a
deployed feature, without running agents on your own machine. The landing
page targets **Product Builders** (not necessarily full-time developers) who
want to ship websites and applications without babysitting AI agents
overnight.

**Promise:** "Construire un produit est un jeu d'enfant" — building a product
is child's play. The tone is futuristic but accessible, not elitist.

**Key messages (in priority order):**
1. Lives in your forge — boucle lives in your forge (GitHub/GitLab), no external tool, no separate dashboard.
2. Deterministic and reliable — deterministic, therefore reliable; you intervene at the decision points.
3. Works while you sleep — the agent works overnight for you, you intervene only when it matters.
4. No UI, No CLI — no interface to learn, no command line to master; you interact through your forge.
5. Self-healing, self-learning loop — a loop that learns from its mistakes, self-updates, and adapts to your codebase.

## 2. Design tokens

### Color palette — Afro-futurist

| Token | Value | Usage |
|-------|-------|-------|
| `--surface-base` | `#0a0a12` | Deep space black (base background) |
| `--bg-secondary` | `#12121f` | Panel/card background |
| `--surface-raised` | `#1a1a2e` | Elevated surface (code blocks, tooltips) |
| `--accent` | `#f5c842` | Boucle d'or gold — primary accent (CTA, highlights, logo, afro, créoles, visor) |
| `--accent-gold-dim` | `#c9a233` | Hover/active state for gold |
| `--accent-violet` | `#7b2ff7` | Afro-futurist violet (secondary accent — gradients, glow, motif bands) |
| `--accent-cyan` | `#00e5ff` | Futuristic cyan (tertiary accent — links, tech details, motif bands) |
| `--text-primary` | `#f0f0f5` | Off-white (body text) |
| `--text-secondary` | `#a0a0b8` | Muted text (descriptions, meta) |
| `--text-gold` | `#f5c842` | Gold text (emphasis, logo) |
| `--border` | `rgba(245, 200, 66, 0.15)` | Subtle gold border (cards, dividers) |
| `--destructive` | `#ff4d5e` | Error/destructive states (form validation, alerts) |
| `--glow-gold` | `rgba(245, 200, 66, 0.3)` | Gold glow (hover, focus) |
| `--glow-violet` | `rgba(123, 47, 247, 0.25)` | Violet glow (ambient, gradients) |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `'Unbounded', 'Sora', sans-serif` | Headlines, hero, logo |
| `--font-body` | `'Sora', system-ui, sans-serif` | Body text, descriptions |
| `--font-mono` | `'Space Mono', monospace` | Code snippets, technical labels |

**Font reevaluation (afrofuturist direction).** The previous stack (Space Grotesk /
Inter / JetBrains Mono) is competent but reads as generic western tech. It is
replaced with a more geometric, afrofuturist-leaning system while keeping
legibility and professionalism:

- **Unbounded** (display) — a wide, geometric, futuristic display face with a
  strong African-adjacent geometric character (rounded, bold, sculptural). It
  carries the afrofuturist "futurism + African culture" fusion in headlines and
  the wordmark. Variable font (wght 200–900), self-hosted as a single woff2.
- **Sora** (body) — a clean, geometric sans with a slightly rounded, warm
  character that stays professional and highly legible at body sizes. Variable
  font (wght 400–800), self-hosted as a single woff2.
- **Space Mono** (mono) — a distinctive, technical monospace that keeps code
  snippets readable while adding a futuristic edge. Static, self-hosted.

All fonts are self-hosted (no Google Fonts CDN — GDPR). The change is justified:
Unbounded and Sora are more geometric and less "default western tech" than
Space Grotesk/Inter, reinforcing the afrofuturist identity without sacrificing
readability or WCAG 2.1 AA contrast.

- Display: 700 weight for hero, 600 for section titles.
- Body: 400 weight, 1.6 line-height.
- Sizes: fluid with `clamp()` — hero `clamp(2.5rem, 6vw, 4.5rem)`, sections `clamp(1.8rem, 4vw, 3rem)`.

### Spacing & layout

- 8px base grid. Sections: `padding: clamp(3rem, 8vw, 6rem) 1.5rem`.
- Container max-width: `1100px`, centered.
- Single page, vertical scroll, mobile-first. Sections: Hero → How it works → Lives in your forge → Why boucle → Quick start → Footer. No navigation bar.
- Responsive breakpoints: mobile (under 768px), tablet (768–1024px), desktop (over 1024px).
- Grid: CSS Grid for multi-column layouts, Flexbox for component internals.

### Radius

- Sharp corners on primary surfaces: `0px` (cards, panels — afro-futurist edge).
- Pills on CTAs: `999px` (buttons — approachable contrast).
- No `border-radius` between these two extremes.

## 3. Motion

- Subtle ambient glow pulse on the hero (violet/gold, 4s ease-in-out infinite).
- Fade-in-up on scroll reveal (`opacity 0→1`, `translateY(20px→0)`, 0.6s ease).
- No parallax, no spin, no bounce — calm, not flashy.
- `prefers-reduced-motion: reduce` → all animations disabled.

## 4. Components

### Logo

The boucle logo is a **figurative afrofuturist face**: a face with a **golden
afro** (the full gold circle = the "boucle" / boucle d'or), **gold hoop créoles**
(earrings), and an **afrofuturist gold visor** (sunglasses) with the **infinity
loop (∞)** woven into the visor bridge. It is a single-color SVG using
`--accent` (gold) on `--surface-base` (dark) backgrounds.

The logo is generated as an **inline SVG** in the Astro component — figurative
but sober and professional, not a caricatural illustration. It carries
`role="img"` and a descriptive `aria-label` (e.g. "boucle logo — afrofuturist
face with golden afro, créoles, and sunglasses"). All fills use the charter
tokens with a literal fallback (`var(--accent, #f5c842)`) so the logo never
renders blank without `var()` support. No raster image data.

A matching standalone `public/favicon.svg` reuses the same face, simplified so
the afro circle, face, and visor remain distinguishable at 32×32 (créoles and
infinity may simplify but the silhouette stays recognizable).

### Decorative motifs

Subtle African-inspired geometric motifs (kente, adinkra, Sahelian patterns)
reinforce the afrofuturist identity without overwhelming the layout:

- **Kente/adinkra band** — a thin horizontal repeating band of gold / violet /
  cyan stripes (a `repeating-linear-gradient`), used at the base of the hero.
  Low opacity (≈0.35), edge-faded with a mask, `aria-hidden`, no motion.
- **Usage rules** — motifs are decorative only, never interactive, never
  animated, and always `aria-hidden`. They use the existing accent tokens
  (gold leads, violet/cyan support) and stay subtle (low opacity, small
  footprint). They must not reduce text contrast or readability.
- **Reduced motion** — motifs carry no animation, so `prefers-reduced-motion`
  is naturally satisfied.

### Hero

- Full-viewport height, dark gradient background (`--surface-base` → `--bg-secondary`).
- Ambient violet/gold glow blobs (CSS `radial-gradient`, `filter: blur(80px)`).
- Logo + "boucle" wordmark (gold) centered or left-aligned.
- Headline: "Construire un produit est un jeu d'enfant" — display font, fluid size.
- Subheadline: "De un ticket dans votre forge à une feature en production. boucle travaille pendant que vous dormez, vous intervenez aux points de décision."
- CTA: "Commencer" (gold pill, links to quick start) + "Comment ça marche" (ghost link).
- A subtle loop emoji ➰ or the logo mark as a visual anchor.

### How it works

- 4-step horizontal/vertical flow (mobile-first): Issue → Spec → Implement → Deploy.
- Each step: icon (geometric SVG), title, one-sentence description.
- Connected by a faint gold dotted line (the "loop").
- Matches the README mermaid diagram but simplified for a landing page.

### Lives in your forge

- Dedicated section between "How it works" and "Why boucle", background
  `--surface-base` (continuous with How it works; Why boucle follows in
  `--bg-secondary` per the alternating rhythm).
- Short promise line (display font, `--text-primary`): "boucle lives in your
  forge. GitHub, GitLab. No external tool, no dashboard."
- GitHub and GitLab logos side by side on ≥768px (centered, `gap: 3rem`),
  stacked vertically and centered below 768px. Large but proportionate
  (`clamp(120px, 20vw, 180px)` wide).
- Logos are **inline SVG**, single-color via `currentColor` (white on dark),
  each carrying `role="img"` and a descriptive `aria-label` ("GitHub logo",
  "GitLab logo"). No raster images.
- Each logo links to its forge (github.com / gitlab.com); hover shifts to gold.

### Why boucle

- 5 promise cards, dark panels with subtle gold border.
- First card ("Lives in your forge") is the featured/prominent card — it spans
  the full width of the card grid and gets a distinct gold treatment (gold
  border + glow) to mark it as the key differentiator. It links to the
  dedicated `#lives-in-your-forge` section.
- Remaining 4 cards ("Deterministic and reliable", "Works while you sleep",
  "No UI, No CLI", "Self-healing, self-learning loop") display in a 2×2 grid on
  tablet/desktop, stacked on mobile.
- Each card: pain point (muted text) → arrow → boucle's answer (gold/violet accent).

### Quick start

- Minimal: a single `curl -fsSL https://boucle.dev/install.sh | bash` oneliner.
- Code snippet in `--font-mono` on `--surface-raised` background.
- Below the oneliner, a visually distinct transition panel (gold border +
  `--bg-secondary` background + gold glow) instructing "Create an issue in
  your forge and tag it `boucle:triage`" — marking the shift from setup
  tooling to daily usage in the user's own forge.
- "Voir la doc" link to the README.

### Footer

- Minimal, discreet.
- "Made in Africa by [ankaboot.io](https://ankaboot.io)" in `--text-secondary`,
  small font, centered or left. The author attribution is present but subtle.
- Links: GitHub, License (AGPL-3.0), Docs.
- No heavy footer — the message is subtle, not a banner.

## 5. Content & tone

- **Language:** French for the main marketing copy (headline, subheadline, CTAs).
  Technical terms and code stay in English. Section titles can be French or English.
- **Tone:** Futuristic but accessible. Not elitist, not jargon-heavy. "Jeu d'enfant"
  sets the tone — powerful but simple.
- **No stock photos.** The design is geometric, typographic, CSS-driven. The only
  visual element is the logo (SVG) and geometric shapes/gradients.
- **No emoji in headlines** (except the ➰ loop mark in the logo area).
- **Accessibility:** WCAG 2.1 AA — text contrast ≥ 4.5:1, large text and UI
  components ≥ 3:1. Gold (`#f5c842`) on dark meets both. All interactive
  elements keyboard-accessible. `alt` text on the logo SVG.

## 6. Iconography

- All icons are geometric inline SVGs (stroke-based, 1.5px, `currentColor`),
  matching the logo's abstract geometric style.
- Icon set: loop/issue, spec, implement, deploy, plus small meta icons (docs, GitHub, lock) and the forge logos (GitHub, GitLab) in the "Lives in your forge" section.
- Icons use `--accent-gold` or `--text-secondary`; violet is reserved for ambient
  glow, never on icons themselves.

## 7. Visual foundations

- Dark theme only — no light variant. `--surface-base` is the base, `--accent` drives attention.
- Single-accent discipline: gold leads (CTA, logo, highlights), violet/cyan support only.
- Sharp corners (`0px`) on primary surfaces; `999px` pills only on CTAs.
- Layout follows the "Spacing & layout" grid; visual density is generous (whitespace ≥ 1.5rem between blocks).