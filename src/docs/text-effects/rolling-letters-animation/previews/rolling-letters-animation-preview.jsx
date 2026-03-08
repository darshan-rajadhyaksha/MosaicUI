import RollingLettersAnimation from "@/components/text-effects/rolling-letters-animation/rolling-letters-animation";

const RollingLettersAnimationPreview = () => {
  return (
    <RollingLettersAnimation
      word="MosaicUI"
      letterBlockSize={32}
      style={{
        fontFamily: "monospace",
        fontSize: "32px",
        fontWeight: "800",
      }}
    />
  );
};

export default RollingLettersAnimationPreview;