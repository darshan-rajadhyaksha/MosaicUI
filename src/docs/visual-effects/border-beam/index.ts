import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/visual-effects/border-beam/border-beam?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";
import technologies from "@/configs/technologies";

const id = "border-beam";

export default defineComponent({
  /** General */
  id,
  name: "Border Beam",
  description: "A customizable animated beam that travels along the border of a container for a dynamic visual highlight.",
  category: componentCategory.visualEffects.id,
  dependencies: [
    technologies.motion.key,
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
