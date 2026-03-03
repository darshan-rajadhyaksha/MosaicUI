import VerticalTextSlider from "@/components/text-effects/vertical-text-slider/vertical-text-slider";

const VerticalTextSliderVisibleDurationPreview = () => {
  return (
    <h2>
      <VerticalTextSlider
        texts={[
          "Build faster",
          "Ship smarter",
          "Scale confidently",
          "Delight users"
        ]}
        visibleDuration={5000}
      />
    </h2>
  );
};

export default VerticalTextSliderVisibleDurationPreview;