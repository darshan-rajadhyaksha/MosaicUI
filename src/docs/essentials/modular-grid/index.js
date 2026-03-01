const key = "modular-grid";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/essentials/modular-grid/previews/modular-grid-preview.jsx?raw";
import componentCode from "@/components/essentials/modular-grid/modular-grid.jsx?raw";
import componentCSSCode from "@/components/essentials/modular-grid/modular-grid.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Modular Grid",
  description: "A composable layout grid that provides responsive breakpoints and configurable variants for building structured UI sections.",
  category: ComponentCategories.essential,

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
  isCustomPropsDoc: true,
});