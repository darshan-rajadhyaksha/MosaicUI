import project from "@/config/project"

const getUrl = (path = "") => {
  const url = new URL(project.url + path);
  return url.href;
};

export default getUrl;