import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/text-effects/decrypting-text-animation/decrypting-text-animation?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";
import technologies from "@/configs/technologies";

const id = "decrypting-text-animation";

export default defineComponent({
  /** General */
  id,
  name: "Decrypting Text",
  description: "Displays text with a decrypting animation effect, revealing the final content through randomized characters.",
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
    },
  ],

  /** Usage */
  usage: [
    {
      name: `${id}-preview.tsx`,
      content: previewCode,
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
