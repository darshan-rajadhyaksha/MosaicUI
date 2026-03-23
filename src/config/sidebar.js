import components from "@/config/components";

export default Object.freeze([
  {
    title: "Get started",
    items: [
      {
        title: "Introduction",
        href: "/introduction/",
      },
      {
        title: "Installation",
        href: "/installation/",
      },
      {
        title: "Components",
        href: "/components/",
      },
      {
        title: "Changelog",
        href: "/changelog/",
      }
    ],
  },
  ...components.map(entry => {
    return {
      title: entry.title,
      items: entry.items.map(item => ({
        title: item.info.title,
        href: `/components/${item.key}/`,
      })),
    }
  })
]);