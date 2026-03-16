import { useState } from "react";
import WavyDotsBackground from "@/components/backgrounds/wavy-dots-background/wavy-dots-background";

const WavyDotsBackgroundGapPreview = () => {
  const [gap, setGap] = useState(10);

  const handleGapChange = (e) => {
    setGap(parseFloat(e.target.value));
  };

  return (
    <WavyDotsBackground
      gap={gap}
      style={backgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label htmlFor="wavy-dots-gap-input">
        Gap: {gap}
      </label>
      <input
        type="range"
        min="5"
        max="20"
        step="1"
        id="wavy-dots-gap-input"
        value={gap}
        onChange={handleGapChange}
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

export default WavyDotsBackgroundGapPreview;