import { memo, useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import cn from "@/utils/cn";

export type AuroraBorderProps = {
  colors?: string[];
  width?: number; 
  glowIntensity?: number;
  speed?: number;
  className?: string;
  children?: ReactNode;
} & React.ComponentProps<"div">;

const AuroraBorder = (
  props: AuroraBorderProps
) => {
  const {
    children,
    colors = ["rgba(127, 127, 127, 1)"],
    width = 1,
    speed = 0.5,
    glowIntensity = 0.5,
    className,
    style,
    ...restProps
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const _width = useMemo(() => (
    Math.max(0, width)
  ), [width]);

  const _speed = useMemo(() => (
    Math.min(1, Math.max(0, speed))
  ), [speed]);

  const _intensity = useMemo(() => (
    20 * Math.min(1, Math.max(0, glowIntensity))
  ), [glowIntensity]);

  const gradient = useMemo(() => (
    `conic-gradient(from var(--conic-angle), ${colors.join()})`
  ), [colors]);

  useLayoutEffect(() => {
    let rafId: ReturnType<typeof requestAnimationFrame> | null = null;
    let conicAngle = 0;
    const updateConicAngle = () => {
      conicAngle += (_speed * 2);
      conicAngle = conicAngle % 360;
      if (ref.current) {
        ref.current.style.setProperty("--conic-angle", `${conicAngle}deg`);
      }
      rafId = requestAnimationFrame(updateConicAngle);
    };
    rafId = requestAnimationFrame(updateConicAngle);
    return () => {
      if (!rafId) return;
      cancelAnimationFrame(rafId);
    };
  }, [_speed]);

  return (
    <div
      {...restProps}
      className={cn(
        "relative bg-neutal-900 dark:bg-gray-900 transition-[background] duration-100 ease-linear",
        "before:rounded-[inherit] before:content-[''] before:z-[-1] before:absolute before:[inset:calc(-1_*_var(--border-width))] before:[background:var(--gradient)]",
        "after:rounded-[inherit] after:content-[''] after:z-[-1] after:absolute after:inset-0 after:[filter:blur(var(--intensity))] after:[background:var(--gradient)]",
        className,
      )}
      ref={ref}
      style={{
        ...style,
        "--conic-angle-deg": "0deg",
        "--gradient": gradient,
        "--intensity": `${_intensity}px`,
        "--border-width": `${_width}px`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default memo(AuroraBorder);