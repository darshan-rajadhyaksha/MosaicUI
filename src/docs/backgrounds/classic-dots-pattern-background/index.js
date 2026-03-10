const key = "classic-dots-pattern-background";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/backgrounds/classic-dots-pattern-background/previews/classic-dots-pattern-background-preview.jsx?raw";
import componentCode from "@/components/backgrounds/classic-dots-pattern-background/classic-dots-pattern-background.jsx?raw";
import componentCSSCode from "@/components/backgrounds/classic-dots-pattern-background/classic-dots-pattern-background.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Classic Dots Pattern",
  description: "Flexible dotted background component with configurable color, spacing, scale, and multiple pattern variants, designed to wrap and enhance UI sections with subtle visual texture.",
  category: ComponentCategories.background,

  previewComponent: Preview,
  installationSteps: [
    {
      name: InstallationSteps.COPY_COMPONENT_CODE,
      fileName: `${key}.jsx`,
      code: componentCode,
    },
    {
      name: InstallationSteps.COPY_COMPONENT_STYLES,
      fileName: `${key}.module.css`,
      code: componentCSSCode,
    },
    {
      name: InstallationSteps.COMPONENT_USAGE,
      fileName: `${key}-preview.jsx`,
      code: previewCode,
    },
  ],

  examplesComponent: Examples,

  propsDocument: PropsDocument,
});