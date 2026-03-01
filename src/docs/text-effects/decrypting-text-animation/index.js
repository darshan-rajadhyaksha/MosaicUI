const key = "decrypting-text-animation";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/text-effects/decrypting-text-animation/previews/decrypting-text-animation-preview.jsx?raw";
import componentCode from "@/components/text-effects/decrypting-text-animation/decrypting-text-animation.jsx?raw";
import componentCSSCode from "@/components/text-effects/decrypting-text-animation/decrypting-text-animation.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Decrypting Text",
  description: "Displays text with a decrypting animation effect, revealing the final content through randomized characters.",
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