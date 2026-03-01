import { memo, useEffect, useMemo, useState } from "react";
import styles from "./decrypting-text-animation.module.css";

const random = (n = 1) => {
  return Math.floor(Math.random() * n);
};

const DecryptingTextAnimation = (props) => {
  const {
    text,
    speed = 50,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-+?",
  } = props;

  const letterVariants = ["outlined", "filled"];

  const getRandomLetterVariant = () => {
    return letterVariants[random(letterVariants.length)];
  };

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
      const isDone = textMapping.flat().every(entry => {
        return entry.letter === shuffledCharset[entry.index];
      });
      if (isDone) {
        clearInterval(intervalId);
        return;
      }
    }, speed);
    return () => {
      clearInterval(intervalId);
    };
  }, [shuffledCharset, textMapping, speed]);

  if (currentText !== text) {
    setCurrentText(text);
    setTextMapping(getTextMappings());
  }

  return (
    <span
      aria-label={currentText}
      className={styles["decrypting-text"]}
    >
      {
        textMapping.map((word, wordIndex, arr) => (
          <>
            <span 
              aria-hidden={true}
              className={styles["word"]}
            >
              {word.map((letter) => {
                return (
                  <span
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
          </>
        ))
      }
    </span>
  )
};

export default memo(DecryptingTextAnimation);