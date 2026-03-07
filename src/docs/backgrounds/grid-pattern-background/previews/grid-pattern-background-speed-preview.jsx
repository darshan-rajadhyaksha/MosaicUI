import { useState } from "react";
import GridPatternBackground from "@/components/backgrounds/grid-pattern-background/grid-pattern-background";

const GridPatternBackgroundSpeedPreview = () => {
  const [speed, setSpeed] = useState(1);

  const handleSpeedChange = (e) => {
    setSpeed(parseFloat(e.target.value));
  };

  return (
    <GridPatternBackground
      speed={speed}
      backgroundColor="#040c1a"
      gridColor="#3c4d55"
      style={gridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <span style={labelStyles}>
        Speed: {speed}
      </span>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={speed}
        onChange={handleSpeedChange}
      />
    </GridPatternBackground>
  );
};

const gridBackgroundStyles = {
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
  color: "#fff",
};

export default GridPatternBackgroundSpeedPreview;