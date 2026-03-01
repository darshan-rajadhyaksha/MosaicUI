import TextRevealAnimation from "@/components/text-effects/text-reveal-animation/text-reveal-animation";

/* keep text on center */
const wrapperStyles = {
  textAlign: "center",
  padding: "24px",
  textWrap: "balance",
};

const TextRevealAnimationPreview = () => {
  return (
    <div style={wrapperStyles}>
      <h2>
        Light shines brightest in  {" "}
        <TextRevealAnimation
          text="shadow"
        />    
      </h2>
    </div>
  );
};

export default TextRevealAnimationPreview;