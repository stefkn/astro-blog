import { defineConfig } from 'astro/config';

// https://astro.build/config

export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-dark',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shikiji.netlify.app/guide/transformers
      // Find common transformers: https://shikiji.netlify.app/packages/transformers
      transformers: [],
    },
  },
});
