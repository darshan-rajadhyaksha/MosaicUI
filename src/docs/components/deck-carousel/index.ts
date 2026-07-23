import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/components/deck-carousel/deck-carousel?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import DeckCarouselPropsTable from "./props-DeckCarousel.mdx";
import DeckCarouselItemPropsTable from "./props-DeckCarouselItem.mdx";
import technologies from "@/configs/technologies";

const id = "deck-carousel";

export default defineComponent({
  /** General */
  id,
  name: "Deck Carousel",
  description: "A 3D deck carousel that animates items with depth, perspective, and smooth transitions.",
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
      name: `DeckCarousel`,
      props: DeckCarouselPropsTable,
    },
    {
      name: `DeckCarouselItem`,
      props: DeckCarouselItemPropsTable,
    },
  ]
});
