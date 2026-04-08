import { memo, useMemo } from "react";
import styles from "./spotlight-card.module.css";

export const SpotlightCardsContainer = memo((props) => {
  const {
    children,
    className,
    tagName = "div",
    ...restProps
  } = props;

  const Component = tagName || "div";

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const cards = e.currentTarget.querySelectorAll(`.${styles["spotlight-card"]}`);
    cards.forEach((card) => {
      const { x, y } = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${clientX - x}px`);
      card.style.setProperty("--my", `${clientY - y}px`);
    });
  };

  return (
    <Component
      {...restProps}
      className={[
        styles["spotlight-card-container"],
        className,
      ].join(" ")}
      onMouseMove={handleMouseMove}
    >
      {children}
    </Component>
  );
});

const SpotlightCard = (props) => {
  const {
    children,
    spotlightColor = "rgb(127, 127, 127)",
    spotlightSize = 100,
    spotlightBorderWidth = 1,
    tagName = "div",
    className,
    style,
    wrapperTagName = "div",
    wrapperProps = {},
    ...restProps
  } = props;

  const Component = tagName || "div";

  const Wrapper = wrapperTagName || "div";

  const {
    className: wrapperClassName = "",
    ...restWrapperProps
  } = wrapperProps;

  const _spotlightBorderWidth = useMemo(() => (
    Math.max(0, spotlightBorderWidth)
  ), [spotlightBorderWidth]);

  const _spotlightColor = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = spotlightColor;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    canvas.remove();
    return (alpha) => {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
  }, [spotlightColor]);

  return (
    <Component
      {...restProps}
      className={[
        styles["spotlight-card"],
        className,
      ].join(" ")}
      style={{
        ...style,
        "--spotlight-size": `${spotlightSize}px`,
        "--spotlight-before-color": _spotlightColor(0.8),
        "--spotlight-after-color": _spotlightColor(0.2),
        "--spotlight-border-width": `${_spotlightBorderWidth}px`,
      }}
    >
      <Wrapper
        {...restWrapperProps}
        className={[
          styles["wrapper"],
          wrapperClassName,
        ].join(" ")}
      >
        {children}
      </Wrapper>
    </Component>
  );
};

export default memo(SpotlightCard);