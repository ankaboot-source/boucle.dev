# DESIGN.md — boucle.dev

> The design system for the boucle.dev landing page. The worker reads this
> before any UI work; it overrides generic design recommendations.

## 1. Product context

**boucle** is a zero-code autonomous product builder — from a forge issue to a
deployed feature, without running agents on your own machine. The landing
page targets **Product Builders** (not necessarily full-time developers) who
want to ship websites and applications without babysitting AI agents
overnight.

**Promise:** "Great ideas deserve to ship." — from a ticket in your forge to
a feature in production. The tone is futuristic but accessible, not elitist.

**Key messages (in priority order):**
1. Lives in your forge — boucle lives in your forge (GitHub/GitLab), no external tool, no separate dashboard.
2. Deterministic and reliable — deterministic, therefore reliable; you intervene at the decision points.
3. Works while you sleep — the agent works overnight for you, you intervene only when it matters.
4. No UI, No CLI — no interface to learn, no command line to master; you interact through your forge.
5. Self-healing, self-learning loop — a loop that learns from its mistakes, self-updates, and adapts to your codebase.

## 2. Design tokens

### Color palette — Afro-futurist on forge dark

The base surfaces are GitHub-dark-inspired (Primer Product UI) so the site reads
visually as "belongs in your forge" while the accents stay afrofuturist.

| Token | Value | Usage |
|-------|-------|-------|
| `--surface-base` | `#0d1117` | GitHub-dark base (page background) |
| `--bg-secondary` | `#161b22` | Panel/card background |
| `--surface-raised` | `#21262d` | Elevated surface (code blocks, badges, tooltips) |
| `--accent` | `#f5c842` | Boucle d'or gold — primary accent (CTA, highlights, logo, afro, créoles, visor) |
| `--accent-gold-dim` | `#c9a233` | Hover/active state for gold |
| `--accent-violet` | `#7b2ff7` | Afro-futurist violet (secondary accent — gradients, glow, motif bands) |
| `--accent-cyan` | `#00e5ff` | Futuristic cyan (tertiary accent — links, tech details, motif bands) |
| `--text-primary` | `#f0f0f5` | Off-white (body text) |
| `--text-secondary` | `#a0a0b8` | Muted text (descriptions, meta) |
| `--text-gold` | `#f5c842` | Gold text (emphasis, logo) |
| `--border` | `rgba(245, 200, 66, 0.15)` | Subtle gold border (featured card, gold-accented elements) |
| `--border-neutral` | `rgba(255, 255, 255, 0.08)` | Neutral forge border (cards, badges, step icons) |
| `--destructive` | `#ff4d5e` | Error/destructive states (form validation, alerts) |
| `--glow-gold` | `rgba(245, 200, 66, 0.3)` | Gold glow (featured card, hover, focus) |
| `--glow-violet` | `rgba(123, 47, 247, 0.25)` | Violet glow (ambient, gradients) |
| `--radius` | `6px` | Forge corner radius (cards, buttons, badges, code) |
| `--shadow-subtle` | `0 1px 3px rgba(0, 0, 0, 0.3)` | Subtle forge shadow (cards, badges) |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `'Unbounded', 'Sora', sans-serif` | Headlines, hero, logo |
| `--font-body` | `system-ui, 'Sora', sans-serif` | Body text, descriptions (system-ui first for forge feel, Sora fallback for identity) |
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
- Single page, vertical scroll, mobile-first. Sections: Hero → How boucle works → Lives in your forge → Why boucle → Quick start → Open source → Footer. No navigation bar.
- Responsive breakpoints: mobile (under 768px), tablet (768–1024px), desktop (over 1024px).
- Grid: CSS Grid for multi-column layouts, Flexbox for component internals.

### Radius

- Forge corner radius on ALL primary surfaces: `6px` (`--radius`) — cards,
  buttons (including primary CTA and skip link), badges, step icons, code
  blocks, and the quick-start transition panel.
- Aligned with GitHub Primer and GitLab Pajamas design systems, reinforcing the
  "Lives in your forge" message.
- The only circular radius (`50%`) is reserved for the ambient hero glow blobs.

## 3. Motion

- Subtle ambient glow pulse on the hero (violet/gold, 4s ease-in-out infinite).
- Fade-in-up on scroll reveal (`opacity 0→1`, `translateY(20px→0)`, 0.6s ease).
- **Validation-flow animations** (the "flux des choses qui se valident" in the
  How it works mocks) — CSS-only, sequenced thumb-up → verdict → deploy, each
  0.5–0.6s `ease-out` with a staggered delay (0.3s thumb, 1s verdict, 1.7–2.1s
  deploy). The deploy uses a progress `scaleX(0→1)` fill plus a checkmark fade.
- **Ambient loop pulse** — the ∞ motif in the hero visor breathes via a 3s
  `ease-in-out infinite` opacity pulse (1→0.45→1), evoking the cyclical loop.
