import { createContext, useContext, useState, type ComponentProps, useCallback, memo, type CSSProperties } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import cn from "@/utils/cn";

export type TiltCarouselItem = {
  src: string;
  alt?: string;
};

export type TiltCarouselProps = {
  items: TiltCarouselItem[];
  imageProps?: HTMLMotionProps<"img">,
  imageWidth: number;
  imageHeight: number;
  xOffset?: number;
  yOffset?: number;
  zOffset?: number;
  scaleOffset?: number;
  rotateY?: number;
} & ComponentProps<"div">;

type TiltCarouselItemProps = {
  index: number;
  item: TiltCarouselItem;
  imageProps: TiltCarouselProps["imageProps"],
};

const TiltCarouselContext = createContext({
  currentIndex: 0,
  imageWidth: 0,
  xOffset: 50,
  yOffset: 0,
  zOffset: -10,
  scaleOffset: 0.05,
  rotateY: 50,
});

const TiltCarouselItem = (
  props: TiltCarouselItemProps,
) => {
  const {
    item,
    index = 0,
    imageProps = {},
  } = props;

  const { className } = imageProps;

  const {
    currentIndex,
    imageWidth,
    xOffset,
    yOffset,
    zOffset,
    scaleOffset,
    rotateY,
  } = useContext(TiltCarouselContext);

  const pos = index - currentIndex;
  const isPrevious = pos < 0;
  const isCurrent = pos === 0;

  const rotateYRad = rotateY * Math.PI / 180;
  const padding = (isPrevious ? -1 : 1) * (imageWidth * (1 - Math.cos(rotateYRad) / 2));

  const x = isCurrent ? 0 : xOffset * pos + padding;
  const y = isCurrent ? 0 : yOffset * Math.abs(pos);
  const z = isCurrent ? 0 : zOffset * Math.abs(pos);
  const rotateYVal = isCurrent ? 0 : rotateY * (isPrevious ? 1 : -1);
  const scale = isCurrent ? 1 : 1 - (scaleOffset * Math.abs(pos));

  return (
    <motion.img
      {...imageProps}
      src={item.src}
      alt={item.alt}
      className={cn(
        "absolute top-0 left-0 pointer-events-none",
        "[width:var(--image-width)] [height:var(--image-height)]",
        "[transform-style:preserve-3d] [transform-origin:50%_center]",
        className,
      )}
      initial={false}
      animate={{
        x,
        y,
        z,
        scale,
        rotateY: rotateYVal,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5,
      }}
    />
  );
};

const TiltCarousel = (
  props: TiltCarouselProps,
) => {
  const {
    items,
    imageWidth,
    imageHeight,
    imageProps,
    xOffset = 50,
    yOffset = 0,
    zOffset = -10,
    scaleOffset = 0.05,
    rotateY = 50,
    className,
    style,
    ...restProps
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalItems = items.length;

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
    imageWidth,
    xOffset,
    yOffset,
    zOffset,
    scaleOffset,
    rotateY,
  };

  return (
    <div
      className={cn(
        "[perspective:800px]",
        className,
      )}
      style={{
        ...style,
        "--image-width": `${imageWidth}px`,
        "--image-height": `${imageHeight}px`,
      } as CSSProperties}
      {...restProps}
    >
      <div
        className={cn(
          "relative mx-auto [transform-style:preserve-3d]",
          "[width:var(--image-width)] [height:var(--image-height)]",
        )}
      >
        <TiltCarouselContext.Provider value={value}>
          {items.map((item, itemIndex) => (
            <TiltCarouselItem
              key={`tilt-carousel-item-${itemIndex}`}
              index={itemIndex}
              imageProps={imageProps}
              item={item}
            />
          ))}
        </TiltCarouselContext.Provider>
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
            {items.map((_, index) => (
              <motion.button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "rounded-[50%] w-2 h-2 cursor-pointer", 
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

export default memo(TiltCarousel);