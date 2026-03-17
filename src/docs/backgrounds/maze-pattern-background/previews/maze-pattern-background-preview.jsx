import MazePatternBackground from "@/components/backgrounds/maze-pattern-background/maze-pattern-background";

const MazePatternBackgroundPreview = () => {
  return (
    <MazePatternBackground
      mazeSize={10}
      mazeColor="rgba(162,201,229,0.8)"
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
      <h1>Find Your Way</h1>
    </MazePatternBackground>
  );
};

export default MazePatternBackgroundPreview;