import ImageComparisonSlider from "@/components/essentials/image-comparison-slider/image-comparison-slider";

const ImageComparisonSliderStyleSliderPreview = () => {
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
      imageWidth={320}
      sliderStyles={{ 
        size: 16,
        borderColor: "black",
        backgroundColor: "white", 
        activeBorderColor: "black",
        activeBackgroundColor: "black" 
      }}
    />
  )
};

export default ImageComparisonSliderStyleSliderPreview;