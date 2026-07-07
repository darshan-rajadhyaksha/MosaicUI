const isActivePath = (currentPath: string, path: string) => (
  currentPath.replace(/\/$/, "") === path.replace(/\/$/, "")
);

export default isActivePath;