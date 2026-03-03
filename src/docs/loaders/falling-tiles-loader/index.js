const key = "falling-tiles-loader";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/loaders/falling-tiles-loader/previews/falling-tiles-loader-preview.jsx?raw";
import componentCode from "@/components/loaders/falling-tiles-loader/falling-tiles-loader.jsx?raw";
import componentCSSCode from "@/components/loaders/falling-tiles-loader/falling-tiles-loader.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Falling Tiles",
  description: "Tiles fall from the top, settle into a grid for a moment, and then descend one by one in a looping animation.",
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