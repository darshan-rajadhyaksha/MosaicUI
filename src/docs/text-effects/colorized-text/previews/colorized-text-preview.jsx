import ColorizedText from "@/components/text-effects/colorized-text/colorized-text";

/* keep text on center */
const wrapperStyles = {
  textAlign: "center",
  padding: "24px",
  textWrap: "balance",
};

const ColorizedTextPreview = () => {
  return (
    <div style={wrapperStyles}>
      <h1 style={{ fontSize: "4rem" }}>
        Be <ColorizedText
          colors={[
            "#FF416C",
            "#FF4B2B",
            "#FFD200"
          ]}
          text="Radient"
        />
      </h1>
    </div>
  );
};

export default ColorizedTextPreview;