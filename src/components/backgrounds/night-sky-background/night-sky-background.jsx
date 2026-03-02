import { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from "react";
import styles from "./night-sky-background.module.css";

const random = (n = 1) => {
  return Math.random() * n;
};

const NightSkyBackground = (props) => {
  const {
    density = 1,
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

  const Wrapper = wrapperTagName || "div";

  const spaceColor = "rgb(0, 0, 0)";

  const starsCount = useMemo(() => (
    Math.min(Math.max(100, 1000 * density), 10000)
  ), [density]);

  const containerRef = useRef();
  const canvasRef = useRef(null);
  const rafId = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const stars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < starsCount; i++) {
      stars.push({
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
      });
    }
    return stars;
  }, [starsCount, width, height]);

  const render = useCallback(() => {
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, width, height);
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
  }, [ctx, width, height, stars]);

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
    }
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
      {...rest}
      ref={containerRef}
      className={[
        className,
        styles["night-sky-background"]
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
  );
};

export default NightSkyBackground;