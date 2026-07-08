import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/components/fluid-dock/fluid-dock?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import FluidDockPropsTable from "./FluidDock-props.mdx";
import FluidDockItemPropsTable from "./FluidDockItem-props.mdx";
import technologies from "@/configs/technologies";

const id = "fluid-dock";

export default defineComponent({
  /** General */
  id,
  name: "Fluid Dock",
  description: "A modern dock navigation with fluid hover animations and interactive tooltips.",
  category: componentCategory.component.id,
  dependencies: [
    technologies.tailwind.key,
    technologies.motion.key,
  ],
  preview,
  previewClassName: "grid place-items-center",

  /** Installation */
  source: [
    {
      name: `${id}.tsx`,
      content: componentCode,
      lang: "tsx",
    },
  ],

  /** Usage */
  usage: [
    {
      name: `${id}-preview.tsx`,
      content: previewCode,
      lang: "tsx",
    },
  ],

  /** Components API */
  componentsAPI: [
    {
      name: "FluidDock",
      props: FluidDockPropsTable,
    },
    {
      name: "FluidDockItem",
      props: FluidDockItemPropsTable,
    },
  ]
});
