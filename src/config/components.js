import ComponentCategories from "@/config/component-categories";

/* -- Essentials -- */
import avatarGroupMeta from "@/docs/essentials/avatar-group";
import circularListMeta from "@/docs/essentials/circular-list";
import classicAccordionMeta from "@/docs/essentials/classic-accordion";
import floatingIndicatorTabsMeta from "@/docs/essentials/floating-indicator-tabs";
import modularGridMeta from "@/docs/essentials/modular-grid";
import imageComparisonSliderMeta from "@/docs/essentials/image-comparison-slider";
import marqueeMeta from "@/docs/essentials/marquee";
import showcaseWindowMeta from "@/docs/essentials/showcase-window";

/* -- Backgrounds -- */
import mazePatternBackgroundMeta from "@/docs/backgrounds/maze-pattern-background";
import starFieldBackgroundMeta from "@/docs/backgrounds/star-field-background";
import nightSkyBackgroundMeta from "@/docs/backgrounds/night-sky-background";
import ghostCubesBackgroundMeta from "@/docs/backgrounds/ghost-cubes-background";
import gridPatternBackgroundMeta from "@/docs/backgrounds/grid-pattern-background";
import dotGridGradientBackgroundMeta from "@/docs/backgrounds/dot-grid-gradient-background";
import classicDotsPatternBackgroundMeta from "@/docs/backgrounds/classic-dots-pattern-background";
import wavyDotsBackgroundMeta from "@/docs/backgrounds/wavy-dots-background";
import wavyThreadsBackgroundMeta from "@/docs/backgrounds/wavy-threads-background";

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
import textAnimationMeta from "@/docs/text-effects/text-animation";

/* -- Loaders -- */
import threeDotsLoaderMeta from "@/docs/loaders/three-dots-loader";
import waveBarsLoaderMeta from "@/docs/loaders/wave-bars-loader";
import fallingTilesLoaderMeta from "@/docs/loaders/falling-tiles-loader";

/* -- Micro Interactions -- */
import hamburgerButtonMeta from "@/docs/interactions/hamburger-button";
import luminousCardMeta from "@/docs/interactions/luminous-card";
import orbitToggleSwitchMeta from "@/docs/interactions/orbit-toggle-switch";

/* -- Visual Effects -- */
import borderBeamMeta from "@/docs/visual-effects/border-beam";
import auraBorderMeta from "@/docs/visual-effects/aura-border";

const esssentials = {
  title: ComponentCategories.essential.title,
  items: {
    [avatarGroupMeta.key]: avatarGroupMeta,
    [circularListMeta.key]: circularListMeta,
    [classicAccordionMeta.key]: classicAccordionMeta,
    [floatingIndicatorTabsMeta.key]: floatingIndicatorTabsMeta,
    [imageComparisonSliderMeta.key]: imageComparisonSliderMeta,
    [marqueeMeta.key]: marqueeMeta,
    [modularGridMeta.key]: modularGridMeta,
    [showcaseWindowMeta.key]: showcaseWindowMeta,
  },
};

const backgrounds = {
  title: ComponentCategories.background.title,
  items: {
    [classicDotsPatternBackgroundMeta.key]: classicDotsPatternBackgroundMeta,
    [dotGridGradientBackgroundMeta.key]: dotGridGradientBackgroundMeta,
    [ghostCubesBackgroundMeta.key]: ghostCubesBackgroundMeta,
    [gridPatternBackgroundMeta.key]: gridPatternBackgroundMeta,
    [mazePatternBackgroundMeta.key]: mazePatternBackgroundMeta,
    [nightSkyBackgroundMeta.key]: nightSkyBackgroundMeta,
    [starFieldBackgroundMeta.key]: starFieldBackgroundMeta,
    [wavyDotsBackgroundMeta.key]: wavyDotsBackgroundMeta,
    [wavyThreadsBackgroundMeta.key]: wavyThreadsBackgroundMeta,
  },
};

const textEffects = {
  title: ComponentCategories.textEffect.title,
  items: {
    [circularTextMeta.key]: circularTextMeta,
    [colorizedTextMeta.key]: colorizedTextMeta,
    [decryptingTextAnimationMeta.key]: decryptingTextAnimationMeta,
    [rollingLettersAnimationMeta.key]: rollingLettersAnimationMeta,
    [shiningTextAnimationMeta.key]: shiningTextAnimationMeta,
    [textAnimationMeta.key]: textAnimationMeta,
    [textEmergeAnimationMeta.key]: textEmergeAnimationMeta,
    [textRevealAnimationMeta.key]: textRevealAnimationMeta,
    [typewriterAnimationMeta.key]: typewriterAnimationMeta,
    [verticalTextSliderMeta.key]: verticalTextSliderMeta,
  },
};

const loaders = {
  title: ComponentCategories.loader.title,
  items: {
    [fallingTilesLoaderMeta.key]: fallingTilesLoaderMeta,
    [threeDotsLoaderMeta.key]: threeDotsLoaderMeta,
    [waveBarsLoaderMeta.key]: waveBarsLoaderMeta,
  },
};

const interactions = {
  title: ComponentCategories.interactions.title,
  items: {
    [hamburgerButtonMeta.key]: hamburgerButtonMeta,
    [luminousCardMeta.key]: luminousCardMeta,
    [orbitToggleSwitchMeta.key]: orbitToggleSwitchMeta,
  },
};

const visualEffects = {
  title: ComponentCategories.visualEffect.title,
  items: {
    [auraBorderMeta.key]: auraBorderMeta,
    [borderBeamMeta.key]: borderBeamMeta,
  }
};

export const componentMap = {
  ...textEffects.items,
  ...loaders.items,
  ...esssentials.items,
  ...backgrounds.items,
  ...interactions.items,
  ...visualEffects.items,
};

export default ([
  esssentials,
  visualEffects,
  backgrounds,
  textEffects,
  interactions,
  loaders,
].map(entry => ({
  ...entry,
  items: Object.values(entry.items),
})));