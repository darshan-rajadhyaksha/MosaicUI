const key = "ghost-cubes-background";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/backgrounds/ghost-cubes-background/previews/ghost-cubes-background-preview.jsx?raw";
import componentCode from "@/components/backgrounds/ghost-cubes-background/ghost-cubes-background.jsx?raw";
import componentCSSCode from "@/components/backgrounds/ghost-cubes-background/ghost-cubes-background.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Ghost Cubes",
  description: "Translucent cubes drift upward and fade away, creating a subtle ghost-like background motion.",
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

  propsDocument: PropsDocument,
});