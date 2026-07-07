import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/text-effects/text-animation/text-animation?raw";
import previewCode from "./preview-slidedown.tsx?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";
import technologies from "@/configs/technologies";
import { mapping } from "./preview-switch.tsx";

const id = "text-animation";

export default defineComponent({
  /** General */
  id,
  name: "Text Animation",
  description: "Create dynamic text effects by staggering letters or words with configurable motion and timing, great for hero sections, promotional content, or onboarding screens.",
  category: componentCategory.textEffect.id,
  dependencies: [
    technologies.motion.key,
    technologies.tailwind.key,
  ],
  preview,
  previewClassName: "grid place-items-center p-5",
  previews: mapping,

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
