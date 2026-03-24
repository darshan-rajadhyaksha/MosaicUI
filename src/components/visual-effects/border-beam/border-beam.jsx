import { memo, useMemo } from "react";
import styles from "./border-beam.module.css";

const BorderBeamContainer = (props) => {
  const {
    children,
    tagName = "div",
    className,
    ...restProps
  } = props;

  const Component = tagName || "div";

  return (
    <Component
      {...restProps}
      className={[
        styles["border-beam-container"],
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
};

export const BorderBeam = memo((props) => {
  const {
    size = 50,
    width = 1,
    colors = [
      "rgba(0, 0, 0, 0)",
      "rgba(127, 127, 127, 1)",
      "rgba(0, 0, 0, 0)"
    ],
    duration = 5000,
    offset = 0,
    reverse = false,
    timingFunction = "linear",
    className,
    style,
    ...restProps
  } = props;

  const _size = useMemo(() => Math.max(0, size), []);
  const _width = useMemo(() => Math.max(0, width), []);
  const _duration = useMemo(() => Math.max(0, duration), []);
  const _offset = useMemo(() => Math.min(100, Math.max(0, offset)), []);
  const gradient = useMemo(() => (
    `linear-gradient(to left, ${colors.join()})`
  ), [colors]);

  return (
    <span
      {...restProps}
      aria-hidden={true}
      className={[
        styles["border-beam"],
        reverse ? styles["reverse"]: "",
        className,
      ].join(" ")}
      style={{
        ...style,
        "--size": `${_size}px`,
        "--width": `${_width}px`,
        "--duration": `${_duration}ms`,
        "--offset": `${_offset}%`,
        "--gradient": gradient,
        "--timing-funtion": timingFunction,
      }}
    />
  );
});

export default memo(BorderBeamContainer);