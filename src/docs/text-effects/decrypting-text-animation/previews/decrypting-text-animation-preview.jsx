import DecryptingTextAnimation from "@/components/text-effects/decrypting-text-animation/decrypting-text-animation";

/* keep text on center */
const wrapperStyles = {
  textAlign: "center",
  padding: "24px",
  textWrap: "balance",
};

const DecryptingTextAnimationPreview = () => {
  return (
    <div style={wrapperStyles}>
      <p style={{
        fontFamily: "monospace",
        fontSize: "1.5rem",
      }}>
        Beyond the encrypted noise lives {" "}
        <strong>
          <DecryptingTextAnimation
            text="Pure Awareness"
            speed={50}
          />
        </strong>
      </p>
    </div>
  );
};

export default DecryptingTextAnimationPreview;