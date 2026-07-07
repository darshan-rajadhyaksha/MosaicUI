import TextEmergeAnimation from "@/registry/text-effects/text-emerge-animation/text-emerge-animation";

const TextEmergeAnimationPreview = () => {
  return (
    <TextEmergeAnimation
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden px-5 max-w-xl"
      text="A subtle motion to guide your attention. Nothing loud, nothing distracting — just a quiet transition that makes the interface feel alive. 
            Good animation isn't decoration; it's a gentle cue that helps you understand where you are and what happens next."
      stagger={0.02}
    />
  )
};

export default TextEmergeAnimationPreview;