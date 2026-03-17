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
      gridColor="rgba(162,201,229,0.5)"
      style={gridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label
        htmlFor="grid-pattern-background-speed-input"
        style={labelStyles}
      >
        Speed: {speed}
      </label>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        id="grid-pattern-background-speed-input"
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
  padding: "2px 4px",
  background: "#111",
  color: "#fff",
  borderRadius: "4px",
};

export default GridPatternBackgroundSpeedPreview;