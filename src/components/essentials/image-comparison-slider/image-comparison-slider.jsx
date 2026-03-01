import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import styles from "./image-comparison-slider.module.css";

const ImageComparisonSlider = (props) => {
  const {
    beforeImage,
    afterImage,

    imageWidth,
    imageHeight,

    defaultPercentage = 50,

    // controlled props
    percentage,
    onSliderChange,

    sliderStyles = {},
  } = props;

  const [sliderPercentage, setSliderPercentage] = useState(defaultPercentage);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const imageSliderWrapperNode = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const imageSliderWrapperDomNode = entries[0];
      const { width, height } = imageSliderWrapperDomNode.contentRect;
      setImageDimensions({
        width,
        height,
      });
    });
    resizeObserver.observe(imageSliderWrapperNode.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [beforeImage?.src, afterImage?.src]);

  const beforeImageClipWidth = useMemo(() => {
    const { width } = imageDimensions;
    return (width * (100 - sliderPercentage) / 100) || 0;
  }, [imageDimensions, sliderPercentage]);

  useLayoutEffect(() => {
    Object.entries({
      "--before-image-clip-width": `${beforeImageClipWidth || 0}px`,
      "--slider-width": `${parseInt(sliderStyles?.size) || 8}px`,
      "--slider-height": `${imageDimensions?.height || 0}px`,
      "--slider-border-color": sliderStyles?.borderColor || "#dddddd",
      "--slider-background-color": sliderStyles?.backgroundColor || "#5b83dc",
      "--slider-active-border-color": sliderStyles?.activeBorderColor || "#e25a5a",
      "--slider-active-background-color": sliderStyles?.activeBackgroundColor || "#e25a5a",
    }).forEach(([key, value]) => {
      imageSliderWrapperNode.current.style.setProperty(key, value);
    });
  }, [
    beforeImageClipWidth,
    sliderStyles?.size,
    sliderStyles?.borderColor,
    sliderStyles?.backgroundColor,
    sliderStyles?.activeBackgroundColor,
    sliderStyles?.activeBorderColor,
    imageDimensions?.height
  ]);

  if (
    percentage !== undefined &&
    percentage !== sliderPercentage
  ) {
    setSliderPercentage(percentage);
  }

  const handleChange = (e) => {
    const sliderValue = +e.target.value;
    setSliderPercentage(sliderValue);
    onSliderChange?.(sliderValue);
  };

  return (
    <div
      className={styles["image-comparison-slider"]}
      ref={imageSliderWrapperNode}
    >
      <img
        className={styles["before-image"]}
        src={beforeImage.src}
        alt={beforeImage.alt || ""}
      />
      <img
        className={styles["after-image"]}
        src={afterImage.src}
        alt={afterImage.alt || ""}
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
      />
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={sliderPercentage}
        onChange={handleChange}
      />
    </div>
  );
};

export default memo(ImageComparisonSlider, (prevProps, nextProps) => {
  return (
    [
      "imageWidth",
      "imageHeight",
      "percentage",
      "onSliderChange",
    ].every(key => (
      prevProps?.[key] === nextProps?.[key]
    )) &&
    [
      "src",
      "alt"
    ].every(key => (
      prevProps?.beforeImage?.[key] === nextProps?.beforeImage?.[key] &&
      prevProps?.afterImage?.[key] === nextProps?.afterImage?.[key]
    )) &&
    [
      "size",
      "borderColor",
      "backgroundColor",
      "activeBackgroundColor",
      "activeBorderColor",
    ].every(key => (
      prevProps?.sliderStyles?.[key] === nextProps?.sliderStyles?.[key]
    ))
  );
});