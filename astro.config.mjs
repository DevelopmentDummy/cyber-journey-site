import { defineConfig } from 'astro/config';

// GitHub Pages (project site): served under /cyber-journey-site/
export default defineConfig({
  site: 'https://developmentdummy.github.io',
  base: '/cyber-journey-site',
  build: { format: 'directory' },
});
