import ColorizedText from "@/components/text-effects/colorized-text/colorized-text";

const ColorizedTextStyleLetterPreview = () => {
  return (
    <h1 style={{ fontSize: "5rem" }}>
      <ColorizedText 
        variant="standard"
        colors={[
          "#FF0000", 
          "#FFA500", 
          "#FFFF00", 
          "#008000", 
          "#0000FF", 
          "#4B0082", 
          "#EE82EE"
        ]}
        text="Rainbow"
      />
    </h1>
  );
};

export default ColorizedTextStyleLetterPreview;