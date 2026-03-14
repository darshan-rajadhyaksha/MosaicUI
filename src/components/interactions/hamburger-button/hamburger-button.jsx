import { memo } from "react";
import styles from "./hamburger-button.module.css";

const HamburgerButton = (props) => {
  const {
    size = 24,
    active = false,
    className,
    style,
    ...restProps
  } = props;

  const _size = Math.max(16, size);

  return (
    <button
      aria-label="Toggle menu"
      aria-expanded={active}
      {...restProps}
      className={[
        className,
        styles["hamburger-button"],
        active ? styles["active"] : "",
      ].join(" ")}
      style={{
        ...style,
        "--size": `${_size}px`,
      }}
    >
      <span aria-hidden={true} />
      <span aria-hidden={true} />
      <span aria-hidden={true} />
      <span aria-hidden={true} />
      <span aria-hidden={true} />
    </button>
  )
};

export default memo(HamburgerButton);