const key = "rolling-letters-animation";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/text-effects/rolling-letters-animation/previews/rolling-letters-animation-preview.jsx?raw";
import componentCode from "@/components/text-effects/rolling-letters-animation/rolling-letters-animation.jsx?raw";
import componentCSSCode from "@/components/text-effects/rolling-letters-animation/rolling-letters-animation.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Rolling Letters",
  description: "Displays a word where each character animates with a vertical rolling effect, creating a dynamic text reveal.",
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

  propsDocument: PropsDocument,
});