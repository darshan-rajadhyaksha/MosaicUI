import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import technologies from "@/configs/technologies";
import verticalTextSliderCode from "@/registry/text-effects/vertical-text-slider/vertical-text-slider?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";

const id = "vertical-text-slider";

export default defineComponent({
  /** General */
  id,
  name: "Vertical Text Slider",
  description: "Slides through an list of text vertically, pausing briefly on each item before transitioning to the next.",
  category: componentCategory.textEffect.id,
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
      content: verticalTextSliderCode,
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
