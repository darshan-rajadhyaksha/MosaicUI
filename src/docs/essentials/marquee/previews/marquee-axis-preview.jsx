import Marquee from "@/components/essentials/marquee/marquee";

/**
 * When vertical axis is used, add max-height / height to container of Marquee.
 */
const MarqueeAxisPreview = () => {
  const javaScriptLibAndFrameworks = ["Knockout", "React", "Angular", "Vue", "Svelte", "Solid", "Astro", "Marko", "Wiz", "Qwik"];
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
      minWidth: "0",
      maxHeight: "320px", // <- This is important when vertical axis is used.
      padding: "32px",
      gap: "8px",
    }}>
      <Marquee
        axis="vertical"
      >
        {javaScriptLibAndFrameworks.map(e => (
          <Card key={e} name={e} />
        ))}
      </Marquee>
      <br />
      <Marquee 
        axis="vertical"
        reverse
      >
        {javaScriptLibAndFrameworks.map(e => (
          <Card key={e} name={e} />
        ))}
      </Marquee>
    </div>
  )
};

const Card = (props) => {
  const {
    name
  } = props;

  return (
    <div
      style={{
        padding: "16px",
        background: "var(--layer-tertiary)",
        borderRadius: "4px",
      }}
    >
      {name}
    </div>
  )
};

export default MarqueeAxisPreview;