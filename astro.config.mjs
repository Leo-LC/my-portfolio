import { defineConfig } from "astro/config";
// Packages Import
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  /*   output: "server", */
  site: "https://leo-lc.github.io/",
  base: "/my-portfolio",
});
