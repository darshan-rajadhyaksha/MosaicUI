import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import styles from "./text-emerge-animation.module.css";

const TextEmergeUnit = (props) => {
  const {
    animationDurationMs,
    children
  } = props;

  const ref = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      ref.current?.classList.add(styles["visible"]);
    }, animationDurationMs);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [animationDurationMs]);

  return (
    <span
      aria-hidden={true}
      ref={ref}
    >
      {children}
    </span>
  )
};

const TextEmergeAnimation = (props) => {
  const {
    text,
    type = "word",
    speed = 100
  } = props;

  const animationDurationMs = 800;

  const [currentIndex, setCurrentIndex] = useState(-1);

  const textMapping = useMemo(() => (
    text
    .split(" ")
    .filter(Boolean)
    .map(word => {
      if (type === "word") {
        return [word, " "];
      } else {
        return [
          ...word
            .split("")
            .filter(Boolean),
          " "
        ];
      }
    })
    .flat()
  ), [text, type]);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      const isLast = currentIndex === (textMapping.length - 1);
      if (isLast) return;
      setCurrentIndex(currentIndex + 1);
    }, speed);
    return () => {
      clearTimeout(timeout);
    }
  }, [currentIndex, textMapping, speed]);

  return (
    <span 
      aria-label={text}
      className={styles["text-emerge-animation"]}
      style={{
        "--animation-duration": `${animationDurationMs}ms`
      }}
    >
      {textMapping.map((entry, entryIndex) => (
        entryIndex <= currentIndex ? (
          <TextEmergeUnit
            key={`text-${entryIndex}`}
            animationDurationMs={animationDurationMs}
          >
            {entry}
          </TextEmergeUnit>
        ) : null
      ))}
    </span>
  )
};

export default memo(TextEmergeAnimation);