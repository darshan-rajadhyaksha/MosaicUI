import ClassicDotsPatternBackground from "@/components/backgrounds/classic-dots-pattern-background/classic-dots-pattern-background";

const ClassicDotsPatternBackgroundPreview = () => {
  return (
    <ClassicDotsPatternBackground
      variant="random"
      dotColor="#7a80dd"
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
        Dot Pattern Background
      </h2>
    </ClassicDotsPatternBackground>
  );
};

export default ClassicDotsPatternBackgroundPreview;