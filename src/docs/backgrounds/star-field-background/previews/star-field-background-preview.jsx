import StarFieldBackground from "@/components/backgrounds/star-field-background/star-field-background";

const StarFieldBackgroundPreview = () => {
  return (
    <StarFieldBackground
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
      <h1 
        style={{
          color:"#fff", 
        }}
      >
        Big Bang, Again?
      </h1> 
    </StarFieldBackground>
  )
};

export default StarFieldBackgroundPreview;