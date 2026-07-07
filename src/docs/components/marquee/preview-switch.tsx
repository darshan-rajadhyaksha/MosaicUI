import ComponentSwitch from "@/components/component-switch.tsx";

import DefaultPreivew from "./preview.tsx";
import DefaultPreivewCode from "./preview.tsx?raw";

import PreviewVertical from "./preview-vertical.tsx";
import PreviewVerticalCode from "./preview-vertical.tsx?raw";

/** preview map */
export const mapping = [
  { name: "Default", component: DefaultPreivew, code: DefaultPreivewCode },
  { name: "Vertical", component: PreviewVertical, code: PreviewVerticalCode },
];

export default function() {
  return (
    <ComponentSwitch 
      mapping={mapping}
    />
  );
};
