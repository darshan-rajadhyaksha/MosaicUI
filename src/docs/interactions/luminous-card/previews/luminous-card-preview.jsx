import LuminousCard from "@/components/interactions/luminous-card/luminous-card";

const LuminousCardPreview = () => {
  return (
    <LuminousCard
      color={{
        light: "rgba(132, 250, 175, 0.15)",
        dark: "rgba(132, 250, 175, 0.25)",
      }}
      style={cardStyle}
    >
      {/* Add your card content here */}
      <span style={iconStyle}>⚙️</span>
      <h2>Customizable Dashboard</h2>
      <p>Organize widgets, reports, and charts the way you need them to keep all your insights at a glance.</p>
    </LuminousCard>
  )
};

const cardStyle = {
  width: "320px",
  background: "var(--layer-secondary)",
  border: "1px solid var(--border-secondary)",
  borderRadius: "8px",
  padding: "24px",
};

const iconStyle = {
  display: "inline-block",
  marginBottom: "20px",
  fontSize: "24px",
}

export default LuminousCardPreview;