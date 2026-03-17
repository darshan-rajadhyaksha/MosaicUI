const key = "orbit-toggle-switch";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/interactions/orbit-toggle-switch/previews/orbit-toggle-switch-preview.jsx?raw";
import componentCode from "@/components/interactions/orbit-toggle-switch/orbit-toggle-switch.jsx?raw";
import componentCSSCode from "@/components/interactions/orbit-toggle-switch/orbit-toggle-switch.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Orbit Toggle Switch",
  description: "A dynamic toggle switch where both the track and thumb rotate smoothly when switching states, creating a visually engaging interaction.",
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

  examplesComponent: Examples,

  propsDocument: PropsDocument,
});