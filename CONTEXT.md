# CONTEXT.md — boucle.dev project context

> **Maintenance** — This document is **consumer-owned**. It captures the
> context, identity, tech stack and constraints of **boucle.dev** (the
> consumer), not boucle the engine. It is NEVER overwritten by `bin/update`
> (see [AGENTS.md](AGENTS.md) "Reference files"). Any change to scope,
> stack, or constraints must update it.

## 1. Identity

**boucle.dev** is the public landing page for **boucle** — a zero-code
autonomous product builder. From a ticket in your forge to a feature in
production, without running agents on your own machine. The site is the
public face of the product: it explains what boucle is, why it exists, and
how to get started.

The site is a **single-page static Astro site**, deployed to GitHub Pages.
It is built and maintained by the boucle loop itself — the site is a
dogfood consumer of the engine.

## 2. Target audience

- **Product Builders**: those who build products (websites, applications)
  but are not necessarily full-time developers.
- The copy is English (public, global audience).
- The tone is futuristic but accessible, not elitist: "Great ideas
  deserve to ship."

## 3. Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Astro (static site, single page) |
| Language | HTML + CSS (inline in `src/pages/index.astro`) + inline SVG; the only raster assets are the brand logo (a PNG poster `public/boucle-logo.png` and an animated MP4 `public/boucle-logo.mp4` in the hero) |
| Content | All user-facing text lives in Astro content collections (`src/content/`, schema in `src/content.config.ts`) — editable without touching HTML/CSS |
| CMS | Sveltia CMS (`public/admin/`, official CDN) — visual Git-based editor for all text AND icons; GitHub backend, PAT auth |
| Fonts | Self-hosted: Unbounded (display), Sora (body), Space Mono (mono) |
| Deploy | GitHub Pages (`gh-pages` branch, root) |
| Loop | boucle engine (`.boucle/` submodule) |

## 4. Design direction

- **Afrofuturism** — a figurative afrofuturist logo (golden afro, gold
  hoop créoles, afrofuturist gold visor with the infinity loop), kente /
  adinkra / Sahelian geometric motifs, gold / violet / cyan accents on a
  deep space black base.
- **Minimalism** — single page, no navigation bar, generous whitespace,
  forge corner radius (6px) on all surfaces, GitHub-dark-inspired surfaces,
  system-ui-first body type. Dark theme only.
- The full design system lives in [DESIGN.md](DESIGN.md).

## 5. Constraints

- **GitHub Pages** — static hosting, no server, no per-branch previews.
  The reviewer falls back to diff review.
- **No Google Fonts** — all fonts are self-hosted (GDPR). No CDN for
  fonts.
- **Sveltia CMS** — the content editor runs client-side from the official CDN
  and loads ONLY on `/admin/`, never on the public landing page (zero
  performance impact). Authentication uses a GitHub Personal Access Token
  (`SVELTIA_PAT`).
- **GDPR** — no external tracking, no third-party assets that leak data.
- **AGPL-3.0** — the site is licensed under AGPL-3.0 (see
  [README.md](README.md)).
- **Consumer-owned docs** — `README.md`, `LOOP.md`, `CONTEXT.md`,
  `DESIGN.md` are consumer-owned and NEVER overwritten by
  `bin/update`.

## 6. Content

- **Page sections** (landing, top to bottom): Hero → How boucle works → Lives in
  your forge → Why boucle → Quick start → Footer.
- **Lives in your forge** — dedicated section between "How boucle works" and "Why
  boucle" featuring GitHub and GitLab inline SVG logos and the promise "boucle
  lives in your forge. GitHub, GitLab. No external tool, no dashboard."
- **Five promises** (Why boucle): Lives in your forge, Deterministic and
  reliable, Works while you sleep, No UI No CLI, Self-healing self-learning
  loop.
- **Seven steps** (How boucle works): issue → spec+preview → thumb up → work → verdict → live → lessons learned.
- **Quick start**: `curl -fsSL https://ankaboot-source.github.io/boucle.dev/install.sh | bash`.
- **Attribution**: "Made in Africa by [ankaboot.io](https://ankaboot.io)".

## 7. See also

- [AGENTS.md](AGENTS.md) — Agent guide, mandatory principles
- [LOOP.md](LOOP.md) — Per-consumer loop configuration
- [README.md](README.md) — Overview, getting started, usage
- [DESIGN.md](DESIGN.md) — Design system
