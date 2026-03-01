import TypewriterAnimation from "@/components/text-effects/typewriter-animation/typewriter-animation";

const TypewriterAnimationCursorsPreview = () => {
  const text = "Typing the future, live.";

  return (
    <div>
      <h2>
        <TypewriterAnimation
          text={text}
          cursorVariant="line"
        />
      </h2>
      <br />
      <h2>
        <TypewriterAnimation
          text={text}
          cursorVariant="block"
        />
      </h2>
      <br />
       <h2>
        <TypewriterAnimation
          text={text}
          cursorVariant="underscore"
        />
      </h2>
    </div>
  )
};

export default TypewriterAnimationCursorsPreview;