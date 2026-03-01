const key = "floating-indicator-tabs";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/essentials/floating-indicator-tabs/previews/floating-indicator-tabs-preview.jsx?raw";
import componentCode from "@/components/essentials/floating-indicator-tabs/floating-indicator-tabs.jsx?raw";
import componentCSSCode from "@/components/essentials/floating-indicator-tabs/floating-indicator-tabs.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Floating Indicator Tabs",
  description: "A lightweight accessible tab component designed with a fluid motion indicator that delivers smooth, spring-based transitions.",
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