import TextAnimation from "@/components/text-effects/text-animation/text-animation";

const TextAnimationDelayPreview = () => {
  return (
    <TextAnimation
      text="Good things take time to appear"
      variant="slideDown"
      delay={5000}
    />
  );
};

export default TextAnimationDelayPreview;