import { Children, memo } from "react";
import { motion } from "motion/react";

export type CircularListProps = {
  radius?: number;
  duration?: number;
  offsetDegree?: number;
  rotationLock?: boolean;
  direction?: "clockwise" | "anti-clockwise";
  children?: React.PropsWithChildren;
  className?: string;
  style?: React.CSSProperties;
} & React.ComponentProps<"div">;

const CircularList = (
  props: CircularListProps,
) => {
  const {
    radius = 100,
    duration = 10,
    offsetDegree = 0,
    rotationLock = true,
    direction = "clockwise",
    children,
    className,
    style,
    ...restProps
  } = props;

  const childrenCount = Children.count(children);
  const _radius = Math.max(0, radius);
  const _duration = Math.min(Math.max(1, duration), 10 * 60);

  const getCoordinates = (
    angle: number,
    radius: number,
  ) => {
    const radians = +((Math.PI / 180) * angle).toPrecision(4);
    return {
      x: +((Math.cos(radians) * radius).toFixed(0)),
      y: +((Math.sin(radians) * radius).toFixed(0)),
    };
  };

  const variants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: 360,
    }
  };

  const isClockwise = direction === "clockwise";

  return (
    <div
      {...restProps}
      className={className}
      style={{
        ...style,
        width: `${_radius * 2}px`,
        height: `${_radius * 2}px`,
      }}
    >
      <motion.div
        className="relative w-full h-full border border-neutral-200 dark:border-neutral-700/50 rounded-[50%]"
        variants={variants}
        animate={isClockwise ? "start" : "end"}
        style={variants[isClockwise ? "end" : "start"]}
        transition={{
          ease: "linear",
          duration: _duration,
          repeat: Infinity,
        }}
      >
        {Children.map(children, (item, index) => {
          const angle = (Math.abs(offsetDegree) + (360 / childrenCount * index)) % 360;
          const { x, y } = getCoordinates(angle, _radius);
          return (
            <motion.span
              key={`circular-list-item-${index}`}
              className="absolute top-[50%] left-[50%]"
              animate={{
                transform: `
                  translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) 
                  rotate(${rotationLock ? (isClockwise ? 360 : 0) : angle}deg)
                `,
              }}
              style={{
                transform: `
                  translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) 
                  rotate(${rotationLock ? (isClockwise ? 0 : 360) : angle}deg)
                `,
              }}
              transition={{
                ease: "linear",
                duration: _duration,
                repeat: Infinity,
              }}
            >
              {item}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default memo(CircularList);