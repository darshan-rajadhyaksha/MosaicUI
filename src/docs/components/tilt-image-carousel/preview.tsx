import TiltImageCarousel from "@/registry/components/tilt-image-carousel/tilt-image-carousel";

const TiltImageCarouselPreview = () => {
  const imageSize = innerWidth < 768 ? 150 : 200;
  return (
    <TiltImageCarousel
      items={[
        { src:"https://picsum.photos/id/101/400/400", alt: "Image 1" },
        { src:"https://picsum.photos/id/112/400/400", alt: "Image 2" },
        { src:"https://picsum.photos/id/128/400/400", alt: "Image 3" },
        { src:"https://picsum.photos/id/132/400/400", alt: "Image 4" },
        { src:"https://picsum.photos/id/133/400/400", alt: "Image 5" },
        { src:"https://picsum.photos/id/134/400/400", alt: "Image 6" },
        { src:"https://picsum.photos/id/135/400/400", alt: "Image 7" },
        { src:"https://picsum.photos/id/136/400/400", alt: "Image 8" },
        { src:"https://picsum.photos/id/137/400/400", alt: "Image 9" },
        { src:"https://picsum.photos/id/145/400/400", alt: "Image 10" },
        { src:"https://picsum.photos/id/139/400/400", alt: "Image 11" },
      ]}
      imageProps={{
        className: "rounded-xl shadow-md"
      }}
      imageWidth={imageSize}
      imageHeight={imageSize}
      yOffset={-15}
      zOffset={-10}
    />
  );
};

export default TiltImageCarouselPreview;