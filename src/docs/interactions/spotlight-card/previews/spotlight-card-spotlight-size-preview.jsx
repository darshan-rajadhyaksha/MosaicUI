import SpotlightCard, { SpotlightCardsContainer }  from "@/components/interactions/spotlight-card/spotlight-card";

const SpotlightCardSpotlightSizePreview = () => {
  return (
    <SpotlightCardsContainer
      style={spotlightCardsContainerStyles}
    >
      {cards.map((card) => (
        <SpotlightCard
          spotlightColor="rgb(132, 250, 175)"
          spotlightSize={200}
          style={spotlightCardStyles}
          wrapperProps={{
            style: spotlightCardWrapperStyles,
          }}
        >
          <span style={cardIcon}>{card.icon}</span>
          <h2 style={cardHeading}>{card.title}</h2>
          <p>{card.description}</p>
        </SpotlightCard>
      ))}
    </SpotlightCardsContainer>
  );
};

const spotlightCardsContainerStyles = {
  margin: "32px",
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const spotlightCardStyles = {
  width: "320px",
  borderRadius: "8px",
};

const spotlightCardWrapperStyles = {
  background: "var(--layer-secondary, #111111)",
  padding: "16px",
};

const cardHeading = {
  fontSize: "1.25em",
};

const cardIcon = {
  display: "inline-block",
  marginBottom: "16px",
};

const cards = [
  {
    icon: "⚡",
    title: "Fast Performance",
    description: "Experience lightning-fast load times and smooth interactions across all devices.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description: "Built with modern security practices to keep your data safe and protected.",
  },
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

export default SpotlightCardSpotlightSizePreview;