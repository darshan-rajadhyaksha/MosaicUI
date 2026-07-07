import VerticalTextSlider from "@/registry/text-effects/vertical-text-slider/vertical-text-slider";

const VerticalTextSliderPreview = () => {
  return (
    <VerticalTextSlider
      className="text-gray-900 dark:text-gray-100 text-xl"
      texts={[
        "Build faster",
        "Ship smarter",
        "Scale confidently",
        "Delight users"
      ]}
    />
  )
};

export default VerticalTextSliderPreview;