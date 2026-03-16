const key = "wavy-dots-background";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/backgrounds/wavy-dots-background/previews/wavy-dots-background-preview.jsx?raw";
import componentCode from "@/components/backgrounds/wavy-dots-background/wavy-dots-background.jsx?raw";
import componentCSSCode from "@/components/backgrounds/wavy-dots-background/wavy-dots-background.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Wavy Dots",
  description: "A subtle animated background where dots gently pulse toward the center in a harmonic wave motion.",
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

  examplesComponent: Examples,

  propsDocument: PropsDocument,
});