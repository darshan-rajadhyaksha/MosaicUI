import DotGridGradientBackground from "@/components/backgrounds/dot-grid-gradient-background/dot-grid-gradient-background";

const DotGridGradientBackgroundPreview = () => {
  return (
    <DotGridGradientBackground
      dotColor="#bbb"
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
      <h2 
        style={{
          color: "#fff"
      }}>
        Dot Grid Background
      </h2>
    </DotGridGradientBackground>
  )
};

export default DotGridGradientBackgroundPreview;