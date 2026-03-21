import WavyThreadsBackground from "@/components/backgrounds/wavy-threads-background/wavy-threads-background";

const WavyThreadsBackgroundPreview = () => {
  return (
    <WavyThreadsBackground
      threadColor="rgba(162,201,229,0.65)"
      style={{
        width: "100%",
        height: "100%"
      }}
      wrapperProps={{
        style: {
          height: "100%",
          display: "grid",
          placeItems: "center",
        }
      }}
    >
      <h2>Wavy Threads Background</h2>
    </WavyThreadsBackground>
  )
};

export default WavyThreadsBackgroundPreview;