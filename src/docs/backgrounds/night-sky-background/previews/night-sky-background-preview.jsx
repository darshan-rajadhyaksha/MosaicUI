import NightSkyBackground from "@/components/backgrounds/night-sky-background/night-sky-background";

const NightSkyBackgroundPreview = () => {
  return (
    <NightSkyBackground
      style={{
        width: "100%",
        height: "100%"
      }}
      wrapperProps={{
        style: {
          height: "100%",
          display: "grid",
          placeItems: "center",
          color: "#fff",
        }
      }}
    >
      <h1>Stars Above You</h1>
    </NightSkyBackground>
  );
};

export default NightSkyBackgroundPreview;