import ImageComparisonSlider from "@/components/essentials/image-comparison-slider/image-comparison-slider";

const ImageComparisonSliderPreview = () => {
  return (
    <ImageComparisonSlider
      beforeImage={{
        src: "https://picsum.photos/id/65/800/450?grayscale",
        alt: "Before image"
      }}
      afterImage={{
        src: "https://picsum.photos/id/65/800/450",
        alt: "After image"
      }}
      imageWidth="480px"
    />
  )
};

export default ImageComparisonSliderPreview;