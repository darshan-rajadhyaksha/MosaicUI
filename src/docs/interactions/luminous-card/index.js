const key = "luminous-card";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/interactions/luminous-card/previews/luminous-card-preview.jsx?raw";
import componentCode from "@/components/interactions/luminous-card/luminous-card.jsx?raw";
import componentCSSCode from "@/components/interactions/luminous-card/luminous-card.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Luminous Card",
  description: "A card wrapper component that adds a subtle cursor-tracking glow to enhance visual feedback in interactive UIs.",
  category: ComponentCategories.interactions,

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