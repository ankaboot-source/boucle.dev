# boucle.dev

Landing page for **boucle** — a zero-code autonomous product builder. From a
ticket in your forge to a feature in production, without running agents on your
own machine.

## Why boucle

Five promises, one loop.

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

Four steps, one loop. You stay in your forge, boucle does the rest.

1. **Issue** — you create a ticket in your forge.
2. **Spec** — boucle analyzes and writes the spec. You approve it.
3. **Implement** — boucle implements and deploys a preview.
4. **Deploy** — you approve the MR, the feature ships to production.

## Quick start

Three steps, and the loop takes over.

1. Add boucle as a submodule:

   ```sh
   git submodule add https://github.com/ankaboot-source/boucle .boucle
   ```

2. Set everything up (idempotent):

   ```sh
   .boucle/bin/setup gitlab
   ```

3. Create an issue, the loop starts:

   ```sh
   Create an issue with the boucle:triage label
   ```

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
