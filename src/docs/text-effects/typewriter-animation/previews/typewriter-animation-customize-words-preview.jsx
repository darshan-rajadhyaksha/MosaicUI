import { useMemo } from "react";
import TypewriterAnimation from "@/components/text-effects/typewriter-animation/typewriter-animation";

const TypewriterAnimationCustomizeWordsPreview = () => {
  /**
   * Make sure to memoize the words prop value to avoid re-renders 
   * React recommendation - https://react.dev/reference/react/useMemo
   */
  const words = useMemo(() => ([
    { 
      text: "Hello", 
      speed: 500, 
      slotProps: { 
        style: { color: "#22d6d7" } 
      },
    },
    { 
      text: "World", 
      speed: 50, 
      slotProps: { 
        style: { color: "#de287d" } 
      },
    },
  ]), []);

  return (
    <h2>
      <TypewriterAnimation
        words={words}
      />
    </h2>
  )
};

export default TypewriterAnimationCustomizeWordsPreview;