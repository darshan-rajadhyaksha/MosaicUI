import cn from "@/utils/cn";
import { memo, useCallback, useState, type MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

export type SectionEntry = {
  id: string,
  name: string,
  className?: string;
};

export type SectionNavigatorProps = {
  sections: SectionEntry[],
  position?: "left" | "right" | "top" | "bottom",
  activeSectionId?: SectionEntry["id"],
  onSectionClick?: Function,
  className?: string;
  triggerButtonClassName?: string;
  sectionListClassName?: string;
  sectionListItemClassName?: string;
} & React.ComponentProps<"div">;

type SectionListProps = {
  onSectionEntryClick: Function,
  onClose: MouseEventHandler<HTMLDivElement | HTMLUListElement>,
} & Pick<SectionNavigatorProps, (
  "sections" | 
  "position" |
  "activeSectionId" |
  "sectionListClassName" |
  "sectionListItemClassName"
)>;

const positionClassConfig = {
  "right": "right-[16px] top-[50%] translate-y-[-50%]",
  "left": "left-[16px] top-[50%] translate-y-[-50%]",
  "top": "top-[16px] left-[50%] translate-x-[-50%]",
  "bottom": "bottom-[16px] left-[50%] translate-x-[-50%]",
};

const SectionNavigator = (
  props: SectionNavigatorProps,
) => {
  const {
    sections,
    position = "right",
    activeSectionId,
    onSectionClick,
    className,
    triggerButtonClassName,
    sectionListClassName,
    sectionListItemClassName,
    ...restProps
  } = props;

  const [showNavigator, setShowNavigator] = useState(false);

  const navigatorOpenHandler = useCallback(() => {
    setShowNavigator(true);
  }, []);

  const navigatorCloseHandler = useCallback(() => {
    setShowNavigator(false);
  }, []);

  const handleSectionEntryClick = (
    section: SectionEntry,
  ) => {
    setShowNavigator(false);
    onSectionClick?.(section);
  };

  return (
    <div
      {...restProps}
      className={cn(
        "fixed z-[10]",
        positionClassConfig[position],
        className,
      )}
    >
      {
        showNavigator ? (
          <SectionList 
            sections={sections}
            position={position}
            activeSectionId={activeSectionId}
            onSectionEntryClick={handleSectionEntryClick}
            onClose={navigatorCloseHandler}
            sectionListClassName={sectionListClassName}
          />
        ) : (
          <motion.button
            className={cn(
              "p-2 flex gap-[6px] rounded-md",
              {
                "flex-col": ["left", "right"].includes(position),
              },
              triggerButtonClassName,
            )}
            onMouseOver={navigatorOpenHandler}
            onFocus={navigatorOpenHandler}
            onTap={navigatorOpenHandler}
          >
            {sections.map((sectionEntry) => (
              <span
                key={sectionEntry.id}
                className={cn(
                  "bg-gray-900/25 dark:bg-gray-100/25 rounded-md",
                  {
                    "w-4 h-[2px]": ["left", "right"].includes(position),
                    "w-[2px] h-4": ["top", "bottom"].includes(position),
                    "bg-gray-900 dark:bg-gray-100": sectionEntry.id === activeSectionId,
                  }
                )}
              />
            ))}
          </motion.button>
        )
      }
    </div>
  );
};

const SectionList = memo((
  props: SectionListProps,
) => {
  const {
    sections,
    position = "right",
    sectionListClassName,
    sectionListItemClassName,
    activeSectionId,
    onSectionEntryClick,
    onClose,
  } = props;

  return createPortal(
    <>
      <div
        aria-hidden={true}
        className="fixed inset-0 z-9"
        onClick={onClose}
      />
      <motion.ul
        className={cn(
          "fixed z-10",
          "w-xs max-h-[400px]",
          "p-2 grid gap-1 overflow-y-auto rounded-xl",
          "bg-white dark:bg-neutral-700",
          "shadow shadow-md",
          positionClassConfig[position],
          sectionListClassName,
        )}
        onMouseLeave={onClose}
        style={{
          scale: 0.25,
          opacity: 0,
          transformOrigin: ({
            "left": "0% 50%",
            "right": "100% 50%",
            "top": "50% 0%",
            "bottom": "50% 100%",
          })[position]
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.8,
        }}
      >
        {sections.map((sectionEntry, sectionEntryIndex) => (
          <li 
            key={sectionEntry.id}
            className="truncate"
          >
            <motion.button
              className={cn(
                "py-[6px] px-2 w-full rounded-md",
                "text-neutral-800 dark:text-neutral-200 text-sm text-left truncate",
                "hover:bg-neutral-300/50 dark:hover:bg-neutral-800/50",
                "cursor-pointer",
                {
                  "bg-neutral-300 dark:bg-neutral-800": (
                    sectionEntry.id === activeSectionId
                  ),
                },
                sectionListItemClassName,
                sectionEntry.className,
              )}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              style={{
                opacity: 0,
                y: 20,
                filter: "blur(2px)",
              }}
              transition={{
                delay: 0.05 + (0.025 * (sectionEntryIndex)),
              }}
              title={sectionEntry.name}
              onTap={() => onSectionEntryClick(sectionEntry)}
            >
              {sectionEntry.name}
            </motion.button>
          </li>
        ))}
      </motion.ul>
    </>,
    document.body
  );
});

export default memo(SectionNavigator);