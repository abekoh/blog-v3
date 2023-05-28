import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

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
    format: "file"
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
});
