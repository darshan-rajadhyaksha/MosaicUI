import { useState } from "react";
import WavyDotsBackground from "@/components/backgrounds/wavy-dots-background/wavy-dots-background";

const WavyDotsBackgroundSpeedPreview = () => {
  const [speed, setSpeed] = useState(0.5);

  const handleSpeedChange = (e) => {
    setSpeed(parseFloat(e.target.value));
  };

  return (
    <WavyDotsBackground
      speed={speed}
      style={backgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label htmlFor="wavy-dots-speed-input">
        Speed: {speed}
      </label>
      <input
        type="range"
        min="0.1"
        max="0.9"
        step="0.1"
        id="wavy-dots-speed-input"
        value={speed}
        onChange={handleSpeedChange}
      />
    </WavyDotsBackground>
  );
};

const backgroundStyles = {
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

export default WavyDotsBackgroundSpeedPreview;