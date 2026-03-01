import project from "@/config/project";

export default Object.freeze({
  logo: {
    title: project.name,
    src: project.logo.full,
  },
  primaryLinks: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Changelog",
      href: "/changelog",
    },
  ],
  secondaryLinks: [
    {
      type: "icon-button",
      href: project.social.x.url,
      icon: "x"
    },
    {
      type: "icon-button",
      href: project.social.github.url,
      icon: "github"
    },
  ],
});

export const landingPageConfig = Object.freeze({
  logo: {
    title: project.name,
    src: project.logo.full,
  },
  secondaryLinks: [
    {
      type: "icon-button",
      href: project.social.x.url,
      icon: "x"
    },
    {
      type: "icon-button",
      href: project.social.github.url,
      icon: "github"
    },
  ],
});