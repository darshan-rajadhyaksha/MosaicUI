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
      dotColor="rgba(162,201,229,0.8)"
      style={dotGridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label
        htmlFor="dot-grid-background-dot-scale-input"
        style={labelStyles}
      >
        Dot Scale: {dotScale}
      </label>
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.1"
        id="dot-grid-background-dot-scale-input"
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
  padding: "2px 4px",
  background: "#111",
  color: "#fff",
  borderRadius: "4px",
};

export default DotGridGradientBackgroundDotScalePreview;