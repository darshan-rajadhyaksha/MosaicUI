const key = "dot-grid-gradient-background";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/backgrounds/dot-grid-gradient-background/previews/dot-grid-gradient-background-preview.jsx?raw";
import componentCode from "@/components/backgrounds/dot-grid-gradient-background/dot-grid-gradient-background.jsx?raw";
import componentCSSCode from "@/components/backgrounds/dot-grid-gradient-background/dot-grid-gradient-background.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Dot Grid Gradient",
  description: "A customizable dot grid with gradient scaling, allowing control over dot size, color, and shrink direction.",
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