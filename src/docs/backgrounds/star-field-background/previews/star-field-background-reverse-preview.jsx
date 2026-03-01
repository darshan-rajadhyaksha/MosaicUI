import StarFieldBackground from "@/components/backgrounds/star-field-background/star-field-background";

const StarFieldBackgroundReversePreview = () => {
  return (
    <StarFieldBackground
      speed={-10}
      style={{
        width: "100%",
        height: "320px"
      }}
      wrapperProps={{
        style: {
          height: "100%",
          display: "grid",
          placeItems: "center",
        }
      }}
    >
      <h1 
        style={{
          color:"#fff", 
        }}
      >
        Am I Tachyon?
      </h1> 
    </StarFieldBackground>
  )
};

export default StarFieldBackgroundReversePreview;