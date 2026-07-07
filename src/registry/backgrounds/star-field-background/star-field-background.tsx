import { useRef, useState, useEffect, useLayoutEffect, useMemo, memo, useCallback } from "react";
import cn from "@/utils/cn";

export type StarFieldBackgroundProps = {
  speed?: number;
  spaceColor?: string;
  starColor?: string;
  starTrailColor?: string;
  className?: string;
} & React.ComponentProps<"div">;

const random = (
  n1:number = 1,
  n2?:number
) => {
  if (n1 === undefined) return Math.random();
  if (n2 === undefined) return Math.random() * n1;
  return Math.random() * (n2 - n1) + n1;
};

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

class Star {
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  starColor: string;
  starTrailColor: string;
  speed: number;
  x!: number;
  y!: number;
  z!: number;
  r!: number;
  sz!: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    starColor: string,
    starTrailColor: string,
  ) {
    this.ctx = ctx;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.starColor = starColor;
    this.starTrailColor = starTrailColor;
    this.speed = 5;
    this.init();
  }

  init(){
    this.x = random(-this.canvasWidth / 2, this.canvasWidth / 2);
    this.y = random(-this.canvasHeight / 2, this.canvasHeight / 2);
    this.z = random(this.canvasWidth);
    this.sz = this.z;
    this.r = 1;
  };

  setCanvasSize(width: number, height: number){
    this.canvasWidth = width;
    this.canvasHeight = height;
  };

  setSpeed(speed: number){
    this.speed = speed;
  };

  update(){
    this.z -= this.speed;
    if (
      (this.speed >= 0 && this.z <= 0) ||
      (this.speed <= 0 && this.z >= (this.canvasWidth / 2))
    ) {
      this.init();
    }
  };

  show(){
    const x1 = map(this.x / this.z, -1, 1, -this.canvasWidth / 2, this.canvasWidth / 2);
    const y1 = map(this.y / this.z, -1, 1, -this.canvasHeight / 2, this.canvasHeight / 2);
    const x2 = map(this.x / this.sz, -1, 1, -this.canvasWidth / 2, this.canvasWidth / 2);
    const y2 = map(this.y / this.sz, -1, 1, -this.canvasHeight / 2, this.canvasHeight / 2);
    const radius = map(this.z, -this.canvasWidth / 2, this.canvasWidth / 2, 0.2, 0.8);
    this.ctx.beginPath();
    this.ctx.fillStyle = this.starColor;
    this.ctx.fill();
    this.ctx.ellipse(x1, y1, radius, radius, 0, 0, 360, false);
    this.ctx.strokeStyle = this.starTrailColor;
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
    this.ctx.closePath(); 
    this.sz = this.z;
  };
}

const StarFieldBackground = (
  props: StarFieldBackgroundProps
) => {
  const {
    speed = 5,
    spaceColor = "#000000",
    starColor = "#ffffff",
    starTrailColor = "#555555",
    className = "",
    ...restProps
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const starsCount = Math.min(500, width * height * 0.001);

  const ctx: CanvasRenderingContext2D | null | undefined = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const stars = useMemo(() => (
    Array.from({ length: starsCount }, () => new Star(
      ctx as CanvasRenderingContext2D,
      starColor,
      starTrailColor,
    ))
  ), [ctx, starsCount, starColor, starTrailColor]);

  const render = useCallback(() => {
    if (!ctx) return;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    ctx.translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; i++) {
      stars[i].setSpeed(speed);
      stars[i].setCanvasSize(width, height);
      stars[i].update();
      stars[i].show();
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
    speed,
    spaceColor,
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
        className="w-full h-full scale-[1.15]"
      />
    </div>
  );
};

export default memo(StarFieldBackground);