import { defineConfig } from "astro/config";
// Packages Import
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: netlify()
});