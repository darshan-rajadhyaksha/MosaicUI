import { type ReactNode, type ReactElement, Children, cloneElement, isValidElement, createContext, memo, useCallback, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react";
import cn from "@/utils/cn";

export type FloatingActionMenuProps = {
  children?: ReactNode;
  radius?: number;
  gap?: number;
  actionButtonClassName?: string;
} & React.ComponentProps<"div">;

export type FloatingActionMenuItemProps = {
  icon: ReactNode;
  name: string;
  index?: number;
} & HTMLMotionProps<"button">;

type FloatingActionMenuContextValue = {
  showMenuItems: boolean;
  radius: number;
  gap: number;
};

const FloatingActionMenuContext  = (
  createContext<FloatingActionMenuContextValue>({
    showMenuItems: false,
    radius: 540,
    gap: 4.5,
  })
);

const degreeToRadian = (
  degree: number,
) => (
  (Math.PI / 180) * degree
);

const FloatingActionMenu = (
  props: FloatingActionMenuProps
) => {
  const {
    children,
    radius = 540,
    gap = 4.5,
    actionButtonClassName = "",
    ...restProps
  } = props;

  const [showMenuItems, setShowMenuItems] = useState(false);

  const handleToggleClick = useCallback(() => {
    setShowMenuItems(prev => !prev);
  }, []);

  const floatingActionMenuContextValue = (
    useMemo<FloatingActionMenuContextValue>(() => ({
      showMenuItems,
      radius,
      gap,
    }), [showMenuItems, radius, gap])
  );

  return (
    <div {...restProps}>
      <FloatingActionMenuContext.Provider 
        value={floatingActionMenuContextValue}
      >
        {Children.map(children, (child, childIndex) => {
          if (!isValidElement(child)) {
            return child;
          }
          return cloneElement(
            child as ReactElement<FloatingActionMenuItemProps>, { 
              index: childIndex
            },
          );
        })}
      </FloatingActionMenuContext.Provider>
      <motion.button
        className={cn(
          "w-[48px] h-[48px] grid place-items-center rounded-[50%]",
          "bg-gray-100 dark:bg-neutral-800",
          "shadow shadow-md cursor-pointer",
          actionButtonClassName,
        )}
        onTap={handleToggleClick}
        whileTap={{
          scale: 1.25
        }}
        animate={{
          rotate: showMenuItems ? 45 : 0,
        }}
      >
        <PlusIcon className="text-2xl text-neutral-900 dark:text-white" />
      </motion.button>
    </div>
  );
};

export const FloatingActionMenuItem = memo((
  props: FloatingActionMenuItemProps
) => {
  const {
    icon,
    name,
    index = 0,
    className,
    style,
    ...restProps
  } = props;

  const { showMenuItems, radius, gap } = useContext(FloatingActionMenuContext);

  const getMenuItemPosAndDeg = (index: number) => {
    const deg = index * gap;
    const angle = degreeToRadian(deg);
    const x = (radius * Math.cos(angle)) - radius;
    const y = (-radius * Math.sin(angle)) - 50;
    return {
      x,
      y,
      deg,
    };
  };

  const menuItemStyle = {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 0,
    filter: "blur(5px)",
  };

  const menuItemAnimate = (index: number) => {
    const { x, y, deg } = getMenuItemPosAndDeg(index);
    return {
      x,
      y,
      rotate: -deg,
      opacity: 1,
      filter: "blur(0px)",
    }
  };

  const menuItemExit = {
    ...menuItemStyle,
    transition: {
      duration: 0.15,
    },
  };

  return (
    <AnimatePresence>
      {showMenuItems && (
        <motion.button
          {...restProps}
          className={cn(
            "absolute flex items-center gap-2 py-1 px-4 rounded-2xl",
            "origin-left whitespace-nowrap cursor-pointer",
            "bg-neutral-50 dark:bg-zinc-900",
            "border border-neutral-200 dark:border-neutral-800",
            "text-neutral-900 dark:text-neutral-50",
            "shadow shadow-md",
            className,
          )}
          style={{
            ...style,
            ...menuItemStyle,
          }}
          animate={menuItemAnimate(index)}
          exit={menuItemExit}
          transition={{
            type: "tween",
            duration: 0.3,
            delay: 0.01 * index,
          }}
        >
          {icon}
          {name && (
            <span>{name}</span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
});

const PlusIcon = (
  props: React.ComponentProps<"svg">
) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14" />
  </svg>
);

export default memo(FloatingActionMenu);