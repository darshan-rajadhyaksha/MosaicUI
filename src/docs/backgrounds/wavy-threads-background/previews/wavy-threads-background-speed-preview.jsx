import { useState } from "react";
import WavyThreadsBackground from "@/components/backgrounds/wavy-threads-background/wavy-threads-background";

const WavyThreadsBackgroundSpeedPreview = () => {
  const [speed, setSpeed] = useState(0.5);

  const handleSpeedChange = (e) => {
    setSpeed(parseFloat(e.target.value));
  };

  return (
    <WavyThreadsBackground
      speed={speed}
      style={backgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label htmlFor="wavy-threads-speed-input">
        Speed: {speed}
      </label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        id="wavy-threads-speed-input"
        value={speed}
        onChange={handleSpeedChange}
      />
    </WavyThreadsBackground>
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

export default WavyThreadsBackgroundSpeedPreview;