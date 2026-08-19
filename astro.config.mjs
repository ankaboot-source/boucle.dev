// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from GitHub Pages at the custom domain https://boucle.dev/.
// With a custom domain (CNAME), GitHub Pages serves from root, so `base` must be
// unset (root) and `site` must be the apex domain. Built assets resolve
// root-relative (/fonts/..., /_astro/...) instead of under /boucle.dev/.
export default defineConfig({
  outDir: 'dist',
  site: 'https://boucle.dev',
});
