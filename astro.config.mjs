// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from GitHub Pages at https://ankaboot-source.github.io/boucle.dev/.
// `base` must match the repo subpath so built assets (CSS/JS/fonts) resolve
// under /boucle.dev/ instead of root-relative /_astro/... which 404s.
export default defineConfig({
  outDir: 'dist',
  site: 'https://ankaboot-source.github.io',
  base: '/boucle.dev/',
});
