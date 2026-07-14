import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/visual-effects/spotlight-card/spotlight-card?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import SpotlightCardsContainerPropsTable from "./SpotlightCardsContainer-props.mdx";
import SpotlightCardPropsTable from "./SpotlightCard-props.mdx";
import technologies from "@/configs/technologies";

const id = "spotlight-card";

export default defineComponent({
  /** General */
  id,
  name: "Spotlight Card",
  description: "A container for interactive cards with a hover spotlight effect, ideal for showcasing features or highlights.",
  category: componentCategory.visualEffects.id,
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
      name: "SpotlightCardsContainer",
      props: SpotlightCardsContainerPropsTable,
    },
    {
      name: "SpotlightCard",
      props: SpotlightCardPropsTable,
    },
  ]
});
