import { memo, useState, useEffect, useRef, useMemo } from "react";
import styles from "./vertical-text-slider.module.css";

const VerticalTextSlider = (props) => {
  const {
    texts,
    direction = "up",
    visibleDuration = 2000,
  } = props;

  const transitionDurationMs = 250;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const wordNodeRef = useRef();

  const wordDirectionClassName = useMemo(() => (
    `direction-${direction === "down" ? "down" : "up"}`
  ), [direction]);

  const totalAnimationDuration = useMemo(() => (
    Math.max(transitionDurationMs * 4, visibleDuration)
  ), [transitionDurationMs, visibleDuration]);

  useEffect(() => {
    let animationOutTimeoutId = null, animationEndTimeoutId = null;
    const animationInTimeoutId = setTimeout(() => {
      wordNodeRef.current.classList.add(styles["pause"]);
      animationOutTimeoutId = setTimeout(() => {
        wordNodeRef.current.classList.remove(styles["pause"]);
        wordNodeRef.current.style.animationName = styles[
          `text-slide-${direction === "down" ? "up" : "down"}-keyframes`
        ];
        animationEndTimeoutId = setTimeout(() => {
          setCurrentTextIndex(
            (currentTextIndex + 1) % texts.length
          );
        }, transitionDurationMs);
      }, totalAnimationDuration - (transitionDurationMs * 2));
    }, transitionDurationMs);
    return () => {
      clearTimeout(animationInTimeoutId);
      clearTimeout(animationOutTimeoutId);
      clearTimeout(animationEndTimeoutId);
    };
  }, [
    texts.length, 
    currentTextIndex, 
    direction, 
    totalAnimationDuration,
  ]);

  useEffect(() => {
    setCurrentTextIndex(0);
  }, [
    texts,
    visibleDuration,
    direction
  ]);

  return (
    <span 
      className={styles["vertical-text-slider"]}
      style={{
        "--sliding-animation-duration": `${transitionDurationMs}ms`
      }}
    >
      <span
        ref={wordNodeRef}
        key={`word-${currentTextIndex}`}
        className={[
          styles["text"],
          styles[wordDirectionClassName]
        ].join(" ")}
      >
        {texts[currentTextIndex]}
      </span>
    </span>
  );
};

export default memo(
  VerticalTextSlider,
  (prevProps, nextProps) => {
    const { texts: prevTexts, ...restPrevProps } = prevProps;
    const { texts: nextTexts, ...restNextProps } = nextProps;
    const prevKeys = Object.keys(restPrevProps);
    const nextKeys = Object.keys(restNextProps);
    const areRestEqual = (
      prevKeys.length === nextKeys.length &&
      prevKeys.every(prop => (
        prevProps[prop] === nextProps[prop]
      ))
    );
    if(
      Array.isArray(prevTexts) && 
      Array.isArray(nextTexts)
    ) {
      return (
        areRestEqual && 
        prevTexts.every((text, index) => (
          text === nextTexts[index]
        ))
      );
    }
    return areRestEqual;
  },
);
