import project from "@/config/project";

export default Object.freeze({
  logo: {
    title: project.name,
    src: project.logo.small,
  },
  primaryLinks: [
    {
      title: "Components",
      href: "/components/",
    },
    {
      title: "Changelog",
      href: "/changelog/",
    },
  ],
  secondaryLinks: [
    {
      type: "icon-button",
      title: "Github",
      href: project.github,
      icon: "github"
    },
  ],
});

export const landingPageConfig = Object.freeze({
  logo: {
    title: project.name,
    src: project.logo.small,
  },
  secondaryLinks: [
    {
      type: "icon-button",
      title: "Github",
      href: project.github,
      icon: "github"
    },
  ],
});