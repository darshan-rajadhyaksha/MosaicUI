import { memo } from "react";
import cn from "@/utils/cn";
import styles from "./marquee.module.css";

export type MarqueeProps = {
  children: React.PropsWithChildren,
  axis?: "horizontal" | "vertical",
  pauseOnHover?: boolean,
  reverse?: boolean;
  duration?: number;
  repeat?: number;
  mask?: boolean;
  className?: string;
} & React.ComponentProps<"div">;

const Marquee = (
  props: MarqueeProps
) => {
  const {
    children,
    axis = "horizontal",
    pauseOnHover = true,
    reverse = false,
    duration = 30,
    repeat = 5,
    mask = true,
    className,
    style,
    ...restProps
  } = props;

  const _repeat = Math.max(1, repeat);
  const _duration = Math.max(1, duration);

  return (
    <div
      {...restProps}
      className={cn(
        "overflow-hidden",
        className, 
        {
          "[mask-image:linear-gradient(to_right,transparent,white_var(--mask-breakpoint),white_calc(100%-var(--mask-breakpoint)),transparent)]": mask && axis === "horizontal", 
          "[mask-image:linear-gradient(to_bottom,transparent,white_var(--mask-breakpoint),white_calc(100%-var(--mask-breakpoint)),transparent)]": mask && axis === "vertical",
        }
      )}
      style={{
        "--gap": "16px",
        "--mask-breakpoint": "20%",
        ...style,
        "--animation-duration": `${_duration}s`,
      } as React.CSSProperties}
    >
      <div 
        className={cn(
          "group flex w-max-content [gap:var(--gap)]", 
          {
            "[flex-direction:row]": axis === "horizontal",
            "[flex-direction:column]": axis === "vertical",
          },
        )}
      >
        {Array.from({
          length: _repeat,
        }).map((_, index) => (
          <div
            key={`marquee-block-${index}`}
            aria-hidden={index !== 0}
            className={cn(
              "flex",
              "[gap:var(--gap)]",
              "[animation-timing-function:linear]",
              "[animation-iteration-count:infinite]",
              "[animation-duration:var(--animation-duration)]",
              "group-hover:[animation-play-state:paused]",
              {
                "[flex-direction:row]": axis === "horizontal",
                "[flex-direction:column]": axis === "vertical",
                "[animation-direction:reverse]": reverse,
              }
            )}
            style={{
              animationName: styles[`marquee-list-${axis}-keyframes`],
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Marquee);