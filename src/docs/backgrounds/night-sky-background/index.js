const key = "night-sky-background";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/backgrounds/night-sky-background/previews/night-sky-background-preview.jsx?raw";
import componentCode from "@/components/backgrounds/night-sky-background/night-sky-background.jsx?raw";
import componentCSSCode from "@/components/backgrounds/night-sky-background/night-sky-background.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Night Sky",
  description: "A dynamic night sky background with twinkling stars, customizable density, and content layered on top.",
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