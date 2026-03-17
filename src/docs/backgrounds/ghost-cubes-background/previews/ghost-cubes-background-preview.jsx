import GhostCubesBackground from "@/components/backgrounds/ghost-cubes-background/ghost-cubes-background.jsx";

const GhostCubesBackgroundPreview = () => {
  return (
    <GhostCubesBackground
      backgroundColor="rgba(162,201,229,0.8)"
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
      <h1>Ghost Cubes</h1>
    </GhostCubesBackground>
  );
};

export default GhostCubesBackgroundPreview;