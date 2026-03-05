import { useRef, useState, useEffect, useLayoutEffect, useMemo, memo, useCallback } from "react";
import styles from "./star-field-background.module.css";

const random = (n1 = 1, n2) => {
  if (n1 === undefined) return Math.random();
  if (n2 === undefined) return Math.random() * n1;
  return Math.random() * (n2 - n1) + n1;
};

const map = (value, start1, stop1, start2, stop2) => {
  const min = Math.min(start2, stop2);
  const max = Math.max(start2, stop2);
  const newValue = start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  return Math.min(Math.max(newValue, min), max);
};

class Star {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.starColor = "#ffffff";
    this.starTrailColor = "#dddddd";
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

  setCanvasSize(width, height){
    this.canvasWidth = width;
    this.canvasHeight = height;
  };

  setSpeed(speed){
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

const StarFieldBackground = (props) => {
  const {
    speed = 5,
    className = "",
    wrapperProps = {},
    wrapperTagName = "div",
    children,
    ...rest
  } = props;

  const {
    className: wrapperClassName = "", 
    ...restWrapperProps
  } = wrapperProps;

  const Wrapper = wrapperTagName || "div";

  const spaceColor = "#000000";

  const canvasRef = useRef();
  const containerRef = useRef();
  const rafId = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const starsCount = Math.min(500, width * height * 0.001);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const stars = useMemo(() => (
    Array.from({ length: starsCount }, () => new Star(ctx))
  ), [ctx, starsCount]);

  const render = useCallback(() => {
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, width, height);
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
  }, [ctx, width, height, stars, speed, spaceColor]);

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
        styles["star-field"]
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
          styles["children-wrapper"]
        ].join(" ")}
      >
        {children}
      </Wrapper>
    </div>
  );
};

export default memo(StarFieldBackground);