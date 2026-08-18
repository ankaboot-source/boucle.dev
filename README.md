# boucle.dev

**Great ideas deserve to ship.**

Landing page for **boucle** — a zero-code autonomous product builder. From a
ticket in your forge to a feature in production, without running agents on your
own machine.

## Why boucle

Harness made for human, made by an indie product builder for product builders.

1. **Lives in your forge** — boucle lives in your forge (GitHub/GitLab). No
   external tool, no separate dashboard. Everything happens where you already
   work.
2. **Deterministic and reliable** — deterministic, therefore reliable. You
   intervene at the right moment, at the decision points.
3. **Works while you sleep** — the agent works overnight for you. You intervene
   only when it matters.
4. **No UI, No CLI** — no interface to learn, no command line to master. You
   interact through your forge: issues, comments, labels.
5. **Self-healing, self-learning loop** — a loop that learns from its mistakes,
   self-updates, and adapts to your codebase as your project advances.

## How it works

boucle lives in your forge. GitHub, GitLab. No external tool, no dashboard.

1. **Drop your idea in an issue** — I create an issue in my forge with a title and a description. It's just a normal ticket.
2. **Receive a proposal with a preview** — boucle analyzes, writes a spec, and posts a comment on the issue with a preview. I see exactly what it will look like.
3. **Validate with a thumb** — I react with a thumb up on the spec comment. No form, no CLI. Just an emoji.
4. **It works** — boucle implements, builds, deploys a preview. I have nothing to do meanwhile. The agent works.
5. **It's verified** — the reviewer checks the render, posts a verdict (PASS/FAIL) as a PR comment. If FAIL, it loops. If PASS, the PR is ready.
6. **Approve, it's live** — I approve the PR (or boucle merges per config). The feature ships to production. It's live.
7. **Lessons learned** — boucle captures what worked and what didn't from each loop, and applies those lessons to do better on the next feature.

## Quick start

One command, and the loop takes over.

```sh
curl -fsSL https://ankaboot-source.github.io/boucle.dev/install.sh | bash
```

Then create an issue in your forge and tag it `boucle:triage` — the loop starts.

## Brand

The boucle logo is a **figurative afrofuturist face**: a golden afro (the
full circle = the "boucle"), gold hoop créoles, and an afrofuturist gold
visor with the infinity loop (∞) woven into the bridge. The hero shows it as
an **animated logo video** (`public/boucle-logo.mp4`, autoplay/loop/muted) in
a standalone column on desktop, with `public/boucle-logo.png` as the static
poster/fallback. A matching `public/favicon.svg` provides the 32×32 favicon.

Made in Africa by [ankaboot.io](https://ankaboot.io).

## Development

This is an [Astro](https://astro.build) static site. Build and preview locally:

```sh
npm install
npm run build
npm run preview
```

The site is deployed to GitHub Pages under `/boucle.dev/`.

## License

[AGPL-3.0](https://github.com/ankaboot-source/boucle/blob/main/LICENSE)
