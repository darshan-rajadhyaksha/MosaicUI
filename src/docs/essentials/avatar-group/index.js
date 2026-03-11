const key = "avatar-group";

import getComponentMeta from "@/lib/get-component-meta";
import ComponentCategories from "@/config/component-categories";
import InstallationSteps from "@/config/installation-steps";
import previewCode from "@/docs/essentials/avatar-group/previews/avatar-group-preview.jsx?raw";
import componentCode from "@/components/essentials/avatar-group/avatar-group.jsx?raw";
import componentCSSCode from "@/components/essentials/avatar-group/avatar-group.module.css?raw";
import Preview from "./preview.astro";
import PropsDocument from "./props.mdx";

export default getComponentMeta({
  key,

  title: "Avatar Group",
  description: "A component to display a group of user avatars representing members of a team, project, or community.",
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