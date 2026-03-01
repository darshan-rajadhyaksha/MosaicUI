const key = "three-dots-loader";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/loaders/three-dots-loader/previews/three-dots-loader-preview.jsx?raw";
import componentCode from "@/components/loaders/three-dots-loader/three-dots-loader.jsx?raw";
import componentCSSCode from "@/components/loaders/three-dots-loader/three-dots-loader.module.css?raw";
import Preview from "./preview.astro";

export default getComponentMeta({
  key,

  title: "Three Dots",
  description: "A minimal three-dot animated loader that indicates ongoing processing or content loading.",
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
});