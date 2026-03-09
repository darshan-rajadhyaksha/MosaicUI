import ComponentCategories from "@/config/component-categories";

/* -- Essentials -- */
import classicAccordionMeta from "@/docs/essentials/classic-accordion";
import floatingIndicatorTabsMeta from "@/docs/essentials/floating-indicator-tabs";
import modularGridMeta from "@/docs/essentials/modular-grid";
import orbitToggleSwitchMeta from "@/docs/essentials/orbit-toggle-switch";
import imageComparisonSliderMeta from "@/docs/essentials/image-comparison-slider";
import marqueeMeta from "@/docs/essentials/marquee";

/* -- Backgrounds -- */
import mazePatternBackgroundMeta from "@/docs/backgrounds/maze-pattern-background";
import starFieldBackgroundMeta from "@/docs/backgrounds/star-field-background";
import nightSkyBackgroundMeta from "@/docs/backgrounds/night-sky-background";
import ghostCubesBackgroundMeta from "@/docs/backgrounds/ghost-cubes-background";
import gridPatternBackgroundMeta from "@/docs/backgrounds/grid-pattern-background";
import dotGridGradientBackgroundMeta from "@/docs/backgrounds/dot-grid-gradient-background";

/* -- Text Effects -- */
import typewriterAnimationMeta from "@/docs/text-effects/typewriter-animation";
import decryptingTextAnimationMeta from "@/docs/text-effects/decrypting-text-animation";
import shiningTextAnimationMeta from "@/docs/text-effects/shining-text-animation";
import textEmergeAnimationMeta from "@/docs/text-effects/text-emerge-animation";
import textRevealAnimationMeta from "@/docs/text-effects/text-reveal-animation";
import colorizedTextMeta from "@/docs/text-effects/colorized-text";
import verticalTextSliderMeta from "@/docs/text-effects/vertical-text-slider";
import circularTextMeta from "@/docs/text-effects/circular-text";
import rollingLettersAnimationMeta from "@/docs/text-effects/rolling-letters-animation";

/* -- Loaders -- */
import threeDotsLoaderMeta from "@/docs/loaders/three-dots-loader";
import waveBarsLoaderMeta from "@/docs/loaders/wave-bars-loader";
import fallingTilesLoaderMeta from "@/docs/loaders/falling-tiles-loader";


const esssentials = {
  title: ComponentCategories.essential.title,
  items: {
    [classicAccordionMeta.key]: classicAccordionMeta,
    [floatingIndicatorTabsMeta.key]: floatingIndicatorTabsMeta,
    [imageComparisonSliderMeta.key]: imageComparisonSliderMeta,
    [marqueeMeta.key]: marqueeMeta,
    [modularGridMeta.key]: modularGridMeta,
    [orbitToggleSwitchMeta.key]: orbitToggleSwitchMeta,
  },
};

const backgrounds = {
  title: ComponentCategories.background.title,
  items: {
    [dotGridGradientBackgroundMeta.key]: dotGridGradientBackgroundMeta,
    [gridPatternBackgroundMeta.key]: gridPatternBackgroundMeta,
    [ghostCubesBackgroundMeta.key]: ghostCubesBackgroundMeta,
    [mazePatternBackgroundMeta.key]: mazePatternBackgroundMeta,
    [nightSkyBackgroundMeta.key]: nightSkyBackgroundMeta,
    [starFieldBackgroundMeta.key]: starFieldBackgroundMeta,
  },
};

const textEffects = {
  title: ComponentCategories.textEffect.title,
  items: {
    [circularTextMeta.key]: circularTextMeta,
    [decryptingTextAnimationMeta.key]: decryptingTextAnimationMeta,
    [rollingLettersAnimationMeta.key]: rollingLettersAnimationMeta,
    [verticalTextSliderMeta.key]: verticalTextSliderMeta,
    [textRevealAnimationMeta.key]: textRevealAnimationMeta,
    [textEmergeAnimationMeta.key]: textEmergeAnimationMeta,
    [typewriterAnimationMeta.key]: typewriterAnimationMeta,
    [shiningTextAnimationMeta.key]: shiningTextAnimationMeta,
    [colorizedTextMeta.key]: colorizedTextMeta,
  },
};

const loaders = {
  title: ComponentCategories.loader.title,
  items: {
    [waveBarsLoaderMeta.key]: waveBarsLoaderMeta,
    [fallingTilesLoaderMeta.key]: fallingTilesLoaderMeta,
    [threeDotsLoaderMeta.key]: threeDotsLoaderMeta,
  },
};

export const componentMap = {
  ...textEffects.items,
  ...loaders.items,
  ...esssentials.items,
  ...backgrounds.items,
};

export default ([
  esssentials,
  backgrounds,
  textEffects,
  loaders,
].map(entry => ({
  ...entry,
  items: Object.values(entry.items),
})));