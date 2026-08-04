import cn from "@/utils/cn";
import { memo, useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback, type ComponentProps } from "react";

export type WavingDotsBackgroundProps = {
  dotScale?: number;
  dotColor?: string;
  gap?: number;
  speed?: number;
  offset?: number;
} & ComponentProps<"div">;

const map = (
  value:number,
  start1:number,
  stop1:number,
  start2:number,
  stop2:number
): number => {
  const min = Math.min(start2, stop2);
  const max = Math.max(start2, stop2);
  const newValue = start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  return Math.min(Math.max(newValue, min), max);
};

class Dot {
  x: number;
  y: number;
  length: number;
  dirX: number;
  dirY: number;
  time: number;
  magScale: number;

  constructor(
    x: number,
    y: number,
    cx: number,
    cy: number,
    cd: number,
    waves: number,
  ) {
    const dx = cx - x;
    const dy = cy - y;
    this.x = x;
    this.y = y;
    this.length = Math.hypot(dx, dy);
    this.dirX = dx / this.length;
    this.dirY = dy / this.length;
    this.time = map(this.length, 0, cd, 0, (Math.PI * 2 * waves));
    this.magScale = map(this.length, 0, cd, 0.1, 0);
  }

  update(dt: number) {
    this.time += dt;
    this.time %= (Math.PI * 2);
  }

  getPosition() {
    const wave = (Math.sin(this.time) + 1) / 2;
    const offset = wave * this.magScale * this.length;
    return {
      x: this.x + this.dirX * offset,
      y: this.y + this.dirY * offset,
    };
  }

  draw(
    ctx: CanvasRenderingContext2D,
    radius: number,
    dotColor: string,
  ) {
    const p = this.getPosition();
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, (Math.PI * 2));
    ctx.fillStyle = dotColor;
    ctx.fill();
    ctx.closePath();
  }
}

const WavingDotsBackground = (
  props: WavingDotsBackgroundProps,
) => {
  const {
    children,
    dotScale = 0.5,
    dotColor = "rgba(127, 127, 127, 0.5)",
    gap = 5,
    speed = 0.5,
    offset = 100,
    className = "",
    ...restProps
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<ReturnType<typeof requestAnimationFrame>>(null);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ctx: CanvasRenderingContext2D | null | undefined = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const _dotRadius = useMemo(() => (
    2 * Math.min(Math.max(0.1, dotScale), 5)
  ), [dotScale]);

  const _gap = useMemo(() => (
    Math.max(5, gap)
  ), [gap]);

  const _speed = useMemo(() => (
    0.005 + (0.1 * Math.min(Math.max(0.1, speed), 0.9))
  ), [speed]);

  const { devicePixelRatio, canvasWidth, canvasHeight } = useMemo(() => {
    const devicePixelRatio = Math.max(1, globalThis.devicePixelRatio || 1);
    return {
      devicePixelRatio,
      canvasWidth: width * devicePixelRatio,
      canvasHeight: height * devicePixelRatio,
    };
  }, [width, height]);

  const dots = useMemo(() => {
    const dots = [];
    const wavesCount = 4;
    const cw = width / 2;
    const ch = height / 2;
    const cd = Math.hypot(width, height);
    const gapIncrement = _gap + (_dotRadius * 2);
    for (let y = -offset; y <= (height + offset); y += gapIncrement) {
      for (let x = -offset; x <= (width + offset); x += gapIncrement) {
        dots.push(new Dot(x, y, cw, ch, cd, wavesCount));
      }
    }
    return dots;
  }, [width, height, _gap, _dotRadius, offset]);

  const render = useCallback(() => {
    if (!ctx) return;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    dots.forEach(dot => {
      dot.update(_speed);
      dot.draw(ctx, _dotRadius, dotColor);
    });
    rafId.current = requestAnimationFrame(render);
  }, [
    ctx,
    devicePixelRatio,
    canvasWidth,
    canvasHeight,
    dots,
    _speed,
    _dotRadius,
    dotColor,
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
    };
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    render();
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [mounted, render]);

  return (
    <div 
      {...restProps}
      className={cn("absolute top-[0] left-[0] right-[0] bottom-[0] overflow-hidden", className)}
      ref={containerRef}
    >
      <canvas
        aria-hidden={true}
        width={canvasWidth}
        height={canvasHeight}
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );

};

export default memo(WavingDotsBackground);