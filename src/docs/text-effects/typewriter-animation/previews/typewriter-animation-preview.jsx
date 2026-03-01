import TypewriterAnimation from "@/components/text-effects/typewriter-animation/typewriter-animation";

const TypewriterAnimationPreview = () => {
  return (
    <h2>
      <TypewriterAnimation
        text="Typing the future, live."
        speed={75}
      />
    </h2>
  )
};

export default TypewriterAnimationPreview;