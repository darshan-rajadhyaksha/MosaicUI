const key = "marquee";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/essentials/marquee/previews/marquee-preview.jsx?raw";
import componentCode from "@/components/essentials/marquee/marquee.jsx?raw";
import componentCSSCode from "@/components/essentials/marquee/marquee.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Marquee",
  description: "A flexible scrolling layout for showcasing repeating content like logos, announcements, or testimonials.",
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
});