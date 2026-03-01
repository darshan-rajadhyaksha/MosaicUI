import ModularGrid, { ModularGridItem } from "@/components/essentials/modular-grid/modular-grid";

const ModularGridPreview = () => {
  return (
    <div style={{ width: "100%", padding: "24px" }}>
      <ModularGrid>
        <ModularGridItem xxl={6} xl={6}>
          <Card
            title="Ubuntu"
            description="User-friendly distro with strong community support and regular LTS releases."
          />
        </ModularGridItem>
        <ModularGridItem xxl={3} xl={6}>
          <Card
            title="Fedora"
            description="Cutting-edge features with a focus on innovation and upstream technologies."
          />
        </ModularGridItem>
        <ModularGridItem xxl={3} xl={6}>
          <Card
            title="Debian"
            description="Extremely stable and reliable, ideal for servers and long-term use."
          />
        </ModularGridItem>
        <ModularGridItem xxl={6} xl={6}>
          <Card
            title="Arch Linux"
            description="Minimal and highly customizable, built for advanced users."
          />
        </ModularGridItem>
        <ModularGridItem xxl={6} xl={6}>
          <Card
            title="openSUSE"
            description="Flexible distro with powerful system management tools like YaST."
          />
        </ModularGridItem>
        <ModularGridItem xxl={3} xl={6}>
          <Card
            title="Pop!_OS"
            description="Developer-focused distro optimized for productivity and hardware support."
          />
        </ModularGridItem>
        <ModularGridItem xxl={3} xl={6}>
          <Card
            title="Elementary OS"
            description="Clean and elegant distro focused on simplicity and design."
          />
        </ModularGridItem>
        <ModularGridItem xxl={6} xl={6}>
          <Card
            title="Linux Mint"
            description="Beginner-friendly distro with a familiar desktop experience."
          />
        </ModularGridItem>
      </ModularGrid>
    </div>
  );
};

const Card = (props) => {
  const {
    title,
    description
  } = props;
  return (
    <div
      className="card"
      style={{
        background: "var(--layer-tertiary)",
        padding: "24px",
        borderRadius: "8px",
        height: "100%"
      }}
    >
      <h4
        style={{
          marginBottom: "4px"
        }}
      >
        {title}
      </h4>
      <p>{description}</p>
    </div>
  )
};

export default ModularGridPreview;