import { useState } from "react";
import WavyDotsBackground from "@/components/backgrounds/wavy-dots-background/wavy-dots-background";

const WavyDotsBackgroundDotScalePreview = () => {
  const [dotScale, setDotScale] = useState(1);

  const handleDotScaleChange = (e) => {
    setDotScale(parseFloat(e.target.value));
  };

  return (
    <WavyDotsBackground
      dotScale={dotScale}
      style={backgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label htmlFor="wavy-dots-scale-input">
        Dot Scale: {dotScale}
      </label>
      <input
        type="range"
        min="0.1"
        max="5"
        step="0.1"
        id="wavy-dots-scale-input"
        value={dotScale}
        onChange={handleDotScaleChange}
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

export default WavyDotsBackgroundDotScalePreview;