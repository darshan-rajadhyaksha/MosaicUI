import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/components/arc-cards/arc-cards?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";
import technologies from "@/configs/technologies";

const id = "arc-cards";

export default defineComponent({
  /** General */
  id,
  name: "Arc Cards",
  description: "A fluid hover animation component that arranges cards along an arc with dynamic scaling, rotation, and blur transitions.",
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
      name: `${id}.tsx`,
      props: componentPropsTable,
    },
  ]
});
