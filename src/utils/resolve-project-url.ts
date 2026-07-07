import project from "@/configs/project";

const resolveProjectURL = (path = "") => {
  const url = new URL(project.url + path);
  return url.href;
};

export default resolveProjectURL;