import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: false,
    },
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
