import { useState } from "react";
import GridPatternBackground from "@/components/backgrounds/grid-pattern-background/grid-pattern-background";

const GridPatternBackgroundGridSizePreview = () => {
  const [gridSize, setGridSize] = useState(50);

  const handleSpeedChange = (e) => {
    setGridSize(parseInt(e.target.value));
  };

  return (
    <GridPatternBackground
      gridSize={gridSize}
      backgroundColor="#040c1a"
      gridColor="#3c4d55"
      style={gridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <span style={labelStyles}>
        Grid Size: {gridSize}
      </span>
      <input
        type="range"
        min="10"
        max="100"
        step="1"
        value={gridSize}
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

export default GridPatternBackgroundGridSizePreview;