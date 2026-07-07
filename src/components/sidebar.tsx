import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import sidebarConfig from "@/configs/sidebar";
import isActivePath from "@/utils/is-active-path";

const Sidebar = ({
  activePath = ""
}) => {
  const [open, setOpen] = useState(false);

  const sidebarEventHandler = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    document.documentElement.addEventListener(
      "sidebar-open",
      sidebarEventHandler
    );
    return () => {
      document.documentElement.removeEventListener(
        "sidebar-open",
        sidebarEventHandler
      );
    };
  }, [sidebarEventHandler]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="h-screen md:h-[calc(100%_-_32px)] w-[280px] top-0 left-0 md:top-[16px] md:left-[16px] bg-white dark:bg-neutral-950 fixed z-[102] rounded-md overflow-y-auto border border-zinc-300 dark:border-zinc-900"
            style={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: open ? 0 : -320,
              opacity: open ? 1 : 0,
            }}
            exit={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              ease: "circInOut",
              type: "tween",
              duration: 0.3
            }}
          >
            {sidebarConfig.map((group, groupIndex) => (
              <>
                <div
                  className="py-4"
                >
                  <span className="text-gray-800 dark:text-gray-200 px-3 block mb-2 font-semibold">
                    {group.label}
                  </span>
                  <ul>
                    {group.entries.map(entry => (
                      <li>
                        <a
                          href={entry.href}
                          className={`${isActivePath(activePath, entry.href) ? "text-blue-600 bg-blue-600/10 dark:text-blue-500 hover:text-blue-600 hover:dark:text-blue-500" : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}  block py-[4px] px-2 pl-4 cursor-pointer`}
                        >
                          {entry.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {groupIndex !== (sidebarConfig.length - 1) && (
                  <div className="h-[1px] bg-zinc-200 dark:bg-zinc-900"></div>
                )}
              </>
            ))}
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-[101] inset-[0] backdrop-blur-[5px]"
            onTap={() => setOpen(false)}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  )
};

export default Sidebar;