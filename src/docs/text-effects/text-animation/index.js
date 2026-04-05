const key = "text-animation";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/text-effects/text-animation/previews/text-animation-preview.jsx?raw";
import componentCode from "@/components/text-effects/text-animation/text-animation.jsx?raw";
import componentCSSCode from "@/components/text-effects/text-animation/text-animation.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Text Animation",
  description: "Create dynamic text effects by staggering letters or words with configurable motion and timing, great for hero sections, promotional content, or onboarding screens.",
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