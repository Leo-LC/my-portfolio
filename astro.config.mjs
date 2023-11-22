import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "hybrid",
  /*   site: "https://leo-lc.github.io",
  base: "/my-portfolio", */

  build: {
    format: "file"
  },
  adapter: node({
    mode: "standalone"
  })
});