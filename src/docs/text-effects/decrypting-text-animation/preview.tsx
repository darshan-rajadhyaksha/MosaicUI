import DecryptingTextAnimation from "@/registry/text-effects/decrypting-text-animation/decrypting-text-animation";

const DecryptingTextAnimationPreview = () => {
  return (
    <DecryptingTextAnimation
      className="text-gray-900 dark:text-gray-100 text-xl font-mono"
      text="Pure Awareness"
      speed={25}
    />
  );
};

export default DecryptingTextAnimationPreview;