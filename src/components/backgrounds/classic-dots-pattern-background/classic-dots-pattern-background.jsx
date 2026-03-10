import { memo, useState, useRef, useMemo, useCallback, useEffect, useLayoutEffect } from "react";
import styles from "./classic-dots-pattern-background.module.css";

const ClassicDotsPatternBackground = (props) => {
  const {
    children,
    variant = "standard",
    dotColor = "rgb(255, 255, 255)",
    dotScale = 1,
    gap = 4,
    // radial variant configuration props
    radialDirection = "in",
    radialScale = 0.25,
    // random variant configuration prop
    density = 0.5,
    // generic props
    className = "",
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

  const _dotColor = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = dotColor;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    canvas.remove();
    return (alpha) => {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
  }, [dotColor]);

  const _dotScale = useMemo(() => (
    Math.min(5, Math.max(0.1, dotScale))
  ), [dotScale]);

  const _gap = useMemo(() => (
    Math.max(1, gap)
  ), [gap]);

  const _radialScale = useMemo(() => (
    Math.min(1, Math.max(0.1, radialScale))
  ), [radialScale]);

  const _density = useMemo(() => (
    Math.min(1, Math.max(0.1, density))
  ), [density]);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const dist = useCallback((x1, y1, x2, y2) => {
    return Math.hypot(x2 - x1, y2 - y1);
  }, []);

  const map = useCallback((value, start1, stop1, start2, stop2) => {
    const min = Math.min(start2, stop2);
    const max = Math.max(start2, stop2);
    const newValue = start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    return Math.min(Math.max(newValue, min), max);
  }, []);

  const render = useCallback(() => {
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const dotContainerSize = (_gap * 2) + (_dotScale * 2);
    const diagonalDistance = Math.sqrt(width ** 2, height ** 2);

    for (let y = 0; y <= height; y += dotContainerSize) {
      for (let x = 0; x <= width; x += dotContainerSize) {
        if (variant === "random") {
          if (Math.random() > _density) {
            continue;
          }
        }
        ctx.beginPath();
        const posX = x + (dotContainerSize / 2);
        const posY = y + (dotContainerSize / 2);
        ctx.ellipse(posX, posY, _dotScale, _dotScale, 0, 0, 360, false);
        if (variant === "radial") {
          const distance = dist(posX, posY, (width / 2), (height / 2));
          let alpha = 1;
          if (radialDirection === "in") {
            alpha = map(distance, 0, (diagonalDistance / (10 * _radialScale)), 1, 0);
          } else {
            alpha = map(distance, diagonalDistance, (diagonalDistance / (2 / _radialScale)), 1, 0);
          }
          ctx.fillStyle = _dotColor(alpha);
        } else {
          ctx.fillStyle = dotColor;
        }
        ctx.fill();
        ctx.closePath();
      }
    }
  }, [
    ctx,
    map,
    dist,
    devicePixelRatio,
    width,
    height,
    canvasWidth,
    canvasHeight,
    variant,
    dotColor,
    radialDirection,
    _dotScale,
    _dotColor,
    _gap,
    _radialScale,
    _density,
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
        styles["classic-dots-pattern-background"],
      ].join(" ")}
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

export default memo(ClassicDotsPatternBackground);