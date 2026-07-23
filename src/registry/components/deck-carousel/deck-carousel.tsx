import { Children, cloneElement, createContext, isValidElement, useContext, useState, type ReactElement, type ComponentProps, useCallback, memo } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import cn from "@/utils/cn";

export type DeckCarouselProps = {
  yOffset?: number;
  zOffset?: number;
  scaleOffset?: number;
  rotateXOffset?: number;
  blur?: number;
} & ComponentProps<"div">;

export type DeckCarouselItemProps = {
  index?: number;
} & HTMLMotionProps<"div">;

const DeckCarouselContext = createContext({
  totalItems: 0,
  currentIndex: 0,
  yOffset: -15,
  zOffset: -50,
  scaleOffset: 0.02,
  rotateXOffset: 2,
  blur: 5,
});

export const DeckCarouselItem = (
  props: DeckCarouselItemProps,
) => {
  const {
    children,
    className,
    style,
    index = 0,
    ...restProps
  } = props;

  const {
    currentIndex,
    totalItems,
    yOffset,
    zOffset,
    scaleOffset,
    rotateXOffset,
    blur,
  } = useContext(DeckCarouselContext);

  const pos = index - currentIndex;
  const isHidden = pos < 0;

  const opacity = isHidden ? 0 : 1;
  const y = isHidden ? 300 : pos * yOffset;
  const z = isHidden ? 100 : pos * zOffset;
  const filter = `blur(${isHidden ? blur : 0}px)`;
  const rotateX = isHidden ? 25 : pos * rotateXOffset;
  const scale = isHidden ? 1.25 : 1 - (pos * scaleOffset);

  return (
    <motion.div
      {...restProps}
      className={cn(
        "absolute inset-0 pointer-events-none",
        {
          "before:content-[''] before:z-[2] before:absolute before:inset-0 before:bg-black/20": pos > 0,
        },
        className,
      )}
      initial={false}
      style={{
        ...style,
        zIndex: totalItems - index,
      }}
      animate={{
        y,
        z,
        scale,
        rotateX,
        opacity,
        filter,
      }}
    >
      {children}
    </motion.div>
  );
};

const DeckCarousel = (
  props: DeckCarouselProps,
) => {
  const {
    children,
    className,
    yOffset = -15,
    zOffset = -50,
    scaleOffset = 0.02,
    rotateXOffset = 2,
    blur = 5,
    ...restProps
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalItems = Children.count(children);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => (
      Math.max(0, prev - 1)
    ));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (
      Math.min(totalItems - 1, prev + 1)
    ));
  }, [totalItems]);

  if (currentIndex > totalItems) {
    setCurrentIndex(totalItems - 1);
  }

  const value = {
    currentIndex,
    totalItems,
    yOffset,
    zOffset,
    scaleOffset,
    rotateXOffset,
    blur,
  };

  return (
    <div
      className={cn(
        "[perspective:1000px]",
        className,
      )}
      {...restProps}
    >
      <div
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        <DeckCarouselContext.Provider value={value}>
          {Children.map(children, (child, childIndex) => {
            if (!isValidElement(child)) {
              return child;
            }
            return cloneElement(
              child as ReactElement<DeckCarouselItemProps>, { 
                index: childIndex,
              },
            );
          })}
        </DeckCarouselContext.Provider>
      </div>
      <div className="w-full flex justify-center">
        <div 
          className={cn(
            "inline-flex justify-center items-center gap-2 mt-3 p-1.5 rounded-3xl",
            "bg-neutral-200/50 dark:bg-neutral-700/80",
          )}
        >
          <button 
            className={cn(
              "w-6 h-6 grid place-items-center rounded-[50%] cursor-pointer",
              "text-lg text-neutral-800 dark:text-white",
              "hover:bg-neutral-300/80 dark:hover:bg-neutral-800/80",
              "active:bg-neutral-300/50 dark:active:bg-neutral-800/50",
            )}
            onClick={handlePrevious}
          >
            <ArrowLeftIcon />
          </button>
          <div className="flex items-center h-full gap-1">
            {Array.from({ length: totalItems }).map((_, index) => (
              <motion.span 
                key={index}
                className={cn(
                  "rounded-[50%] w-2 h-2", 
                  "bg-neutral-400/80 dark:bg-neutral-500",
                  {
                    "w-4 rounded-lg bg-neutral-600 dark:bg-white": index === currentIndex,
                  }
                )}
              />
            ))}
          </div>
          <button
            className={cn(
              "w-6 h-6 grid place-items-center rounded-[50%] cursor-pointer",
              "text-lg text-neutral-800 dark:text-white",
              "hover:bg-neutral-300/80 dark:hover:bg-neutral-800/80",
              "active:bg-neutral-300/50 dark:active:bg-neutral-800/50",
            )}
            onClick={handleNext}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const ArrowLeftIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="m8.5 12.8l5.7 5.6c.4.4 1 .4 1.4 0s.4-1 0-1.4l-4.9-5l4.9-5c.4-.4.4-1 0-1.4c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6q0-.15 0 0" />
  </svg>
));

const ArrowRightIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47" />
  </svg>
));

export default memo(DeckCarousel);