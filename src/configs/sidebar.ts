import registry from "@/configs/registry";
import componentCategory from "@/configs/categories";

export default Object.freeze([
  {
    label: "Get Started",
    entries: [
      {
        label: "Introduction",
        href: "/introduction/",
      },
      {
        label: "Installation",
        href: "/installation/",
      },
      {
        label: "Components",
        href: "/components/",
      },
    ],
  },
  ...(Object.entries(registry).map(([componentCategoryKey, componentsMap]) => {
    return {
      label: componentCategory[componentCategoryKey].name,
      entries: Object.values(componentsMap).map(component => ({
        label: component.name,
        href: `/components/${component.id}/`,
      })),
    }
  }))
]);