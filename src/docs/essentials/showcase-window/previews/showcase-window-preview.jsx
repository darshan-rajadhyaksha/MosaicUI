import ShowcaseWindow from "@/components/essentials/showcase-window/showcase-window";

const ShowcaseWindowPreview = () => {
  return (
    <div style={containerStyles}>
      <ShowcaseWindow
        title="MosaicUI Components"
        style={{
          height: "100%",
        }}
      >
        {/* Add your showcase content here */}
        <iframe
          src="/components"
          title="MosaicUI Components"
          style={frameStyles}
        />
      </ShowcaseWindow>
    </div>
  )
};

const containerStyles = {
  padding: "32px", 
  width: "100%",
  minWidth: "0",
  maxWidth: "994px",
  height: "540px",
};

const frameStyles = {
  width: "100%",
  height: "100%",
  border: "none",
};

export default ShowcaseWindowPreview;