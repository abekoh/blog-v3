import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

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
  integrations: [
    tailwind(),
    sitemap(),
    prefetch(),
  ],
});
