import TextAnimation from "@/components/text-effects/text-animation/text-animation";
import { useState } from "react";

const TextAnimationUnitAndStaggerPreview = () => {
  const units = [
    "letter",
    "word",
    "text",
  ];

  const [unit, setUnit] = useState(units[0]);

  const stagger = ({
    letter: 20,
    word: 50,
    text: 0,
  })[unit];

  return (
    <div>
      <div style={controlStyles}>
        <label
          htmlFor="text-animation-unit-input"
        >
          Unit: 
        </label>
        <select
          id="text-animation-unit-input"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          {units.map(unit => (
            <option 
              key={unit}
              value={unit}
            >
              {unit}
            </option>
          ))}
        </select>
      </div>
      <TextAnimation
        text="Craft delightful experiences with animated text"
        unit={unit}
        stagger={stagger}
        variant="slideUp"
      />
    </div>
  );
};

const controlStyles = {
  textAlign: "center",
  marginBottom: "8px",
};

export default TextAnimationUnitAndStaggerPreview;