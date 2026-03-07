import CircularText from "@/components/text-effects/circular-text/circular-text";

const CircularTextAntiClockwiseDirectionPreview = () => {
  return (
    <CircularText
      text="CODE • DESIGN • SHIP •"
      radius={85}
      rotate={true}
      direction="anti-clockwise"
    />
  );
};

export default CircularTextAntiClockwiseDirectionPreview;