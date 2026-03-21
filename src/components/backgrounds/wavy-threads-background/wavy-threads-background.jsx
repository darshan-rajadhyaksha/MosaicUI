import { memo, useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from "react";
import styles from "./wavy-threads-background.module.css";

const WavyThreadsBackground = (props) => {
  const {
    children,
    threadColor = "rgba(127, 127, 127, 0.5)",
    threadCount = 10,
    speed = 0.5,
    amplitude = 50,
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
  const rafId = useRef(null);
  const time = useRef(0);

  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ctx = useMemo(() => {
    return canvasRef.current?.getContext("2d");
  }, [canvasRef.current]);

  const { devicePixelRatio, canvasWidth, canvasHeight } = useMemo(() => {
    const devicePixelRatio = Math.max(1, globalThis.devicePixelRatio || 1);
    return {
      devicePixelRatio,
      canvasWidth: width * devicePixelRatio,
      canvasHeight: height * devicePixelRatio,
    };
  }, [width, height]);

  const noiseHashScale = 43758.5453123;

  const lerp = useCallback((a, b, t) => a + (b - a) * t, []);

  const fade = useCallback((t) => t * t * (3 - 2 * t), []);

  const hash = useCallback((x) => {
    const s = Math.sin(x * 127.1) * noiseHashScale;
    return s - Math.floor(s);
  }, [noiseHashScale]);

  const noise = useCallback((x) => {
    let i = Math.floor(x);
    let f = x - i;
    let a = hash(i);
    let b = hash(i + 1);
    return lerp(a, b, fade(f));
  }, [lerp, fade, hash]);

  const _threadCount = useMemo(() => (
    Math.max(1, Math.min(100, threadCount))
  ), [threadCount]);

  const _speed = useMemo(() => (
    Math.max(0, Math.min(1, speed))
  ), [speed]);

  const _amplitude = useMemo(() => (
    Math.max(0, Math.min(100, amplitude))
  ), [amplitude]);

  const threads = useMemo(() => (
    Array.from({
      length: _threadCount,
    }).map(() => ({
      xOffset: Math.random() * 1000,
      amplitude: 10 + Math.random() * (_amplitude - 10),
      speed: 0.01 + Math.random() * 0.03,
      frequency: 0.01 + Math.random() * 0.03,
      noiseScale: 0.002 + Math.random() * 0.006,
      noiseStrength: 20 + Math.random() * 50
    }))
  ), [_threadCount, _amplitude]);

  const render = useCallback(() => {
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const centerY = height / 2;

    ctx.shadowBlur = 2;
    ctx.shadowColor = threadColor;

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = threadColor;

    threads.forEach(thread => {
      ctx.beginPath();
      for (let x = 0; x <= width; x++) {
        const t = x / width;
        const envelope = Math.pow(Math.sin(Math.PI * t), 2);
        const distortion = noise(x * 0.003 + time.current * 0.01) * 2;
        const base = Math.sin(
          x * thread.frequency +
          time.current * thread.speed +
          thread.xOffset +
          distortion
        ) * thread.amplitude;
        const n = ((
          noise(x * thread.noiseScale + time.current * 0.02) * 0.7 +
          noise(x * thread.noiseScale * 3 + time.current * 0.04) * 0.3
        ) - 0.5) * thread.noiseStrength;
        const y = centerY + (base + n) * envelope;
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    });
    time.current += _speed;
    rafId.current = requestAnimationFrame(render);
  }, [
    ctx,
    devicePixelRatio,
    canvasWidth,
    canvasHeight,
    width,
    height,
    threads,
    threadColor,
    _speed,
    noise,
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
        styles["wavy-threads-background"],
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

export default memo(WavyThreadsBackground);