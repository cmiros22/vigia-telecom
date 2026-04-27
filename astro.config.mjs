import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import cloudflare from "@astrojs/cloudflare";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: false,
    mode: "advanced"
  }),
  output: "server",
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",

  integrations: [
    react(),
    sitemap(),
    tailwind(),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },

    vite: {
    ssr: {
      noExternal: ["@mapbox/mapbox-sdk", "@mapbox/mapbox-sdk/services/geocoding"]
    },
    define: {
      global: 'globalThis'
    }
  }
});