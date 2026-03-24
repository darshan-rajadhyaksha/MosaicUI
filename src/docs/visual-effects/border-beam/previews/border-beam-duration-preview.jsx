import BorderBeamContainer, { BorderBeam } from "@/components/visual-effects/border-beam/border-beam";

const BorderBeamDurationPreview = () => {
  return (
    <BorderBeamContainer
      style={borderBeamContainerStyles}
    >
      <BorderBeam 
        colors={[
          "#0000",
          "#84fab0",
          "#8fd3f4",
          "#0000",
        ]}
        duration={10000}
      />

      {/* Add your content here */}
      <h2>Border Beam</h2>
      <p>
        Highlight important UI elements with a smooth, animated beam effect that
        travels along the border of the container.
      </p>
    </BorderBeamContainer>
  )
};

const borderBeamContainerStyles = {
  width: "320px",
  borderRadius: "16px",
  padding: "16px",
  background: "var(--layer-secondary)",
};

export default BorderBeamDurationPreview;