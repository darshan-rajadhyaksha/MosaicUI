import { memo, useCallback, useEffect, useState } from "react";
import ComponentRefresh from "@/components/component-refresh";

const ComponentSwitch = ({
  mapping,
}) => {
  const [previewIndex, setPreviewIndex] = useState(0);

  const handleComponentSwitchEvent = useCallback((e) => {
    setPreviewIndex(e.detail.index);
  }, []);

  useEffect(() => {
    document.documentElement.addEventListener(
      "component-switch",
      handleComponentSwitchEvent
    );
    return () => {
      document.documentElement.removeEventListener(
        "component-switch",
        handleComponentSwitchEvent
      );
    };
  }, [handleComponentSwitchEvent]);

  const Component = mapping[previewIndex].component;

  return (
    <ComponentRefresh>
      <Component />
    </ComponentRefresh>
  );
};

export default memo(ComponentSwitch);