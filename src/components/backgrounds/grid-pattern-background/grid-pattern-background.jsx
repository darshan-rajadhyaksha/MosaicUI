import { memo, useCallback, useLayoutEffect, useEffect, useRef, useMemo, useState } from "react";
import styles from "./grid-pattern-background.module.css";

const GridPatternBackground = (props) => {
  const {
    children,
    className = "",
    backgroundColor = "rgba(0, 0, 0, 1)", 
    gridColor = "rgba(255, 255, 255, 0.5)",
    gridSize = 25,
    direction = "down",
    speed = 1,
    wrapperProps = {},
    wrapperTagName = "div",
    style = null,
    ...restProps
  } = props;

  const {
    className: wrapperClassName = "",
    ...restWrapperProps
  } = wrapperProps;

  const Wrapper = wrapperTagName || "div";

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rafId = useRef(null);
  const translate = useRef({ x: 0, y: 0 });

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const _size = Math.min(Math.max(10, gridSize), 100);
  const _speed = Math.min(Math.max(0, speed), 5);

  const render = useCallback(() => {
    switch(direction) {
      case "up":
        translate.current.y -= _speed;    
        break;
      case "down":
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
    ctx.clearRect(0, 0, width, height);
    for (let i = -_size; i <= (height + _size); i += _size) {
      ctx.beginPath();
      ctx.moveTo(0, i + translate.current.y);
      ctx.lineTo(width, i + translate.current.y);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();
    }
    for (let i = -_size; i <= (width + _size); i += _size) {
      ctx.beginPath();
      ctx.moveTo(i + translate.current.x, 0);
      ctx.lineTo(i + translate.current.x, height);
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();
    }
    if(_speed !== 0) {
      rafId.current = requestAnimationFrame(render);
    }
  }, [
    ctx,
    width,
    height,
    gridColor,
    direction,
    _size,
    _speed
  ]);

  useEffect(() => {
    const updateContainerDimensions = () => {
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
      cancelAnimationFrame(rafId.current);
    };
  }, [mounted, render]);

  return (
    <div
      {...restProps}
      ref={containerRef}
      className={[
        className,
        styles["grid-pattern-background"],
      ].join(" ")}
      style={{
        ...style,
        "--background-color": backgroundColor,
      }}
    >
      <canvas
        aria-hidden={true}
        width={width}
        height={height}
        ref={canvasRef}
      />
      <Wrapper
        {...restWrapperProps}
        className={[
          wrapperClassName,
          styles["wrapper"],
        ].join(" ")}
      >
        {children}
      </Wrapper>
    </div>
  );
};

export default memo(GridPatternBackground);
