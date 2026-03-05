import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import styles from "./maze-pattern-background.module.css";

const MazePatternBackground = (props) => {
  const {
    backgroundColor = "#000000",
    mazeColor = "#6572e6",
    mazeSize = 20,
    children,
    className,
    wrapperProps = {},
    wrapperTagName = "div",
    ...rest
  } = props;

  const {
    className: wrapperClassName = "",
    ...restWrapperProps
  } = wrapperProps;

  const _mazeSize = Math.max(1, mazeSize);

  const Wrapper = wrapperTagName || "div";

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const render = useCallback(() => {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    for (let y = 0; y < height; y += _mazeSize) {
      for (let x = 0; x < width; x += _mazeSize) {
        ctx.beginPath();
        if (Math.random() < 0.5) {
          ctx.moveTo(x, y);
          ctx.lineTo(x + _mazeSize, y + _mazeSize);
        } else {
          ctx.moveTo(x + _mazeSize, y);
          ctx.lineTo(x, y + _mazeSize);
        }
        ctx.strokeStyle = mazeColor;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
      }
    }
    ctx.restore();
  }, [ctx, backgroundColor, mazeColor, width, height, _mazeSize]);

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
      {...rest}
      ref={containerRef}
      className={[
        className,
        styles["maze-pattern-background"]
      ].join(" ")}
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
          styles["wrapper"]
        ].join(" ")}
      >
        {children}
      </Wrapper>
    </div>
  )
};

export default memo(MazePatternBackground);