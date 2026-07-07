import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/text-effects/circular-text-animation/circular-text-animation?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";
import technologies from "@/configs/technologies";

const id = "circular-text-animation";

export default defineComponent({
  /** General */
  id,
  name: "Circular Text Animation",
  description: "A flexible component for rendering text along a circular path with customizable styling and rotation.",
  category: componentCategory.textEffect.id,
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
