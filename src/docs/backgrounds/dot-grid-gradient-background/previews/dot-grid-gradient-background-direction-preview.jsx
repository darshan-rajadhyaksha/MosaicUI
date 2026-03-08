import { useState } from "react";
import DotGridGradientBackground from "@/components/backgrounds/dot-grid-gradient-background/dot-grid-gradient-background";

const DotGridGradientBackgroundDirectionPreview = () => {
  const directions = ["up", "down", "left", "right"];  
  
  const [direction, setDirection] = useState("down");
  
  return (
    <DotGridGradientBackground
      direction={direction}
      style={dotGridBackgroundStyles}
      wrapperProps = {{
        style: wrapperStyles
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
    </DotGridGradientBackground>
  )
};

const dotGridBackgroundStyles = {
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

export default DotGridGradientBackgroundDirectionPreview;