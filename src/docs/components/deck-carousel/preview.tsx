import DeckCarousel, { DeckCarouselItem } from "@/registry/components/deck-carousel/deck-carousel";

const DeckCarouselPreview = () => {
  return (
    <DeckCarousel
      className="w-[320px] h-[240px]"
      yOffset={-18}
    >
      {images.map(image => (
        <DeckCarouselItem
          className="grid place-items-center rounded-3xl overflow-hidden shadow-md"
        >
          <img
            key={image}
            className="w-full h-full"
            src={image}  
          />
        </DeckCarouselItem>
      ))}
    </DeckCarousel>
  );
};

const images = [
  "https://picsum.photos/id/85/320/240",
  "https://picsum.photos/id/112/320/240",
  "https://picsum.photos/id/118/320/240",
  "https://picsum.photos/id/128/320/240",
  "https://picsum.photos/id/132/320/240",
]

export default DeckCarouselPreview;