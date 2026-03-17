import DotGridGradientBackground from "@/components/backgrounds/dot-grid-gradient-background/dot-grid-gradient-background";

const DotGridGradientBackgroundPreview = () => {
  return (
    <DotGridGradientBackground
      dotColor="rgba(162,201,229,0.8)"
      style={{
        width: "100%",
        height: "100%",
      }}
      wrapperProps = {{
        style: {
          display: "grid",
          placeItems: "center",
          height: "100%"
        }
      }}
    >
      <h2>
        Dot Grid Background
      </h2>
    </DotGridGradientBackground>
  )
};

export default DotGridGradientBackgroundPreview;