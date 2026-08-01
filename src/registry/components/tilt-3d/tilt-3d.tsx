import { createContext, memo, useCallback, useContext, useMemo, useRef, useState, type ComponentProps, type ComponentType, type MouseEventHandler } from "react";
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps, type HTMLElements } from "motion/react";
import cn from "@/utils/cn";

export type Tilt3DElementProps<T extends keyof HTMLElements> = {
  as?: keyof typeof motion<T>;
  z?: number;
} & HTMLMotionProps<T>; 

export type Tilt3DProps = {
  tiltX?: number;
  tiltY?: number;
  wrapperProps?: HTMLMotionProps<"div">,
} & ComponentProps<"div">;

const Tilt3DContext = createContext({
  isHovered: false,
});

export const Tilt3DElement = <T extends keyof HTMLElements,>(
  props: Tilt3DElementProps<T>,
) => {
  const {
    children,
    className,
    style,
    z = 0,
    as = "div",
    ...restProps
  } = props;

  const { isHovered } = useContext(Tilt3DContext);

  const Component = (motion[as]) as ComponentType<HTMLMotionProps<T>>;
  
  return (
    <Component
      {...restProps as HTMLMotionProps<T>}
      className={cn(
        "[transform-style:preserve-3d]",
        className,
      )}
      animate={{
        z: isHovered ? z: 0,
      }}
      style={{
        ...style,
        z: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
        mass: 0.5,
      }}
    >
      {children}
    </Component>
  )
};

const Tilt3D = (
  props: Tilt3DProps,
) => {
  const {
    children,
    className,
    tiltX = 25,
    tiltY = 25,
    wrapperProps = {},
    ...restProps
  } = props;

  const {
    className: wrapperClassName,
    style: wrapperStyle,
    ...restWrapperProps
  } = wrapperProps;

  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const elementSize = useRef({
    width: 0,
    height: 0,
  });

  const springConfig = {
    stiffness: 200,
    damping: 50,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(
      mouseY, 
      [0, elementSize.current.height / 2, elementSize.current.height],
      [tiltY, 0, -tiltY],
   ),
   springConfig,
  );

  const rotateY = useSpring(
    useTransform(
      mouseX, 
      [0, elementSize.current.width / 2, elementSize.current.width],
      [-tiltX, 0, tiltX],
   ),
   springConfig,
  );

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback((event) => {
    if (!ref.current) return;
    const {top, left, width, height} = ref.current.getBoundingClientRect();
    mouseX.set(event.pageX - left);
    mouseY.set(event.pageY - top);
    elementSize.current.width = width;
    elementSize.current.height = height;
  }, [isHovered]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const tilt3DContextValue = useMemo(() => ({
    isHovered
  }), [isHovered]);

  if (!isHovered) {
    rotateX.set(0);
    rotateY.set(0);
  }
  
  return (
    <Tilt3DContext.Provider value={tilt3DContextValue}>
      <div
        {...restProps}
        className={cn(
          "[perspective:800px]",
          className,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={ref}
      >
        <motion.div
          {...restWrapperProps}
          className={cn(
            "w-full h-full rounded-[inherit] [transform-style:preserve-3d]",
            wrapperClassName,
          )} 
          style={{
            ...wrapperStyle,
            rotateX,
            rotateY,
          }}
        >
          {children}
        </motion.div>
      </div>
    </Tilt3DContext.Provider>
  );
};

export default memo(Tilt3D);