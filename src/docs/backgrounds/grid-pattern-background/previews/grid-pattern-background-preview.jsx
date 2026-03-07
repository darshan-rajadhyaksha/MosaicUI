import GridPatternBackground from "@/components/backgrounds/grid-pattern-background/grid-pattern-background";

const GridPatternBackgroundPreview = () => {
  return (
    <GridPatternBackground
      backgroundColor="#040c1a"
      gridColor="#3c4d55"
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
        }}
      >
        Grid Pattern Background
      </h2>
    </GridPatternBackground>
  );
};

export default GridPatternBackgroundPreview;