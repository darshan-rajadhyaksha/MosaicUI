import { memo, useMemo } from "react";
import cn from "@/utils/cn";

export type SpotlightCardsContainerProps = (
  React.ComponentProps<"div">
);

export type SpotlightCardProps = {
  spotlightColor: string;
  spotlightSize?: number;
  spotlightBorderWidth?: number,
  wrapperProps: React.ComponentProps<"div">,
} & React.ComponentProps<"div">;

const spotlightCardClass = "spotlight-card";

const SpotlightCardsContainer = (
  props: SpotlightCardsContainerProps,
) => {
  const {
    children,
    className,
    ...restProps
  } = props;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const cards = currentTarget.querySelectorAll<HTMLDivElement>(`.${spotlightCardClass}`);
    cards.forEach((card) => {
      const { x, y } = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${clientX - x}px`);
      card.style.setProperty("--my", `${clientY - y}px`);
    });
  };

  return (
    <div
      {...restProps}
      className={cn(
        "group",
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export const SpotlightCard = memo((
  props: SpotlightCardProps
) => {
  const {
    children,
    spotlightColor = "rgb(127, 127, 127)",
    spotlightSize = 100,
    spotlightBorderWidth = 1,
    className,
    style,
    wrapperProps = {},
    ...restProps
  } = props;

  const {
    className: wrapperClassName = "",
    ...restWrapperProps
  } = wrapperProps;

  const _spotlightBorderWidth = useMemo(() => (
    Math.max(0, spotlightBorderWidth)
  ), [spotlightBorderWidth]);

  const _spotlightColor = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = spotlightColor;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    canvas.remove();
    return (alpha: number) => {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
  }, [spotlightColor]);

  return (
    <div
      {...restProps}
      className={cn(
        "relative",
        "[padding:var(--spotlight-border-width)]",
        "before:content-[''] before:absolute before:inset-0 before:z-[1] before:pointer-events-none before:opacity-[0] before:rounded-[inherit] before:transition-all before:duration-150 before:ease-in-out",
        "after:content-[''] after:absolute after:inset-0 after:z-[3] after:pointer-events-none after:opacity-[0] after:rounded-[inherit] after:transition-all before:duration-150 before:ease-in-out",
        "before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--mx)_var(--my),var(--spotlight-before-color),rgba(0,0,0,0))]",
        "after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--mx)_var(--my),var(--spotlight-after-color),rgba(0,0,0,0))]",
        "group-hover:before:opacity-[1]",
        "hover:after:opacity-100",
        className,
        spotlightCardClass,
      )}
      style={{
        ...style,
        "--spotlight-size": `${spotlightSize}px`,
        "--spotlight-before-color": _spotlightColor(0.8),
        "--spotlight-after-color": _spotlightColor(0.2),
        "--spotlight-border-width": `${_spotlightBorderWidth}px`,
      } as React.CSSProperties}
    >
      <div
        {...restWrapperProps}
        className={cn(
          "relative rounded-[inherit] z-[2] h-full",
          wrapperClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
});

export default memo(SpotlightCardsContainer);