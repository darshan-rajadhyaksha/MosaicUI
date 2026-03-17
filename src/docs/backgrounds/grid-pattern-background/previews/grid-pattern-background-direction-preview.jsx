import { useState } from "react";
import GridPatternBackground from "@/components/backgrounds/grid-pattern-background/grid-pattern-background";

const GridPatternBackgroundDirectionPreview = () => {
  const directions = ["up", "down", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"];

  const [direction, setDirection] = useState("down");

  return (
    <GridPatternBackground
      direction={direction}
      gridColor="rgba(162,201,229,0.5)"
      style={gridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      {directions.map(dir => (
        <button
          key={dir}
          onClick={() => setDirection(dir)}
          style={{
            ...buttomStyles,
            ...(dir === direction ? activeButtonStyles : null),
          }}
        >
          {dir}
        </button>
      ))}
    </GridPatternBackground>
  );
};

const gridBackgroundStyles = {
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
  cursor: "pointer",
};
const activeButtonStyles = {
  background: "rgba(162,201,229,1)",
  color: "#111",
};

export default GridPatternBackgroundDirectionPreview;