// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import astroIcon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import project from "./src/config/project";

export default defineConfig({
  site: project.url,
  output: "static",
  integrations: [
    mdx(),
    react(),
    astroIcon(),
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
            "/changelog",
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
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: "transform-nested-dark-mode",
            AtRule(atRule, { Rule }) {
              const isDarkMode = (
                atRule.name === "media" &&
                /prefers-color-scheme\s*:\s*dark/.test(atRule.params)
              );
              if (isDarkMode) {
                let parent = atRule.parent;
                let selectorParts = [];
                while (parent && parent.type === "rule") {
                  selectorParts.unshift(parent.selector);
                  parent = parent.parent;
                }
                if (selectorParts.length > 0) {
                  const fullSelector = `:global(html.dark) ${selectorParts.join(" ")}`;
                  const newRule = new Rule({
                    selector: fullSelector,
                    nodes: atRule.nodes
                  });
                  atRule.root().append(newRule);
                  atRule.remove();
                }
              }
            },
          },
        ],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});