import SpotlightCardsContainer, { SpotlightCard }  from "@/registry/visual-effects/spotlight-card/spotlight-card";
import cn from "@/utils/cn";

const SpotlightCardPreview = () => {
  return (
    <SpotlightCardsContainer className="my-5 mx-8 grid sm:grid-cols-2 gap-4 flex-wrap justify-center">
      {cards.map((card, cardIndex) => (
        <SpotlightCard
          spotlightColor="rgb(42, 250, 175)"
          spotlightBorderWidth={2}
          className={cn(
            "rounded-md", 
            {
              "max-sm:hidden": cardIndex >= 2,
            },
          )}
          wrapperProps={{
            className: "bg-neutral-50 dark:bg-neutral-800 p-4 shadow shadow-sm",
          }}
        >
          <span className="inline-block mb-3 text-xl">
            {card.icon}
          </span>
          <h2 className="text-md font-bold text-neutral-900 dark:text-white mb-1">
            {card.title}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {card.description}
          </p>
        </SpotlightCard>
      ))}
    </SpotlightCardsContainer>
  );
};

const cards = [
  {
    icon: "🎨",
    title: "Customizable UI",
    description: "Easily adapt components to match your brand and design system.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Optimized layouts that look great on mobile, tablet, and desktop screens.",
  },
  {
    icon: "🧑‍💻",
    title: "Developer Friendly",
    description: "Simple APIs and flexible props make development fast and enjoyable.",
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    description: "Designed to grow with your application from small projects to large systems.",
  },
];

export default SpotlightCardPreview;