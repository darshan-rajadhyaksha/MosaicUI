import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/components/marquee/marquee?raw";
import componentCSSCode from "@/registry/components/marquee/marquee.module.css?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import componentPropsTable from "./props.mdx";
import technologies from "@/configs/technologies";
import { mapping } from "./preview-switch";

const id = "marquee";

export default defineComponent({
  /** General */
  id,
  name: "Marquee",
  description: "A flexible scrolling layout for showcasing repeating content like logos, announcements, or testimonials.",
  category: componentCategory.component.id,
  dependencies: [
    technologies.tailwind.key,
  ],
  preview,
  previews: mapping,
  previewClassName: "grid place-items-center",

  /** Installation */
  source: [
    {
      name: `${id}.tsx`,
      content: componentCode,
      lang: "tsx",
    },
    {
      name: `${id}.module.css`,
      content: componentCSSCode,
      lang: "css",
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
