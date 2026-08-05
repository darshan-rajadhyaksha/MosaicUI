import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/backgrounds/grid-pattern-background/grid-pattern-background?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";
import technologies from "@/configs/technologies";

const id = "grid-pattern-background";

export default defineComponent({
  /** General */
  id,
  name: "Grid Pattern",
  description: "A customizable animated grid background component for creating dynamic patterned layouts behind content.",
  category: componentCategory.background.id,
  dependencies: [
    technologies.tailwind.key,
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
