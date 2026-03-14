const key = "hamburger-button";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/interactions/hamburger-button/previews/hamburger-button-preview.jsx?raw";
import componentCode from "@/components/interactions/hamburger-button/hamburger-button.jsx?raw";
import componentCSSCode from "@/components/interactions/hamburger-button/hamburger-button.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Hamburger Button",
  description: "An animated hamburger button that smoothly toggles between menu and close (X) states.",
  category: ComponentCategories.interactions,

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