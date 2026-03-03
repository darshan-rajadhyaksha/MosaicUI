import VerticalTextSlider from "@/components/text-effects/vertical-text-slider/vertical-text-slider";

const VerticalTextSliderDownDirectionPreview = () => {
  return (
    <h2>
      <VerticalTextSlider
        texts={[
          "Build faster",
          "Ship smarter",
          "Scale confidently",
          "Delight users"
        ]}
        direction="down"
      />
    </h2>
  );
};

export default VerticalTextSliderDownDirectionPreview;