const key = "vertical-text-slider";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/text-effects/vertical-text-slider/previews/vertical-text-slider-preview.jsx?raw";
import componentCode from "@/components/text-effects/vertical-text-slider/vertical-text-slider.jsx?raw";
import componentCSSCode from "@/components/text-effects/vertical-text-slider/vertical-text-slider.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Vertical Text Slider",
  description: "Slides through an list of text vertically, pausing briefly on each item before transitioning to the next.",
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