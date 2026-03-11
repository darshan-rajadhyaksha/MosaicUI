import { memo, useMemo } from "react";
import styles from "./rolling-letters-animation.module.css";

const RollingLettersAnimation = (props) => {
  const {
    word,
    letterBlockSize = 16,
    duration = 2000,
    className,
    style,
    letterClassName,
    letterStyle,
    ...restProps
  } = props;

  const _duration = Math.max(100, duration);

  const upperCaseLetterSet = useMemo(() => (
    Array.from({
      length: 26,
    }).map((_, i) => (
      String.fromCharCode(65 + i)
    ))
  ), []);

  const lowerCaseLetterSet = useMemo(() => (
    Array.from({
      length: 26,
    }).map((_, i) => (
      String.fromCharCode(97 + i)
    ))
  ), []);

  const getRandomSeries = (exceptLetter) => {
    const isUpperCase = exceptLetter === exceptLetter.toUpperCase();
    const letterSet = isUpperCase ? upperCaseLetterSet : lowerCaseLetterSet;
    const lettersExceptGivenLetter = letterSet.filter(l => l !== exceptLetter);
    const shuffledLetterSet = lettersExceptGivenLetter.sort(() => Math.random() - Math.random());
    return shuffledLetterSet;
  };

  return (
    <span
      {...restProps}
      className={[
        className,
        styles["rolling-letters-animation"],
      ].join(" ")}
      style={{
        ...style,
        "--animation-duration": `${_duration}ms`,
        "--letter-block-size": `${letterBlockSize}px`,
      }}
    >
      {[...word].map((letter, letterIndex) => {
        const series = getRandomSeries(letter);
        const isReverse = (letterIndex % 2) === 0;
        if (isReverse) {
          series.unshift(letter);
        } else {
          series.push(letter);
        }
        return (
          <span
            aria-hidden={true}
            key={`letter-column-${letter}-${letterIndex}`}
            className={styles["letters-wrapper"]}
            style={{
              "--total-rolling-letters": `${series.length - 1}`,
            }}
          >
            {series.map((l, i) => (
              <span
                aria-hidden={true}
                key={`letter-block-${l}-${i}`}
                className={[
                  letterClassName,
                  styles["letter"],
                ].join(" ")}
                style={letterStyle}
              >
                {l}
              </span>
            ))}
          </span>
        )
      })}
      <span
        className={styles["sr-only"]}
      >
        {word}
      </span>
    </span>
  );
};

export default memo(RollingLettersAnimation);