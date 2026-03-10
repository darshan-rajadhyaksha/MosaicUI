import { useState } from "react";
import ClassicDotsPatternBackground from "@/components/backgrounds/classic-dots-pattern-background/classic-dots-pattern-background";

const ClassicDotsPatternBackgroundVariantsPreview = () => {
  const variants = ["standard", "radial", "random"];

  const [variant, setVariant] = useState("standard");
  
  return (
    <ClassicDotsPatternBackground
      variant={variant}
      dotColor="#7a80dd"
      style={classicDotPatternBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles
      }}
    >
      {variants.map(variantType => (
        <button
          key={variantType}
          onClick={() => setVariant(variantType)}
          style={{
            ...buttomStyles,
            ...(variantType === variant ? activeButtonStyles : null),
          }}
        >
          {variantType}
        </button>
      ))}
    </ClassicDotsPatternBackground>
  );
};

const classicDotPatternBackgroundStyles = {
  width: "100%",
  height: "100%",
  padding: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const wrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
};
const buttomStyles = {
  padding: "8px 16px",
  border: "1px solid var(--text-primary)",
  borderRadius: "4px",
  background: "var(--layer-tertiary)",
  font: "inherit",
  color: "var(--text-primary)",
  textTransform: "uppercase",
};
const activeButtonStyles = {
  background: "#a4a8e7",
  color: "#111",
};

export default ClassicDotsPatternBackgroundVariantsPreview;