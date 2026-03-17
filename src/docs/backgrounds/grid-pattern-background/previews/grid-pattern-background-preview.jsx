import GridPatternBackground from "@/components/backgrounds/grid-pattern-background/grid-pattern-background";

const GridPatternBackgroundPreview = () => {
  return (
    <GridPatternBackground
      gridColor="rgba(162,201,229,0.5)"
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
        Grid Pattern Background
      </h2>
    </GridPatternBackground>
  );
};

export default GridPatternBackgroundPreview;