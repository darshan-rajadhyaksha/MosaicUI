import MazePatternBackground from "@/components/backgrounds/maze-pattern-background/maze-pattern-background";

const MazePatternBackgroundPreview = () => {
  return (
    <MazePatternBackground
      style={{
        width: "100%",
        height: "100%"
      }}
      wrapperProps={{
        style: {
          height: "100%",
          background: "rgba(0,0,0,0.25)",
          display: "grid",
          placeItems: "center",
          color: "#fff",
        }
      }}
      mazeSize={10}
    >
      <h1>Find Your Way</h1>
    </MazePatternBackground>
  );
};

export default MazePatternBackgroundPreview;