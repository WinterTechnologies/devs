// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://devs.wintertech.xyz",
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    icon(),
    react(),
    preact(),
  ],
});
