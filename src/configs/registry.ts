import componentCategory from "@/configs/categories";

/** backgrounds */
import nightSkyBackgroundConfig from "@/docs/backgrounds/night-sky-background";
import starFieldBackgroundConfig from "@/docs/backgrounds/star-field-background";

/** components */
import circularListConfig from "@/docs/components/circular-list";
import marqueeConfig from "@/docs/components/marquee";

/** text-effects */
import circularTextAnimationConfig from "@/docs/text-effects/circular-text-animation";
import decryptingTextAnimationConfig from "@/docs/text-effects/decrypting-text-animation";
import textAnimationConfig from "@/docs/text-effects/text-animation/";
import textEmergeAnimationConfig from "@/docs/text-effects/text-emerge-animation";
import typewriterAnimationConfig from "@/docs/text-effects/typewriter-animation";
import verticalTextSliderConfig from "@/docs/text-effects/vertical-text-slider/";

/** visual effetcs */
import auroraBorderConfig from "@/docs/visual-effects/aurora-border";
import borderBeamConfig from "@/docs/visual-effects/border-beam";

/** registry */
const registry = {
  [componentCategory.component.key]: {
    [circularListConfig.id]: circularListConfig,
    [marqueeConfig.id]: marqueeConfig,
  },
  [componentCategory.textEffect.key]: {
    [circularTextAnimationConfig.id]: circularTextAnimationConfig,
    [decryptingTextAnimationConfig.id]: decryptingTextAnimationConfig,
    [textAnimationConfig.id]: textAnimationConfig, 
    [textEmergeAnimationConfig.id]: textEmergeAnimationConfig,
    [typewriterAnimationConfig.id]: typewriterAnimationConfig,
    [verticalTextSliderConfig.id]: verticalTextSliderConfig,
  },
  [componentCategory.background.key]: {
    [nightSkyBackgroundConfig.id]: nightSkyBackgroundConfig,
    [starFieldBackgroundConfig.id]: starFieldBackgroundConfig,
  },
  [componentCategory.visualEffects.key]: {
    [auroraBorderConfig.id]: auroraBorderConfig,
    [borderBeamConfig.id]: borderBeamConfig,
  },
};

/** map of all components with key-value */
export const allComponents = Object.values(
  registry
).reduce((acc, entry) => {
  return {
    ...acc,
    ...entry,
  };
}, {});

export default registry;