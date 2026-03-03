import VerticalTextSlider from "@/components/text-effects/vertical-text-slider/vertical-text-slider";

const VerticalTextSliderPreview = () => {
  return (
    <h2>
      <VerticalTextSlider
        texts={[
          "Build faster",
          "Ship smarter",
          "Scale confidently",
          "Delight users"
        ]}
      />
    </h2>
  );
};

export default VerticalTextSliderPreview;