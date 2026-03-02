import { memo, useState } from "react";
import styles from "./orbit-toggle-switch.module.css";

const OrbitToggleSwitch = (props) => {
  const {
    id,
    checked,
    defaultChecked = false,
    disabled = false,
    onChange,
    isInsideLabel,
    inputProps,
  } = props;

  const isControlled = checked !== undefined;
  
  const [switchChecked, setSwitchChecked] = useState(defaultChecked);

  const isChecked = isControlled ? checked : switchChecked;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) {
      setSwitchChecked(!isChecked);
    }
    onChange?.(!isChecked);
  };

  const handleKeyDown = (e) => {
    if ([" ", "Enter"].includes(e.key)) {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div 
      id={id}
      role="checkbox"
      tabIndex={disabled ? -1 : 0}
      aria-checked={isChecked}
      aria-disabled={disabled}
      className={styles["orbit-toggle-switch"]}
      onKeyDown={handleKeyDown}
      {...(!isInsideLabel && ({
        onClick: toggle,
      }))}
    >
      {isInsideLabel && (
        <input 
          {...inputProps}
          type="checkbox" 
          checked={isChecked}
          onChange={toggle}
          aria-hidden={true}
          hidden
        />
      )}
      <div className={styles["thumb"]}></div>
      <div className={styles["track"]}></div>
    </div>
  );
};

export default memo(OrbitToggleSwitch);