import { memo, useMemo } from "react";
import styles from "./colorized-text.module.css";

const ColorizedText = (props) => {
  const {
    text,
    colors = [
      "currentColor"
    ],
    variant = "gradient",
    className,
    style = null,
    ...restProps
  } = props;

  const isGradient = variant === "gradient";

  const gradient = useMemo(() => {
    if (isGradient) {
      return `linear-gradient(to right, ${colors.join()})`
    }
  }, [isGradient, colors]);

  return (
    <span
      {...restProps}
      className={[
        className,
        styles["colorized-text"],
        isGradient ? styles["gradient"] : "",
      ].join(" ")}
      style={{
        ...style,
        "--gradient": gradient,
      }}
    >
      {isGradient ? (
        text
      ) : (
        text.split("").map((letter, letterIndex) => (
          <span
            key={`letter-${letterIndex}`}
            aria-hidden={true}
            className={styles["letter"]}
            style={{
              "--color": colors[letterIndex % colors.length]
            }}
          >
            {letter}
          </span>
        ))
      )}
      {!isGradient && (
        <span
          className={styles["sr-only"]}
        >
          {text}
        </span>
      )}
    </span>
  );
};

export default memo(ColorizedText);