import AuraBorderContainer, { AuraBorder } from "@/components/visual-effects/aura-border/aura-border";

const AuraBorderSpeedPreview = () => {
  return (
    // Use AuraBorderContainer only when AuraBorder’s glow/border is hidden or not rendering correctly due to stacking context issues.
    <AuraBorderContainer
      style={{
        margin: "32px 0",
        width: "320px",
      }}
    >
      <AuraBorder
        colors={[
          "#60A5FA",
          "#A78BFA",
          "#F472B6",
          "#38BDF8",
          "#60A5FA",
        ]}
        speed={0.9}
        style={cardStyles}
      >
        {/* Add your content here */}
        <ChartIcon style={iconStyles} />
        <h2>AI-Powered Insights</h2>
        <p>Instantly analyze complex datasets with advanced AI algorithms, turning raw information into actionable insights that help you make smarter, faster, and more accurate decisions every single day.</p>
      </AuraBorder>
    </AuraBorderContainer>
  )
};

const cardStyles = {
  borderRadius: "16px",
  background: "var(--layer-secondary)",
  padding: "16px",
};

const iconStyles = {
  width: "32px",
  height: "32px",
  display: "inline-block",
  marginBottom: "8px",
};

const ChartIcon = (props) => {
  const {
    style,
  } = props;
  return (  
    <svg style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M5 20q-.425 0-.712-.288T4 19V9q0-.425.288-.712T5 8h2q.425 0 .713.288T8 9v10q0 .425-.288.713T7 20zm5 0q-.425 0-.712-.288T9 19v-5q0-.425.288-.712T10 13h2q.425 0 .713.288T13 14v5q0 .425-.288.713T12 20zm7 0q-.425 0-.712-.288T16 19V5q0-.425.288-.712T17 4h2q.425 0 .713.288T20 5v14q0 .425-.288.713T19 20z" />
    </svg>
  )
};

export default AuraBorderSpeedPreview;