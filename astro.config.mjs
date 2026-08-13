// @ts-check
import { defineConfig } from 'astro/config';

// GitLab Pages expects output in public/, but Astro's publicDir also
// defaults to public/. Use dist/ for build output; the pages job
// moves it to public/ for GitLab Pages.
export default defineConfig({
  outDir: 'dist',
  site: 'https://boucle.dev',
});