import TextAnimation from "@/registry/text-effects/text-animation/text-animation";

const TextAnimationPreview = () => {
  return (
    <TextAnimation 
      className="text-gray-900 dark:text-gray-100 text-xl overflow-hidden"
      text="Transform static text into fluid animation"
      variant="slideRight"
    />
  )
};

export default TextAnimationPreview;