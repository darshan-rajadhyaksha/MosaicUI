import { memo, useCallback, useMemo, useState, type ComponentType } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import cn from "@/utils/cn";

export type ArcCardsProps<T> = {
  items: T[];
  CardComponent: ComponentType<{ item: T }>;
  xOffset?: number;
  rotateOffset?: number;
  scaleOffset?: number;
  blurOffset?: number;
} & HTMLMotionProps<"div">;

const ArcCards = <T,>(
  props: ArcCardsProps<T>,
) => {
  const {
    items = [],
    CardComponent,
    xOffset = 50,
    rotateOffset = 20,
    scaleOffset = 0.125,
    blurOffset = 0.5,
    className,
    ...restProps
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  const center = useMemo(() => (
    Math.floor(items.length / 2)
  ), [items.length]);

  const cardProps = (
    index: number,
  ): HTMLMotionProps<"div"> => {
    const position = index - center;
    return {
      animate: {
        x: isHovered ? xOffset * position : 0,
        rotate: isHovered ? rotateOffset * position : 0,
        scale: isHovered ? 1.05 - (Math.abs(position) * scaleOffset) : 1,
        filter: `blur(${isHovered ? 0 : blurOffset * Math.abs(position)}px)`,
      },
      style: {
        zIndex: items.length - Math.abs(position),
      },
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5,
      },
    }
  };

  const hoverStartHandler = useCallback(() => {
    setIsHovered(true);
  }, []);

  const hoverEndHandler = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  return (
    <motion.div
      {...restProps}
      className={cn(
        "relative",
        className,
      )}
      onHoverStart={hoverStartHandler}
      onHoverEnd={hoverEndHandler}
    >
      {items.map((item, itemIndex) => (
        <motion.div
          key={`item-${itemIndex}`}
          className={cn(
            "absolute inset-0 rounded-[inherit] overflow-hidden",
            "[transform-origin:50%_bottom]",
          )}
          {...cardProps(itemIndex)}
        >
          <CardComponent
            item={item}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default memo(ArcCards) as typeof ArcCards;