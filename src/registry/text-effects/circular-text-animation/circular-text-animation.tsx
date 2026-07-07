import { memo } from "react";
import cn from "@/utils/cn";

export type CircularTextProps = {
  text: string;
  radius: number;
  addTrailingSpace?: boolean;
  rotate?: boolean;
  pauseOnHover?: boolean;
  direction?: "clockwise" | "anti-clockwise";
  duration?: number;
  className?: string;
} & React.ComponentProps<"span">;

const CircularText = (props: CircularTextProps) => {
  const {
    text,
    radius,
    addTrailingSpace = true,
    rotate = true,
    pauseOnHover = true,
    direction = "clockwise",
    duration = 10,
    className = "",
    ...restProps
  } = props;

  const _text = text.trim() + (addTrailingSpace ? " " : "");
  const _radius = Math.max(0, radius);
  const _duration = Math.min(Math.max(0.1, duration), 60);

  const getCoordinates = (
    angle: number, 
    radius: number
  ) => {
    const radians = +((Math.PI / 180) * angle).toPrecision(4);
    return {
      x: +((Math.cos(radians) * radius).toFixed(0)),
      y: +((Math.sin(radians) * radius).toFixed(0)),
    };
  };

  return (
    <span
      {...restProps}
      className={cn(
        "relative",
        className,
        {
          "[animation:spin_2s_linear_infinite]": rotate,
          "hover:[animation-play-state:paused]": pauseOnHover,
        },
      )}
      style={{
        width: `${_radius * 2}px`,
        height: `${_radius * 2}px`,
        animationDuration: `${_duration}s`,
        animationDirection: direction === "clockwise" ? "normal" : "reverse",
      }}
    >
      {[..._text].map((letter, letterIndex) => {
        const angle = 360 / _text.length * letterIndex;
        const { x, y } = getCoordinates(angle, _radius);
        return (
          <span
            aria-hidden={true}
            key={`letter-${letter}-${letterIndex}`}
            className="absolute top-[50%] left-[50%]"
            style={{
              transform: `
                translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) 
                rotate(${angle}deg)
              `,
            }}
          >
            {letter === " " ? <>&nbsp;</> : letter}
          </span>
        );
      })}
      <span className="sr-only">
        {text}
      </span>
    </span>
  );
};

export default memo(CircularText);