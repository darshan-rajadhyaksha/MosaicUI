import { useState } from "react";
import WavyThreadsBackground from "@/components/backgrounds/wavy-threads-background/wavy-threads-background";

const WavyThreadsBackgroundThreadCountPreview = () => {
  const [threadCount, setThreadCount] = useState(10);

  const handleThreadCountChange = (e) => {
    setThreadCount(parseInt(e.target.value));
  };

  return (
    <WavyThreadsBackground
      threadCount={threadCount}
      style={backgroundStyles}
      wrapperProps = {{
        style: wrapperStyles,
      }}
    >
      <label htmlFor="wavy-threads-thread-count-input">
        Thread Count: {threadCount}
      </label>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        id="wavy-threads-thread-count-input"
        value={threadCount}
        onChange={handleThreadCountChange}
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

export default WavyThreadsBackgroundThreadCountPreview;