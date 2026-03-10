import { memo, useState, useRef, useMemo, useCallback, useEffect, useLayoutEffect } from "react";
import styles from "./dot-grid-gradient-background.module.css";

const DotGridGradientBackground = (props) => {
  const {
    children,
    backgroundColor = "rgba(0, 0, 0, 1)",
    dotColor = "rgba(250, 250, 250, 1)",
    dotScale = 0.5,
    direction = "down",
    decay = 0.5,
    className = "",
    style = null,
    wrapperTagName = "div",
    wrapperProps = {},
    ...restProps
  } = props;

  const {
    className: wrapperClassName = "",
    ...restWrapperProps
  } = wrapperProps;

  const Wrapper = wrapperTagName || "div";

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { devicePixelRatio, canvasWidth, canvasHeight } = useMemo(() => {
    const devicePixelRatio = globalThis.devicePixelRatio || 1;
    return {
      devicePixelRatio,
      canvasWidth: width * devicePixelRatio,
      canvasHeight: height * devicePixelRatio,
    };
  }, [width, height]);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const render = useCallback(() => {
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const dotSize = 5 + (10 * dotScale);
    const k = (1 + (decay * 15)) / (height / dotSize);
    const offset = dotSize / 2;

    const drawDot = (x, y, i, minDotRadius = 0.5) => {
      const posX = x + offset;
      const posY = y + offset;
      const radius = (dotSize / 1.85) - (i * k);
      ctx.beginPath();
      ctx.arc(posX, posY, Math.max(minDotRadius, radius), 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
      ctx.closePath();
    };

    if (["up", "down"].includes(direction)) {
      for (let x = 0; x <= width; x += dotSize) {
        if (direction === "up") {
          for (let y = height; y >= -dotSize; y -= dotSize) {
            drawDot(x, y, (height / dotSize) - (y / dotSize));
          }
        } else {
          for (let y = 0; y <= height; y += dotSize) {
            drawDot(x, y, y / dotSize);
          }
        }
      }
    } else if (["left", "right"].includes(direction)) {
      for (let y = 0; y <= height; y += dotSize) {
        if (direction === "left") {
          for (let x = width; x >= -dotSize; x -= dotSize) {
            drawDot(x, y, (width / dotSize) - (x / dotSize));
          }
        } else {
          for (let x = 0; x <= width; x += dotSize) {
            drawDot(x, y, x / dotSize);
          }
        }
      }
    }
  }, [
    ctx,
    devicePixelRatio,
    width,
    height,
    canvasWidth,
    canvasHeight,
    backgroundColor,
    dotScale,
    dotColor,
    direction,
    decay,
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
  }, [mounted, render]);

  return (
    <div
      {...restProps}
      ref={containerRef}
      className={[
        className,
        styles["dot-grid-gradient-background"],
      ].join(" ")}
      style={{
        ...style,
        "--background-color": backgroundColor,
      }}
    >
      <canvas
        aria-hidden={true}
        width={canvasWidth}
        height={canvasHeight}
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

export default memo(DotGridGradientBackground);