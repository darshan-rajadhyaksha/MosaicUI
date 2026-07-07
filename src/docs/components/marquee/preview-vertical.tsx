import Marquee from "@/registry/components/marquee/marquee";

/**
 * When vertical axis is used, add max-height / height to container of Marquee.
 */
const MarqueePreview = () => {
  const javaScriptLibAndFrameworks = ["Knockout", "React", "Angular", "Vue", "Svelte", "Solid", "Astro", "Marko", "Wiz", "Qwik"];
  return (
    // maxHeight <- This is important when vertical axis is used.
    <div className="flex justify-center w-full min-w-0 max-h-[320px] lg:max-h-[540px] p-8 gap-4">
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
    <div className="p-5 bg-neutral-200 dark:bg-neutral-600 text-neutral-900 dark:text-white rounded-lg">
      {name}
    </div>
  )
};

export default MarqueePreview;