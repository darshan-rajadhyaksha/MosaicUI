import defineComponent from "@/utils/component-config";
import componentCategory from "@/configs/categories";
import componentCode from "@/registry/components/tilt-3d/tilt-3d?raw";
import previewCode from "./preview?raw";
import preview from "./preview.astro";
import Tilt3DPropsTable from "./props-Tild3D.mdx";
import Tilt3DElementPropsTable from "./props-Tild3DElement.mdx";
import technologies from "@/configs/technologies";

const id = "tilt-3d";

export default defineComponent({
  /** General */
  id,
  name: "Tilt 3D",
  description: "A smooth 3D hover effect that brings interface elements to life with depth and motion.",
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
      name: "Tilt3D",
      props: Tilt3DPropsTable,
    },
    {
      name: "Tilt3DElement",
      props: Tilt3DElementPropsTable,
    },
  ]
});
