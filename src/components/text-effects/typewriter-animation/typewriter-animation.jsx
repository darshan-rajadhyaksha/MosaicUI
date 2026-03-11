import { memo, useEffect, useMemo, useState } from "react";
import styles from "./typewriter-animation.module.css";

const TypewriterAnimation = (props) => {
  const {
    text,
    words,
    hideCursor = false,
    blinkCursor = true,
    cursorVariant = "line",
    speed = 100,
    className,
    ...restProps
  } = props;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);

  const wordsMap = useMemo(() => {
    let wordsArr = null;
    if(Array.isArray(words)) {
      wordsArr = words;
    } else {
      wordsArr = text.split(" ").filter(Boolean);
    }
    return wordsArr
    .map((word, wordIndex, arr) => {
      const temp = [{
        ...(typeof word === "string" ? ({
          letters: word.split(""),
          speed,
        }) : ({
          letters: word.text.split(""),
          speed,
          ...word,
        }))
      }];
      if (wordIndex !== (arr.length - 1)) {
        temp.push({
          letters: [" "],
          speed,
        });
      }
      return temp;
    }).flat();
  }, [text, words, speed]);

  const { isLastWord, isLastLetter } = useMemo(() => {
    const letters = wordsMap[currentWordIndex].letters;
    const isLastWord = currentWordIndex === (wordsMap.length-1);
    const isLastLetter = currentLetterIndex === (letters.length-1);
    return {
      isLastWord,
      isLastLetter,
    };
  }, [wordsMap, currentWordIndex, currentLetterIndex]);

  useEffect(() => {
    const timeoutDuration = wordsMap[currentWordIndex].speed ?? speed;
    const timeout = setTimeout(() => {
      if (isLastWord && isLastLetter) {
        return;
      } else if (isLastLetter) {
        setCurrentWordIndex(currentWordIndex+ 1);
        setCurrentLetterIndex(0);
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    }, timeoutDuration);
    return () => {
      clearTimeout(timeout);
    };
  }, [
    wordsMap,
    currentWordIndex,
    currentLetterIndex,
    isLastWord,
    isLastLetter,
    speed,
  ]);

  useEffect(() => {
    setCurrentWordIndex(0);
    setCurrentLetterIndex(-1);
  }, [text, words, speed]);

  const isBlinkCursor = (
    blinkCursor && (
      isLastLetter === -1 ||
      (isLastWord && isLastLetter)
    )
  );

  const srOnlyText = useMemo(() => {
    if (Array.isArray(words)) {
      return words.map(word => word.text).join(" ");
    }
    return text;
  }, [text, words]);

  return (
    <span
      {...restProps}
      className={[
        className,
        styles["typewriter-animation"],
      ].join(" ")}
    >
      {wordsMap.map((word, wordIndex) => (
        <span 
          {...word.slotProps}
          key={`word-${wordIndex}`}
          aria-hidden={true}
          hidden={wordIndex > currentWordIndex}
        >
          {word.letters.map((letter, letterIndex) => (
            <span 
              key={`letter-${letterIndex}`}
              aria-hidden={true}
              className={styles["letter"]}
              hidden={(
                wordIndex === currentWordIndex && 
                letterIndex > currentLetterIndex
              )}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
      <span
        aria-hidden={true}
        className={[
          styles["cursor"],
          styles[cursorVariant],
          isBlinkCursor ? styles["blink"] : ""
        ].join(" ")}
        hidden={hideCursor}
      >
        {cursorVariant === "underscore" ? "_" : <>&nbsp;</>}
      </span>
      <span
        className={styles["sr-only"]}
      >
        {srOnlyText}
      </span>
    </span>
  );
};

export default memo(TypewriterAnimation);