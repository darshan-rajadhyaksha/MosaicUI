import { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from "react";
import cn from "@/utils/cn";

export type NightSkyBackgroundProps = {
  density?: number; 
  spaceColor?: string;
  className?: string;
} & React.ComponentProps<"div">;

const random = (n:number = 1) => {
  return Math.random() * n;
};

const NightSkyBackground = (
  props: NightSkyBackgroundProps
) => {
  const {
    density = 1,
    spaceColor = "rgb(0, 0, 0)",
    className,
    ...rest
  } = props;

  const starsCount = useMemo(() => (
    Math.min(Math.max(100, 1000 * density), 10000)
  ), [density]);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafId = useRef<ReturnType<typeof requestAnimationFrame>>(null);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { devicePixelRatio, canvasWidth, canvasHeight } = useMemo(() => {
    const devicePixelRatio = Math.max(1, globalThis.devicePixelRatio || 1);
    return {
      devicePixelRatio,
      canvasWidth: width * devicePixelRatio,
      canvasHeight: height * devicePixelRatio,
    };
  }, [width, height]);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const stars = useMemo(() => {
    return Array.from({ 
      length: starsCount,
    }).map(() => ({
      x: random(width),
      y: random(height),
      radius: random(),
      color: (
        random() < 0.8 ? [255, 255, 255] :  (
          [
            Math.floor(random(255)),
            Math.floor(random(255)),
            Math.floor(random(255)),
          ]
        )
      ),
      twinkingRate: random() * 0.01,
      opacity: random(),
      shouldTwinkle: random() < 0.5,
    }))
  }, [starsCount, width, height]);

  const render = useCallback(() => {
    if (!ctx) return;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    for (const star of stars) {
      let starOpacity = star.opacity;
      if (star.shouldTwinkle) {
        star.opacity = (star.opacity + star.twinkingRate) % 100;
        starOpacity = Math.cos(star.opacity);
      }
      ctx.beginPath();
      ctx.ellipse(
        star.x, 
        star.y, 
        star.radius, 
        star.radius, 
        0, 
        0, 
        360, 
        false
      );
      ctx.closePath();
      ctx.fillStyle = `rgba(${[...star.color, starOpacity].join(", ")})`;
      ctx.fill();
    }
    ctx.restore();
    rafId.current = requestAnimationFrame(render);
  }, [
    ctx,
    devicePixelRatio,
    width,
    height,
    canvasWidth,
    canvasHeight,
    stars,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateContainerDimensions = () => {
      if (!containerRef.current) return;
      const {
        width, 
        height,
      } = containerRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    };
    const resizeObserver = new ResizeObserver(updateContainerDimensions);
    resizeObserver.observe(containerRef.current);
    updateContainerDimensions();
    setMounted(true);
    return () => {
      resizeObserver.disconnect();
    }
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    render();
    return () => {
      if (!rafId.current) return;
      cancelAnimationFrame(rafId.current);
    };
  }, [mounted, render]);

  return (
    <div
      {...rest}
      ref={containerRef}
      className={cn("absolute top-[0] left-[0] right-[0] bottom-[0] overflow-hidden", className)}
    >
      <canvas
        aria-hidden={true}
        width={canvasWidth}
        height={canvasHeight}
        ref={canvasRef}
      />
    </div>
  );
};

export default NightSkyBackground;