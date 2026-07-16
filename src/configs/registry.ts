import componentCategory from "@/configs/categories";

/** backgrounds */
import nightSkyBackgroundConfig from "@/docs/backgrounds/night-sky-background";
import starFieldBackgroundConfig from "@/docs/backgrounds/star-field-background";

/** components */
import circularListConfig from "@/docs/components/circular-list";
import floatingActionMenuConfig from "@/docs/components/floating-action-menu";
import fluidDockConfig from "@/docs/components/fluid-dock";
import marqueeConfig from "@/docs/components/marquee";
import sectionNavigatorConfig from "@/docs/components/section-navigator";

/** text-effects */
import circularTextAnimationConfig from "@/docs/text-effects/circular-text-animation";
import decryptingTextAnimationConfig from "@/docs/text-effects/decrypting-text-animation";
import rollingLettersAnimationConfig from "@/docs/text-effects/rolling-letters-animation";
import textAnimationConfig from "@/docs/text-effects/text-animation/";
import textEmergeAnimationConfig from "@/docs/text-effects/text-emerge-animation";
import typewriterAnimationConfig from "@/docs/text-effects/typewriter-animation";
import verticalTextSliderConfig from "@/docs/text-effects/vertical-text-slider/";

/** visual effetcs */
import auroraBorderConfig from "@/docs/visual-effects/aurora-border";
import borderBeamConfig from "@/docs/visual-effects/border-beam";
import spotlightCardConfig from "@/docs/visual-effects/spotlight-card";

/** registry */
const registry = {
  [componentCategory.component.key]: {
    [circularListConfig.id]: circularListConfig,
    [floatingActionMenuConfig.id]: floatingActionMenuConfig,
    [fluidDockConfig.id]: fluidDockConfig,
    [marqueeConfig.id]: marqueeConfig,
    [sectionNavigatorConfig.id]: sectionNavigatorConfig,
  },
  [componentCategory.textEffect.key]: {
    [circularTextAnimationConfig.id]: circularTextAnimationConfig,
    [decryptingTextAnimationConfig.id]: decryptingTextAnimationConfig,
    [rollingLettersAnimationConfig.id]: rollingLettersAnimationConfig,
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
    [spotlightCardConfig.id]: spotlightCardConfig,
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