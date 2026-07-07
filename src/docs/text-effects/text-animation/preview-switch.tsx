import ComponentSwitch from "@/components/component-switch.tsx";

import PreviewSlideDown from "./preview-slidedown.tsx";
import PreviewSlideDownCode from "./preview-slidedown.tsx?raw";

import PreviewSlideUp from "./preview-slideup.tsx";
import PreviewSlideUpCode from "./preview-slideup.tsx?raw";

import PreviewSlideLeft from "./preview-slideleft.tsx";
import PreviewSlideLeftCode from "./preview-slideleft.tsx?raw";

import PreviewSlideRight from "./preview-slideright.tsx";
import PreviewSlideRightCode from "./preview-slideright.tsx?raw";

import PreviewFadeIn from "./preview-fadein.tsx";
import PreviewFadeInCode from "./preview-fadein.tsx?raw";

import PreviewZoomIn from "./preview-zoomin.tsx";
import PreviewZoomInCode from "./preview-zoomin.tsx?raw";

import PreviewZoomOut from "./preview-zoomout.tsx";
import PreviewZoomOutCode from "./preview-zoomout.tsx?raw";

import PreviewBlurIn from "./preview-blurin.tsx";
import PreviewBlurInCode from "./preview-blurin.tsx?raw";

/** preview map */
export const mapping = [
  { name: "SlideDown", component: PreviewSlideDown, code: PreviewSlideDownCode },
  { name: "SlideUp", component: PreviewSlideUp, code: PreviewSlideUpCode },
  { name: "SlideLeft", component: PreviewSlideLeft, code: PreviewSlideLeftCode },
  { name: "SlideRight", component: PreviewSlideRight, code: PreviewSlideRightCode },
  { name: "FadeIn", component: PreviewFadeIn, code: PreviewFadeInCode },
  { name: "ZoomIn", component: PreviewZoomIn, code: PreviewZoomInCode },
  { name: "ZoomOut", component: PreviewZoomOut, code: PreviewZoomOutCode },
  { name: "BlurIn", component: PreviewBlurIn, code: PreviewBlurInCode },
];

export default function() {
  return (
    <ComponentSwitch 
      mapping={mapping}
    />
  );
};
