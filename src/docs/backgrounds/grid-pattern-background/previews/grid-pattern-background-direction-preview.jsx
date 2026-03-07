import { useState } from "react";
import GridPatternBackground from "@/components/backgrounds/grid-pattern-background/grid-pattern-background";

const GridPatternBackgroundDirectionPreview = () => {
  const directions = ["up", "down", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"];

  const [direction, setDirection] = useState("down");

  return (
    <GridPatternBackground
      direction={direction}
      backgroundColor="#040c1a"
      gridColor="#3c4d55"
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
  border: "1px solid #fff",
  borderRadius: "4px",
  background: "transparent",
  font: "inherit",
  color: "#fff",
  textTransform: "uppercase",
};
const activeButtonStyles = {
  background: "#fff",
  color: "#111",
};

export default GridPatternBackgroundDirectionPreview;