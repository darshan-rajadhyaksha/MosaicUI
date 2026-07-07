import { memo, useEffect, useMemo, useState, Fragment } from "react";
import cn from "@/utils/cn";

export type DecryptingTextAnimationProps = {
  text: string;
  speed?: number;
  charset?: string;
  className?: string;
} & React.ComponentProps<"span">;

const random = (n: number = 1) => {
  return Math.floor(Math.random() * n);
};

const DecryptingTextAnimation = (
  props: DecryptingTextAnimationProps
) => {
  const {
    text,
    speed = 50,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-+?",
    className,
    ...restProps
  } = props;

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
  }, [shuffledCharset, speed]);

  if (currentText !== text) {
    setCurrentText(text);
    setTextMapping(getTextMappings());
  }

  return (
    <span
      {...restProps}
      className={cn("relative", className)}
    >
      {
        textMapping.map((word, wordIndex, arr) => (
          <Fragment key={`word-${wordIndex}`}>
            <span 
              aria-hidden={true}
              className="whitespace-nowrap break-keep"
            >
              {word.map((letter, letterIndex) => {
                return (
                  <span
                    key={`letter-${wordIndex}-${letterIndex}`}
                    aria-hidden={true}
                    className="inline-block font-[inherit]"
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
      <span className="sr-only">
        {currentText}
      </span>
    </span>
  );
};

export default memo(DecryptingTextAnimation);