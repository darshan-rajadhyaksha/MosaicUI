// no @ts-check
import { defineConfig } from 'astro/config';
import path from "path";
import react from '@astrojs/react';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import project from './src/configs/project';

// https://astro.build/config
export default defineConfig({
  site: project.url,
  output: "static",
  integrations: [
    mdx(),
    react(),
    icon(),
    sitemap({
      serialize(item) {
        if(
          [
            "/introduction", 
            "/installation",
          ].some(e => item.url.includes(e))
        ) {
          item.changefreq = "monthly";
          item.priority = 0.8;
        }
        if(
          [
            "/components",
          ].some(e => item.url.includes(e))
        ) {
          item.changefreq = "weekly";
          item.priority = 0.9;
        }
        if(item.url === project.url) {
          item.priority = 1;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  }
});