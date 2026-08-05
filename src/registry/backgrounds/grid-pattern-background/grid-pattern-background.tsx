import { memo, useCallback, useLayoutEffect, useEffect, useRef, useMemo, useState, type ComponentProps } from "react";
import cn from "@/utils/cn";

export type GridPatternBackgroundProps = {
  strokeColor?: string;
  size?: number;
  speed?: number;
  direction?: (
    "top" | 
    "right" | 
    "bottom" | 
    "left" | 
    "top-left" | 
    "top-right" | 
    "bottom-left" | 
    "bottom-right"
  );
} & ComponentProps<"div">;

const GridPatternBackground = (
  props: GridPatternBackgroundProps,
) => {
  const {
    strokeColor = "rgba(127, 127, 127, 0.5)",
    size = 10,
    direction = "top",
    speed = 1,
    className = "",
    ...restProps
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafId = useRef<ReturnType<typeof requestAnimationFrame>>(null);
  const translate = useRef({ x: 0, y: 0 });

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

  const _size = Math.min(Math.max(10, size), 100);
  const _speed = Math.min(Math.max(0, speed), 5);

  const render = useCallback(() => {
    if (!ctx) return;
    switch(direction) {
      case "top":
        translate.current.y -= _speed;    
        break;
      case "bottom":
        translate.current.y += _speed;    
        break;
      case "left":
        translate.current.x -= _speed;    
        break;
      case "right":
        translate.current.x += _speed;    
        break;
      case "top-left":
        translate.current.x -= _speed;    
        translate.current.y -= _speed;
        break;
      case "top-right":
        translate.current.x += _speed;    
        translate.current.y -= _speed;
        break;
      case "bottom-left":
        translate.current.x -= _speed;    
        translate.current.y += _speed;
        break;
      case "bottom-right":
        translate.current.x += _speed;    
        translate.current.y += _speed;
        break;
    }
    translate.current.x %= _size;
    translate.current.y %= _size;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let i = -_size; i <= (height + _size); i += _size) {
      ctx.beginPath();
      ctx.moveTo(0, i + translate.current.y);
      ctx.lineTo(width, i + translate.current.y);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();
    }
    for (let i = -_size; i <= (width + _size); i += _size) {
      ctx.beginPath();
      ctx.moveTo(i + translate.current.x, 0);
      ctx.lineTo(i + translate.current.x, height);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();
    }
    if(_speed !== 0) {
      rafId.current = requestAnimationFrame(render);
    }
  }, [
    ctx,
    devicePixelRatio,
    width,
    height,
    canvasWidth,
    canvasHeight,
    strokeColor,
    direction,
    _size,
    _speed
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
      ref={containerRef}
      className={cn("absolute top-[0] left-[0] right-[0] bottom-[0] overflow-hidden", className)}
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

export default memo(GridPatternBackground);