import { memo } from "react";
import styles from "./marquee.module.css";

const Marquee = (props) => {
  const {
    children,
    axis = "horizontal",
    pauseOnHover = true,
    reverse = false,
    duration = 30,
    repeat = 5,
    mask = true,
    className,
    ...restProps
  } = props;

  const _repeat = Math.max(1, repeat);
  const _duration = Math.max(1, duration);

  return (
    <div
      {...restProps}
      className={[
        className,
        styles["marquee"],
        styles[`axis-${axis}`],
        reverse ? styles["reverse"] : "",
        pauseOnHover ? styles["pause-on-hover"] : "",
        mask ? styles["mask"] : "",
      ].join(" ")}
    >
      <div
        className={styles["wrapper"]}
        style={{
          "--animation-duration": `${_duration}s`
        }}
      >
        {Array.from({
          length: _repeat,
        }).map((_, index) => (
          <div
            key={`marquee-block-${index}`}
            aria-hidden={index !== 0}
            className={styles["batch"]}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Marquee);