import { memo, useEffect, useState } from "react";
import { motion, useAnimate, type AnimationPlaybackControlsWithThen } from "motion/react";
import cn from "@/utils/cn";

export type VerticalTextSliderProps = {
  texts: string[];
  direction?: "up" | "down";
  yOffset?: number;
  visibleDuration?: number;
  className?: string;
} & React.ComponentProps<"span">;

const delay = (timeMs: number) => (
  new Promise(resolve => setTimeout(resolve, timeMs * 1000))
);

const VerticalTextSlider = ({
  texts,
  direction = "up",
  yOffset = 20,
  visibleDuration = 2,
  className,
  ...restProps
}: VerticalTextSliderProps) => {
  const textsLength = texts.length;

  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    let inAnimation: AnimationPlaybackControlsWithThen | null  = null;
    let outAnimation: AnimationPlaybackControlsWithThen | null = null;
    let cancelled = false;
    (async () => {
      inAnimation = animate(
        ".text",
        {
          y: [
            direction === "up" ? yOffset : -yOffset,
            0
          ],
          opacity: [0, 1],
        },
        {
          ease: "easeInOut",
          duration: 0.2,
        }
      );
      if(cancelled) return;
      await inAnimation;
      if(cancelled) return;
      await delay(visibleDuration);
      if(cancelled) return;
      outAnimation = animate(
        ".text",
        {
          y: direction === "up" ? -yOffset : yOffset,
          opacity: [1, 0],
        },
        {
          ease: "easeInOut",
          duration: 0.2,
        }
      )
      await outAnimation;
      if(cancelled) return;
      setActiveTextIndex((activeTextIndex + 1) % textsLength);
    })();
    return () => {
      cancelled = true;
      inAnimation?.stop();
      outAnimation?.stop();
    };
  }, [activeTextIndex, textsLength, yOffset]);

  return (
    <span
      {...restProps}
      ref={scope}
      className={cn("inline-block overflow-y-hidden", className)}
    >
      <motion.span
        className="text inline-block"
      >
        {texts[activeTextIndex]}
      </motion.span>
    </span>
  );
};

export default memo(VerticalTextSlider);