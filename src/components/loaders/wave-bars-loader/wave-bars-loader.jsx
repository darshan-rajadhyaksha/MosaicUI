import { memo, useMemo } from "react";
import styles from "./wave-bars-loader.module.css";

const WaveBarsLoader = (props) => {
  const {
    count = 6,
    colors = [
      "#eade3d",
      "#2eeca8",
      "#ec902e",
      "#09b7bf",
      "#55acee",
      "#ea3d8c",
    ],
  } = props;

  const MIN_WAVES = 5;

  const waves = useMemo(() => {
    const wavesCount = Math.max(MIN_WAVES, count);
    return Array.from({ 
      length: wavesCount 
    }, (_, i) => ({
      id: `wave-${i}`,
      color: colors[i] ?? "currentColor",
      delay: `${-100 * (wavesCount - i)}ms`,
    }));
  }, [count]);

  return (
    <span 
      aria-hidden={true}
      className={styles["wave-bars-loader"]}
    >
      {waves.map(wave => (
        <span
          key={wave.id}
          className={styles["wave"]}
          style={{
            "--wave-color": wave.color,
            "--wave-animation-delay": wave.delay,
          }}
        >
        </span>
      ))}
    </span>
  );
};

export default memo(WaveBarsLoader);