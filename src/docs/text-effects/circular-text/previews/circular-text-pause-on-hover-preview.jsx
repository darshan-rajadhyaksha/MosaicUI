import CircularText from "@/components/text-effects/circular-text/circular-text";

const CircularTextPauseOnHoverPreview = () => {
  return (
    <CircularText
      text="CODE • DESIGN • SHIP •"
      radius={80}
      rotate={true}
      pauseOnHover={true}
    />
  );
};

export default CircularTextPauseOnHoverPreview;