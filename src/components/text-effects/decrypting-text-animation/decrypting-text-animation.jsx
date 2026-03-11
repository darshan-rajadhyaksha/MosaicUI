import { memo, useCallback, useEffect, useMemo, useState, Fragment } from "react";
import styles from "./decrypting-text-animation.module.css";

const random = (n = 1) => {
  return Math.floor(Math.random() * n);
};

const DecryptingTextAnimation = (props) => {
  const {
    text,
    speed = 50,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-+?",
    className,
    ...restProps
  } = props;

  const letterVariants = ["outlined", "filled"];

  const getRandomLetterVariant = useCallback(() => {
    return letterVariants[random(letterVariants.length)];
  }, []);

  const getTextMappings = () => {
    return (
      text
        ?.split(" ")
        .filter(Boolean)
        .map(word => (
          word
            .split("")
            .map((letter) => ({
              letter,
              variant: getRandomLetterVariant(),
              index: random(charset.length),
            }))
        ))
    );
  };

  const [currentText, setCurrentText] = useState(text);
  const [textMapping, setTextMapping] = useState(getTextMappings);

  const shuffledCharset = useMemo(() => {
    return charset.split("").sort(() => (
      random(5) - random(5)
    )).join("");
  }, [charset, text]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextMapping((prev) => {
        const areAllDone = prev.flat().every(entry => {
          return entry.letter === shuffledCharset[entry.index];
        });
        if(areAllDone) {
          clearInterval(intervalId);
        }
        return prev.map(word => (
          word.map(entry => {
            const isDone = entry.letter === shuffledCharset[entry.index];
            return {
              ...entry,
              variant: isDone ? "" : getRandomLetterVariant(),
              index: isDone ? (
                entry.index
              ) : (
                (entry.index + 1) % shuffledCharset.length
              )
            };
          })
        ))
      });
    }, speed);
    return () => {
      clearInterval(intervalId);
    };
  }, [shuffledCharset, speed, getRandomLetterVariant]);

  if (currentText !== text) {
    setCurrentText(text);
    setTextMapping(getTextMappings());
  }

  return (
    <span
      {...restProps}
      className={[
        className,
        styles["decrypting-text"],
      ].join(" ")}
    >
      {
        textMapping.map((word, wordIndex, arr) => (
          <Fragment key={`word-${wordIndex}`}>
            <span 
              aria-hidden={true}
              className={styles["word"]}
            >
              {word.map((letter, letterIndex) => {
                return (
                  <span
                    key={`letter-${wordIndex}-${letterIndex}`}
                    aria-hidden={true}
                    className={[
                      styles["letter"],
                      styles[`letter-${letter.variant}`]
                    ].join(" ")}
                  >
                    {shuffledCharset[letter.index]}
                  </span>
                );
              })}
            </span>
            {wordIndex !== (arr.length - 1) && (
              <span aria-hidden={true}>
                &nbsp;
              </span>
            )}
          </Fragment>
        ))
      }
      <span
        className={styles["sr-only"]}
      >
        {currentText}
      </span>
    </span>
  )
};

export default memo(DecryptingTextAnimation);