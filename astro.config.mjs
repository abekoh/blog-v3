import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: false,
    },
  },
  compressHTML: true,
  site: "https://blog.abekoh.dev",
  build: {
    format: "file",
  },
  integrations: [sitemap(), prefetch(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
