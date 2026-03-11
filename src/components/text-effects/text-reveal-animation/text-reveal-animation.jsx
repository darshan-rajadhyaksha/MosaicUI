import { memo, useCallback, useEffect, useRef } from "react";
import styles from "./text-reveal-animation.module.css";

const TextRevealAnimation = (props) => {
  const {
    text,
    className,
    ...restProps
  } = props;

  const textRef = useRef(null);

  const updateTextSize = useCallback(() => {
    const width = Math.round(textRef.current.getBoundingClientRect().width);
    textRef.current.style.setProperty("--animation-name", styles["reveal-text-keyframes"]);
    textRef.current.style.setProperty("--width", `${width}px`);
  }, []);

  useEffect(() => {
    const resizeOberver = new ResizeObserver(updateTextSize);
    resizeOberver.observe(textRef.current);
    updateTextSize();
    return () => {
      resizeOberver.disconnect();
    }
  }, [updateTextSize]);

  return (
    <span
      {...restProps}
      className={[
        className,
        styles["reveal-text"],
      ].join(" ")}
      ref={textRef}
    >
      <span>
        {text}
      </span>
    </span>
  );
};

export default memo(TextRevealAnimation);