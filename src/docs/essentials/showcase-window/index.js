const key = "showcase-window";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/essentials/showcase-window/previews/showcase-window-preview.jsx?raw";
import componentCode from "@/components/essentials/showcase-window/showcase-window.jsx?raw";
import componentCSSCode from "@/components/essentials/showcase-window/showcase-window.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Showcase Window",
  description: "A container for desktop app previews, showing features or screenshots in a polished frame for promotional pages.",
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

  propsDocument: PropsDocument,
});