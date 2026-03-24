const key = "border-beam";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/visual-effects/border-beam/previews/border-beam-preview.jsx?raw";
import componentCode from "@/components/visual-effects/border-beam/border-beam.jsx?raw";
import componentCSSCode from "@/components/visual-effects/border-beam/border-beam.module.css?raw";
import Preview from "./preview.astro";
import Examples from "./examples.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Border Beam",
  description: "A customizable animated beam that travels along the border of a container for a dynamic visual highlight.",
  category: ComponentCategories.visualEffect,

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
  isCustomPropsDoc: true,
});