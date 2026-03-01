const key = "wave-bars-loader";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/loaders/wave-bars-loader/previews/wave-bars-loader-preview.jsx?raw";
import componentCode from "@/components/loaders/wave-bars-loader/wave-bars-loader.jsx?raw";
import componentCSSCode from "@/components/loaders/wave-bars-loader/wave-bars-loader.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Wave Bars",
  description: "A rhythmic wave loader with cascading vertical bar motion.",
  category: ComponentCategories.loader,

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