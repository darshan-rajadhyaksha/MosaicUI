import { useState } from "react";
import WavyThreadsBackground from "@/components/backgrounds/wavy-threads-background/wavy-threads-background";

const WavyThreadsBackgroundAmplitudePreview = () => {
  const [amplitude, setAmplitude] = useState(50);

  const handleAmplitudeChange = (e) => {
    setAmplitude(parseInt(e.target.value));
  };

  return (
    <WavyThreadsBackground
      amplitude={amplitude}
      style={backgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label htmlFor="wavy-threads-amplitude-input">
        Amplitude: {amplitude}
      </label>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        id="wavy-threads-amplitude-input"
        value={amplitude}
        onChange={handleAmplitudeChange}
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

export default WavyThreadsBackgroundAmplitudePreview;