- **How-it-works slideshow** — the step track slides horizontally on
  navigation with a single `transform: translateX` transition of **0.5s
  ease** (no bounce). Autoplay advances one step every 5s when the section is
  in view and idle; any user interaction resets the timer. Under
  `prefers-reduced-motion: reduce` the slide transition is instant and
  auto-play is disabled (manual prev/next arrows still work).
- No parallax, no spin, no bounce — calm, not flashy.
- `prefers-reduced-motion: reduce` → all animations disabled; the global
  reduced-motion block (`animation-duration: 0.01ms !important`,
  `animation-iteration-count: 1 !important` on `*`) covers every new
  animation, which snaps to its final visible state with no motion.

## 4. Components

### Logo

The boucle logo is a **figurative afrofuturist face**: a face with a **golden
afro** (the full gold circle = the "boucle" / boucle d'or), **gold hoop créoles**
(earrings), and an **afrofuturist gold visor** (sunglasses) with the **infinity
loop (∞)** woven into the visor bridge. It is a circular gold mark on
`--surface-base` (dark) backgrounds.

The primary brand assets are raster (the only raster files on the site):

- **`public/boucle-logo.gif`** — the animated logo (540×540). Rendered in the
  hero via an `img` element, shown large in its own standalone column on
  desktop. Animated GIFs play natively; they cannot be paused by
  `prefers-reduced-motion`.
- **`public/boucle-logo.png`** — the static logo (714×714). Serves the favicon
  and the Open Graph `og:image`. It is a separate static asset from the hero
  GIF.

The GIF is decorative brand identity: it carries `aria-hidden="true"` and an
empty `alt` so assistive tech skips it. The hero logo-lockup retains a
descriptive `aria-label` (e.g. "boucle logo"). There is **no golden glow halo**
around the logo — the `box-shadow` on the logo rule was removed. The ambient
`.hero-glow` background blobs are separate decorative elements and remain.

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
- Desktop (≥1024px): a two-column grid. Left column holds the "boucle" wordmark,
  headline, subheadline, forge badges and CTAs. Right column is the **standalone
  animated GIF logo** (`public/boucle-logo.gif`), shown large
  (~340px, circular, no glow halo) in its own column — not just beside the
  wordmark. Below 1024px the layout stacks vertically (GIF below text).
- Headline: "Great ideas deserve to ship." — display font, fluid size.
- Subheadline: "From a ticket in your forge to a feature in production. Boucle works so you can live. You decide at the key moments, nothing else. 👍👎"
- **Forge badges** — a row of "GitHub" and "GitLab" badges directly under the
  subheadline. Each is a 6px-radius chip on `--surface-raised` with a neutral
  `--border-neutral` border, a `--shadow-subtle`, a small 16px SVG mark,
  and a 0.8rem label. Hover shifts the label and border to gold. They give an
  at-a-glance "Lives in your forge" signal to visitors who recognize the forges.
- CTA: "Get started" (gold button, 6px radius, links to quick start) + "How it works" (ghost link, 6px radius).
- A subtle loop emoji ➰ or the logo mark as a visual anchor.

### How boucle works

- 7-step flow presented as a **single-step animated slideshow** (loop):
  1. Drop your idea in an issue
  2. Receive a proposal with a preview
  3. Approve or amend
  4. It works
  5. It's verified
  6. Approve, it's live
  7. Lessons learned
- A horizontal track holds the steps; only one step is visible at a time (the
  first is visible before JS runs — no flash, no blank container). After the
  last step, next loops to step 1; before step 1, previous wraps to step 7.
- Each step: icon (geometric SVG), first-person narrative title, one-sentence
  description, and a forge mini-mockup (issue card, comment with preview,
  reaction emoji, working status, PR verdict, merged/live badge).
- Mockups are pure HTML/CSS (no external images): a browser-style bar with
  dots + URL, a body using `--surface-raised`/`--bg-secondary` and
  `--text-primary`/`--text-secondary`. Decorative internals are `aria-hidden`;
  each mock has a `role="img"` + `aria-label` description.
- **Controls** — prev/next arrow buttons (44×44px touch targets,
  `aria-label="Previous step"` / `"Next step"`), a visible step-number
  indicator ("2 / 7", tabular figures so it does not shift, `aria-live="polite"`
  so screen readers announce changes), and an interactive dot indicator
  (`aria-label="Go to step N of 7"`). Keyboard ArrowLeft/ArrowRight navigate
  when the section is in view (or when focus is inside it), and the active step
  is shown as a distinct gold line in the progress bar. Each step carries
  `role="group"`, `aria-roledescription="slide"`, and `aria-label="Step X of 7"`.
- Matches the README mermaid diagram but simplified for a landing page.

### Lives in your forge

- Dedicated section between "How boucle works" and "Why boucle", background
  `--surface-base` (continuous with How boucle works; Why boucle follows in
  `--bg-secondary` per the alternating rhythm).
- Short promise line (display font, `--text-primary`): "boucle lives in your
  forge. GitHub, GitLab. No external tool, no dashboard."
- GitHub and GitLab logos side by side on ≥768px (centered, `gap: 3rem`),
  stacked vertically and centered below 768px. Large but proportionate
  (`clamp(120px, 20vw, 180px)` wide).
- Logos are **external SVG assets**, single-color via `currentColor` (white on dark),
  each carrying `role="img"` and a descriptive `aria-label` ("GitHub logo",
  "GitLab logo"). No raster images.
- Each logo links to its forge (github.com / gitlab.com); hover shifts to gold.

### Why boucle

- 5 promise cards, dark panels with a 6px radius, a subtle neutral `--border-neutral`
  border, and a `--shadow-subtle` box-shadow (forge look).
- First card ("Lives in your forge") is the featured/prominent card — it spans
  the full width of the card grid and gets a distinct gold treatment (gold
  border + glow) to mark it as the key differentiator. It links to the
  dedicated `#lives-in-your-forge` section.
- Remaining 4 cards ("Deterministic and reliable", "Works while you sleep",
  "No UI, No CLI", "Self-healing, self-learning loop") display in a 2×2 grid on
  tablet/desktop, stacked on mobile.
- Each card: a unique icon loaded from an external SVG asset
  (`public/icons/card-N.svg`, `aria-hidden`), constrained to 2.5rem by the
  `.card-icon` class, beside the title, then a pain point (muted text, striked
  on scroll-reveal with the strike line constrained to the text width only)
  preceded by a small X (remove) icon, then boucle's answer (gold/violet accent).
- Cards animate in on scroll-reveal (fade-in-up) and on hover (gold border +
  glow), respecting `prefers-reduced-motion`.

### Quick start

- Minimal: a single `curl -fsSL https://boucle.dev/install.sh | bash` oneliner.
- Code snippet in `--font-mono` on `--surface-raised` background.
- Below the oneliner, a visually distinct transition panel (gold border +
  `--bg-secondary` background + gold glow) instructing "Create an issue in
  your forge and tag it `boucle:triage`" — marking the shift from setup
  tooling to daily usage in the user's own forge.
- "Voir la doc" link to the README.

### Open source

- Closing section between Quick start and the Footer — the community door.
- Positioning line ("Libre & open source. Built by an indie product builder,
  for product builders.") in `--font-display` gold (`--text-gold`), leading
  the section.
- A single **Contribute** CTA (gold `--accent`, `--radius`) linking to the
  GitHub repo — an invitation to participate, not a second install button.
- The efficiency closing argument as a supporting card (`--surface-raised`,
  `--border-neutral`): "Ship 10x more with less" headline in `--font-display`
  gold, a one-line capacity figure, and a link to the README Cost section.
- Desktop (≥1024px): positioning + CTA on one side, capacity card as the
  supporting beat. Mobile: stacks vertically, CTA stays reachable.
- No animation or scroll-reveal on this section. The licence (AGPL-3.0) is
  not repeated here — it lives in the footer's License link.

### Footer

- Minimal, discreet.
- "Made in Africa by [ankaboot.io](https://ankaboot.io)" in `--text-secondary`,
  small font, centered or left. The author attribution is present but subtle.
- Links: GitHub, License (AGPL-3.0), Docs.
- No heavy footer — the message is subtle, not a banner.

## 5. Content & tone

- **Language:** French for the main marketing copy (headline, subheadline, CTAs).
  Technical terms and code stay in English. Section titles can be French or English.
- **Tone:** Futuristic but accessible. Not elitist, not jargon-heavy. "Great ideas deserve to ship." sets the tone — powerful but simple.
- **No stock photos.** The design is geometric, typographic, CSS-driven. The only
  visual element is the logo (SVG) and geometric shapes/gradients.
- **No emoji in headlines** (except the ➰ loop mark in the logo area).
- **Accessibility:** WCAG 2.1 AA — text contrast ≥ 4.5:1, large text and UI
  components ≥ 3:1. Gold (`#f5c842`) on dark meets both. All interactive
  elements keyboard-accessible. `alt` text on the logo SVG.

## 6. Iconography

- All icons are geometric external SVG assets (stroke-based, 1.5px, `currentColor`),
  matching the logo's abstract geometric style.
- Icon set: loop/issue, spec, implement, deploy, plus small meta icons (docs, GitHub, lock) and the forge logos (GitHub, GitLab) in the "Lives in your forge" section.
- Icons use `--accent-gold` or `--text-secondary`; violet is reserved for ambient
  glow, never on icons themselves.

## 7. Visual foundations

- Dark theme only — no light variant. `--surface-base` is the base, `--accent` drives attention.
- Single-accent discipline: gold leads (CTA, logo, highlights), violet/cyan support only.
- Forge corner radius (`6px`) on all primary surfaces; the only `50%` is the hero glow blobs.
- Layout follows the "Spacing & layout" grid; visual density is generous (whitespace ≥ 1.5rem between blocks).