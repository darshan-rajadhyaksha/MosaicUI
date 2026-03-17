import WavyDotsBackground from "@/components/backgrounds/wavy-dots-background/wavy-dots-background";

const WavyDotsBackgroundPreview = () => {
  return (
    <WavyDotsBackground
      dotColor="rgba(162,201,229,0.5)"
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
      <h2>Wavy Dots Background</h2>
    </WavyDotsBackground>
  )
};

export default WavyDotsBackgroundPreview;