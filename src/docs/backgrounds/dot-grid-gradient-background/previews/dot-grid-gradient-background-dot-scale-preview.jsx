import { useState } from "react";
import DotGridGradientBackground from "@/components/backgrounds/dot-grid-gradient-background/dot-grid-gradient-background";

const DotGridGradientBackgroundDotScalePreview = () => {
   const [dotScale, setDotScale] = useState(0.5);
  
  const handleDotScaleChange = (e) => {
    setDotScale(parseFloat(e.target.value));
  };

  return (
    <DotGridGradientBackground
      dotScale={dotScale}
      style={dotGridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <span style={labelStyles}>
        Dot Scale: {dotScale}
      </span>
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.1"
        value={dotScale}
        onChange={handleDotScaleChange}
      />
    </DotGridGradientBackground>
  )
};

const dotGridBackgroundStyles = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
};
const wrapperStyles = {
  display: "grid",
  placeItems: "center",
  gap: "8px",
};
const labelStyles = {
  padding: "2px",
  background: "#111",
  color: "#fff",
};

export default DotGridGradientBackgroundDotScalePreview;