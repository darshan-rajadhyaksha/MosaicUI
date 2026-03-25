const key = "aura-border";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/visual-effects/aura-border/previews/aura-border-preview.jsx?raw";
import componentCode from "@/components/visual-effects/aura-border/aura-border.jsx?raw";
import componentCSSCode from "@/components/visual-effects/aura-border/aura-border.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Aura Border",
  description: "A dynamic border component with rotation, blur, and glow effects for highlighting content.",
  category: ComponentCategories.visualEffect,

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