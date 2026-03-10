import { useState } from "react";
import ClassicDotsPatternBackground from "@/components/backgrounds/classic-dots-pattern-background/classic-dots-pattern-background";

 const customizations = [
  {
    variant: "standard",
    gap: 2,
  },
   {
    variant: "standard",
    dotScale: 5,
    gap: 16,
  },
  {
    variant: "radial",
    dotScale: 1,
    gap: 2,
  },
  {
    variant: "radial",
    dotScale: 4,
    gap: 2,
  },
  {
    variant: "radial",
    dotScale: 2,
    gap: 2,
    radialDirection: "out",
  },
  {
    variant: "radial",
    dotScale: 5,
    gap: 1,
    radialDirection: "out",
    radialScale: 0.65,
  },
  {
    variant: "random",
    gap: 2,
    density: 0.8,
  },
  {
    variant: "random",
    gap: 8,
  },
];

const ClassicDotsPatternBackgroundCustomizationsPreview = () => {
  const [custmomizationIndex, setCustmomizationIndex] = useState(0);
  
  return (
    <ClassicDotsPatternBackground
      {...customizations[custmomizationIndex]}
      dotColor="#7a80dd"
      style={classicDotPatternBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles
      }}
    >
      {customizations.map((_, index) => (
        <button
          key={`customize-${index}`}
          onClick={() => setCustmomizationIndex(index)}
          style={{
            ...buttomStyles,
            ...(index === custmomizationIndex ? activeButtonStyles : null),
          }}
        >
          Pattern {index+1}
        </button>
      ))}
    </ClassicDotsPatternBackground>
  );
};

const classicDotPatternBackgroundStyles = {
  width: "100%",
  height: "480px",
  padding: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const wrapperStyles = {
  display: "flex",
  maxWidth: "480px",
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

export default ClassicDotsPatternBackgroundCustomizationsPreview;