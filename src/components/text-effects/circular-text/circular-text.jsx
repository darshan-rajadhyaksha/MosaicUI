import { memo } from "react";
import styles from "./circular-text.module.css";

const CircularText = (props) => {
  const {
    text,
    radius,
    addTrailingSpace = true,
    rotate = false,
    direction = "clockwise",
    duration = 10 * 1000,
    className,
    style = null,
    letterClassName,
    letterStyle = null,
    ...restProps
  } = props;

  const _text = text.trim() + (addTrailingSpace ? " " : "");
  const _radius = Math.max(0, radius);
  const _duration = Math.min(Math.max(100, duration), 60 * 1000);

  const getCoordinates = (angle, radius) => {
    const radians = +((Math.PI / 180) * angle).toPrecision(4);
    return {
      x: +((Math.cos(radians) * radius).toFixed(0)),
      y: +((Math.sin(radians) * radius).toFixed(0)),
    };
  };

  return (
    <span
      {...restProps}
      className={[
        className,
        styles["circular-text"],
        rotate ? styles[`rotate-${direction}`] : "",
      ].join(" ")}
      style={{
        ...style,
        "--radius": `${_radius}px`,
        "--duration": `${_duration}ms`,
      }}
    >
      {[..._text].map((letter, letterIndex) => {
        const angle = 360 / _text.length * letterIndex;
        const { x, y } = getCoordinates(angle, _radius);
        return (
          <span
            aria-hidden={true}
            key={`letter-${letter}-${letterIndex}`}
            className={letterClassName}
            style={{
              ...letterStyle,
              "--x": `${x}px`,
              "--y": `${y}px`,
              "--angle": `${angle}deg`,
            }}
          >
            {letter === " " ? <>&nbsp;</> : letter}
          </span>
        );
      })}
      <span
        className={styles["sr-only"]}
      >
        {text}
      </span>
    </span>
  );
};

export default memo(CircularText);