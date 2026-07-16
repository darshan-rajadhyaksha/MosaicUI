import RollingLettersAnimation from "@/registry/text-effects/rolling-letters-animation/rolling-letters-animation";

const RollingLettersAnimationPreview = () => {
  return (
    <RollingLettersAnimation
      text="MosaicUI"
      className="font-mono font-extrabold text-neutral-900 dark:text-white text-5xl uppercase"
      blockWidth={32}
      blockHeight={48}
      blockGap={2}
    />
  );
};

export default RollingLettersAnimationPreview;