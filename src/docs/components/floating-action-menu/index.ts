import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/components/floating-action-menu/floating-action-menu?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import FloatingActionMenuPropsTable from "./FloatingActionMenu-props.mdx";
import FloatingActionMenuItemPropsTable from "./FloatingActionMenuItem-props.mdx";
import technologies from "@/configs/technologies";

const id = "floating-action-menu";

export default defineComponent({
  /** General */
  id,
  name: "Floating Action Menu",
  description: "A customizable floating action menu that arranges items along a curved arc with configurable radius and spacing.",
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
      name: "FloatingActionMenu",
      props: FloatingActionMenuPropsTable,
    },
    {
      name: "FloatingActionMenuItem",
      props: FloatingActionMenuItemPropsTable,
    },
  ]
});
