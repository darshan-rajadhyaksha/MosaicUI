import { useState } from "react";
import DotGridGradientBackground from "@/components/backgrounds/dot-grid-gradient-background/dot-grid-gradient-background";

const DotGridGradientBackgroundDecayPreview = () => {
   const [decay, setDecay] = useState(0.5);
  
  const handleDecayChange = (e) => {
    setDecay(parseFloat(e.target.value));
  };

  return (
    <DotGridGradientBackground
      decay={decay}
      style={dotGridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <span style={labelStyles}>
        Decay: {decay}
      </span>
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.1"
        value={decay}
        onChange={handleDecayChange}
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

export default DotGridGradientBackgroundDecayPreview;