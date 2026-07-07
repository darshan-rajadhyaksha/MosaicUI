import Marquee from "@/registry/components/marquee/marquee";

const MarqueePreview = () => {
  const javaScriptLibAndFrameworks = ["Knockout", "React", "Angular", "Vue", "Svelte", "Solid", "Astro", "Marko", "Wiz", "Qwik"];
  return (
    <div className="w-full min-w-0 p-8">
      <Marquee>
        {javaScriptLibAndFrameworks.map(e => (
          <Card key={e} name={e} />
        ))}
      </Marquee>
      <br />
      <Marquee reverse>
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
    <div className="p-5 bg-neutral-200 dark:bg-neutral-600 text-neutral-900 dark:text-white rounded-lg">
      {name}
    </div>
  )
};

export default MarqueePreview;