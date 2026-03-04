import { memo, useMemo } from "react";
import styles from "./colorized-text.module.css";

const ColorizedText = (props) => {
  const {
    text,
    colors = [
      "currentColor"
    ],
    variant = "gradient",
  } = props;

  const isGradient = variant === "gradient";

  const gradient = useMemo(() => {
    if (isGradient) {
      return `linear-gradient(to right, ${colors.join()})`
    }
  }, [isGradient, colors]);

  return (
    <span
      aria-label={!isGradient ? text : undefined}
      className={[
        styles["aurora-text"],
        isGradient ? styles["gradient"] : "",
      ].join(" ")}
      style={{
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
    </span>
  );
};

export default memo(ColorizedText);