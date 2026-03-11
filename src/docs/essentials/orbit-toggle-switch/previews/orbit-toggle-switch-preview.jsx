import { useCallback, useState } from "react";
import OrbitToggleSwitch from "@/components/essentials/orbit-toggle-switch/orbit-toggle-switch";

const labelStyles = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const OrbitToggleSwitchPreview = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback((checked) => {
    setChecked(checked);
  });
  return (
    <div>
      <label style={labelStyles}>
        <OrbitToggleSwitch 
          aria-label="example"
          checked={checked}
          onChange={handleChange}
          isInsideLabel
        />
        <span>
          Did You Try Turning It {checked ? "Off" : "On"}?
        </span>
      </label>
    </div>
  );
}

export default OrbitToggleSwitchPreview;