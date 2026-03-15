import { memo, useCallback, useRef } from "react";
import styles from "./luminous-card.module.css";

const LuminousCard = (props) => {
  const {
    color = "rgba(255, 255, 255, 0.25)",
    className,
    tagName = "div",
    children,
    ...restProps
  } = props;

  const Component = tagName || "div";

  const cardWrapperRef = useRef();

  const cardMouseMoveHandler = useCallback((e) => {
    const cardWrapperNode = cardWrapperRef.current;
    const { x: cardWrapperX, y: cardWrapperY } = cardWrapperNode.getBoundingClientRect();
    const x = Math.max(0, e.clientX - cardWrapperX);
    const y = Math.max(0, e.clientY - cardWrapperY);
    let lightThemeColor = color;
    let darkThemeColor = color;
    if (typeof color === "object") {
      lightThemeColor = color.light;
      darkThemeColor = color.dark;
    }
    Object.entries({
      "x": `${x}px`,
      "y": `${y}px`,
      "light-color": lightThemeColor,
      "dark-color": darkThemeColor,
    }).forEach(([key, value]) => {
      cardWrapperNode.style.setProperty(`--${key}`, value);
    });
  }, [color]);

  return (
    <Component
      {...restProps}
      ref={cardWrapperRef}
      onMouseMove={cardMouseMoveHandler}
      className={[
        className,
        styles["luminous-card"],
      ].join(" ")}
    >
      {children}
    </Component>
  );
};

export default memo(LuminousCard);