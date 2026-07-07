import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/visual-effects/aurora-border/aurora-border?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";
import technologies from "@/configs/technologies";

const id = "aurora-border";

export default defineComponent({
  /** General */
  id,
  name: "Aurora Border",
  description: "A dynamic border component with rotation, blur, and glow effects for highlighting content.",
  category: componentCategory.visualEffects.id,
  dependencies: [
    technologies.tailwind.key,
  ],
  preview,
  previewClassName: "grid place-items-center p-5",

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
