import ShiningTextAnimation from "@/components/text-effects/shining-text-animation/shining-text-animation";

/* keep text on center */
const wrapperStyles = {
  textAlign: "center",
  padding: "24px",
  textWrap: "balance",
};

const ShiningTextAnimationPreview = () => {
  return (
    <div style={wrapperStyles}>
      <h2>
        <ShiningTextAnimation
          text="Let Your Ideas Shine Bright"
        />
      </h2>
    </div>
  )
};

export default ShiningTextAnimationPreview;