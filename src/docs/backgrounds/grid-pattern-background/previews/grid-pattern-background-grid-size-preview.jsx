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
      gridColor="rgba(162,201,229,0.5)"
      style={gridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label
        htmlFor="grid-pattern-background-grid-size-input"
        style={labelStyles}
      >
        Grid Size: {gridSize}
      </label>
      <input
        type="range"
        min="10"
        max="100"
        step="1"
        id="grid-pattern-background-grid-size-input"
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
  padding: "2px 4px",
  background: "#111",
  color: "#fff",
  borderRadius: "4px",
};

export default GridPatternBackgroundGridSizePreview;