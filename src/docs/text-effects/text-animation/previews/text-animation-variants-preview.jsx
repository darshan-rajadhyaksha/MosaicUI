import TextAnimation from "@/components/text-effects/text-animation/text-animation";
import { useState } from "react";

const TextAnimationVariantsPreview = () => {
  const variants = [
    "fadeIn",
    "slideUp",
    "slideDown",
    "slideLeft",
    "slideRight",
    "zoomIn",
    "zoomOut",
    "blurIn",
  ];
  const [variant, setVariant] = useState(variants[0]);

  return (
    <div>
      <div style={controlStyles}>
        <label
          htmlFor="text-animation-variants-input"
        >
          Variants: 
        </label>
        <select
          id="text-animation-variants-input"
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
        >
          {variants.map(variant => (
            <option
              key={variant}
              value={variant}
            >
              {variant}
            </option>
          ))}
        </select>
      </div>
      <TextAnimation
        text="Create beautiful text animations with ease"
        variant={variant}
      />
    </div>
  );
};

const controlStyles = {
  textAlign: "center",
  marginBottom: "8px",
};

export default TextAnimationVariantsPreview;