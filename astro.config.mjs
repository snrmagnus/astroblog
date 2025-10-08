// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astroblog.sanerasolutions.com/",

  vite: {
    plugins: [tailwind()],
  },

  integrations: [preact()],
});