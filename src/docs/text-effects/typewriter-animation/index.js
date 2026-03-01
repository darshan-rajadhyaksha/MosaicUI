const key = "typewriter-animation";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/text-effects/typewriter-animation/previews/typewriter-animation-preview.jsx?raw";
import componentCode from "@/components/text-effects/typewriter-animation/typewriter-animation.jsx?raw";
import componentCSSCode from "@/components/text-effects/typewriter-animation/typewriter-animation.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Typewriter Animation",
  description: "Animates text like a typewriter, with optional speed, cursor, and styling controls.",
  category: ComponentCategories.textEffect,

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

