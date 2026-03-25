import { memo, useLayoutEffect, useMemo, useRef } from "react";
import styles from "./aura-border.module.css";

const AuraBorderContainer = (props) => {
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
        styles["aura-border-container"],
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
};

export const AuraBorder = memo((props) => {
  const {
    children,
    colors = ["rgba(127, 127, 127, 1)"],
    width = 1,
    speed = 0.5,
    intensity = 0.5,
    tagName = "div",
    className,
    style,
    ...restProps
  } = props;

  const Component = tagName || "div";

  const ref = useRef();

  const _width = useMemo(() => (
    Math.max(0, width)
  ), [width]);

  const _speed = useMemo(() => (
    Math.min(1, Math.max(0, speed))
  ), [speed]);

  const _intensity = useMemo(() => (
    20 * Math.min(1, Math.max(0, intensity))
  ), [intensity]);

  const gradient = useMemo(() => (
    `conic-gradient(from var(--conic-angle), ${colors.join()})`
  ), [colors]);

  useLayoutEffect(() => {
    let rafId = null;
    let conicAngle = 0;
    const updateConicAngle = () => {
      conicAngle += (_speed * 2);
      conicAngle = conicAngle % 360;
      ref.current.style.setProperty("--conic-angle", `${conicAngle}deg`);
      rafId = requestAnimationFrame(updateConicAngle);
    };
    rafId = requestAnimationFrame(updateConicAngle);
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [_speed]);

  return (
    <Component
      {...restProps}
      ref={ref}
      className={[
        styles["aura-border"],
        className,
      ].join(" ")}
      style={{
        ...style,
        "--gradient": gradient,
        "--width": `${_width}px`,
        "--intensity": `${_intensity}px`,
      }}
    >
      {children}
    </Component>
  );
});

export default memo(AuraBorderContainer);