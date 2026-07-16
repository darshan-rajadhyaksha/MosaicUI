import { memo, useMemo } from "react";
import { motion } from "motion/react";
import cn from "@/utils/cn";

export type RollingLettersAnimationProps = {
  text: string;
  duration?: number,
  blockWidth?: number;
  blockHeight: number;
  blockGap?: number;
  className?: string,
  style?: React.CSSProperties,
  blockClassName?: string,
  blockStyle?: React.CSSProperties,
} & React.ComponentProps<"span">;

const RollingLettersAnimation = (
  props: RollingLettersAnimationProps,
) => {
  const {
    text,
    blockWidth,
    blockHeight = 16,
    blockGap = 0,
    duration = 2,
    className,
    style,
    blockClassName,
    blockStyle,
    ...restProps
  } = props;

  const _duration = Math.max(0.1, duration);

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

  const getRandomSeries = (
    exceptLetter: string,
  ) => {
    const isUpperCase = exceptLetter === exceptLetter.toUpperCase();
    const letterSet = isUpperCase ? upperCaseLetterSet : lowerCaseLetterSet;
    const lettersExceptGivenLetter = letterSet.filter(l => l !== exceptLetter);
    const shuffledLetterSet = lettersExceptGivenLetter.sort(() => (
      Math.random() - Math.random()
    ));
    return shuffledLetterSet;
  };

  return (
    <span
      {...restProps}
      className={cn(
        "relative flex",
        "[gap:var(--block-gap)]",
        className,
      )}
      style={{
        ...style,
        "--block-height": `${blockHeight}px`,
        "--block-gap": `${blockGap}px`,
        ...(blockWidth && ({ "--block-width": `${blockWidth}px` })),
      } as React.CSSProperties}
    >
      {[...text].map((letter, letterIndex) => {
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
            key={`letter-window-${letter}-${letterIndex}`}
            className={cn(
              "inline-block overflow-hidden leading-[1]",
              "[width:var(--block-width,initial)]",
              "[height:var(--block-height)]",
            )}
            style={{
              "--total-rolling-letters": `${series.length - 1}`,
            } as React.CSSProperties}
          >
            <motion.span
              className="inline-block"
              style={{
                y: 0,
                marginTop: isReverse ? `${(series.length - 1) * -blockHeight}px` : 0, 
              }}
              animate={{
                y: (series.length - 1) * blockHeight * (isReverse ? 1 :  -1),
              }}
              transition={{
                ease: "easeInOut",
                duration: _duration,
              }}
            >
              {series.map((l, i) => (
                <span
                  aria-hidden={true}
                  key={`letter-block-${l}-${i}`}
                  className={cn(
                    "flex justify-center items-end overflow-hidden",
                    "[width:var(--block-width,initial)]",
                    "[height:var(--block-height)]",
                    blockClassName,
                  )}
                  style={blockStyle}
                >
                  {l === " " ? <>&nbsp;</> : l}
                </span>
              ))}
            </motion.span>
          </span>
        )
      })}
      <span className="sr-only">
        {text}
      </span>
    </span>
  );
};

export default memo(RollingLettersAnimation);