import { memo, useEffect, useMemo, useRef } from "react";
import styles from "./text-animation.module.css";

const TextAnimationUnit = memo((props) => {
  const {
    variant,
    animationDelayMs,
    animationDurationMs,
    children
  } = props;

  const ref = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      ref.current?.classList.add(styles["done"]);
    }, animationDelayMs + animationDurationMs);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [animationDelayMs, animationDurationMs]);

  return (
    <span
      aria-hidden={true}
      className={styles[variant]}
      ref={ref}
      style={{
        "--animation-delay": `${animationDelayMs}ms`,
      }}
    >
      {children === " " ? (
        <>&nbsp;</>
      ) : children}
    </span>
  );
});

const TextAnimation = (props) => {
  const {
    text,
    variant = "fadeIn",
    unit = "letter",
    stagger = 20,
    delay = 0,
    className,
    style,
    ...restProps
  } = props;

  const animationDurationMs = useMemo(() => (
    ({
      letter: 250,
      word: 400,
      text: 500,
    })[unit] ?? 500
  ), [unit]);

  const textUnits = useMemo(() => (
    unit === "text" ? (
      [text]
    ) : (
      text
        .split(" ")
        .filter(Boolean)
        .map(word => {
          if (unit === "word") {
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
    )
  ), [text, unit]);

  return (
    <span
      {...restProps}
      className={[
        className,
        styles["text-animation"],
      ].join(" ")}
      style={{
        ...style,
        "--animation-duration": `${animationDurationMs}ms`
      }}
    >
      {textUnits.map((entry, entryIndex) => (
        <TextAnimationUnit
          key={`text-${entry}-${entryIndex}`}
          animationDelayMs={delay + (stagger * entryIndex)}
          animationDurationMs={animationDurationMs}
          variant={variant}
        >
          {entry}
        </TextAnimationUnit>
      ))}
      <span
        className={styles["sr-only"]}
      >
        {text}
      </span>
    </span>
  );
};

export default memo(TextAnimation);