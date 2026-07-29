import ArcCards from "@/registry/components/arc-cards/arc-cards";

const ArcCardsPreview = () => {
  const cards = [
    "https://picsum.photos/id/235/480/640",
    "https://picsum.photos/id/199/480/640",
    "https://picsum.photos/id/177/480/640",
    "https://picsum.photos/id/168/480/640",
    "https://picsum.photos/id/202/480/640",
  ];

  return (
    <div>
      <ArcCards
        items={cards}
        className="w-[240px] h-[320px] rounded-xl"
        CardComponent={Card}
      />
      <p className="w-32 mt-4 mx-auto text-balance text-xs text-center text-gray-500 leading-4">
        Hover over a card to see the effect
      </p>
    </div>
  );
};

const Card = (
  props: { item: string; },
) => {
  return (
    <img
      src={props.item}
    />
  );
};

export default ArcCardsPreview;
