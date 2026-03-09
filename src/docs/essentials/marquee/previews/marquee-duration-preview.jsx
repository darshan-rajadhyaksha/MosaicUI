import Marquee from "@/components/essentials/marquee/marquee";

const MarqueePreview = () => {
  const javaScriptLibAndFrameworks = ["Knockout", "React", "Angular", "Vue", "Svelte", "Solid", "Astro", "Marko", "Wiz", "Qwik"];
  return (
    <div style={{
      width: "100%",
      minWidth: "0",
      padding: "32px",
    }}>
      <Marquee duration={5}>
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

export default MarqueePreview;