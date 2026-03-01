import { useMemo } from "react";
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

  const wavesMap = useMemo(() => {
    const wavesCount = Math.max(MIN_WAVES, count);
    const wavesMap = [];
    for(let i=0; i < wavesCount; i++) {
      wavesMap.push({
        id: `wave-${Math.random()}`,
        color: colors[i] ?? "currentColor",
        delay: `${-100 * (wavesCount - i)}ms`,
      });
    }
    return wavesMap;
  }, [count]);

  return (
    <span className={styles["wave-bars-loader"]}>
      {wavesMap.map(wave => (
        <span
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

export default WaveBarsLoader;