import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/components/tilt-image-carousel/tilt-image-carousel?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import propsTable from "./props.mdx";
import technologies from "@/configs/technologies";

const id = "tilt-image-carousel";

export default defineComponent({
  /** General */
  id,
  name: "Tilt Image Carousel",
  description: "A customizable 3D image carousel featuring stacked layouts, tilt effects, and smooth animations",
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
      name: "TiltCarousel",
      props: propsTable,
    },
  ]
});
