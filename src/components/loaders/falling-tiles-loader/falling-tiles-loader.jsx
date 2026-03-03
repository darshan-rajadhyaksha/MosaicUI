import { memo } from "react";
import styles from "./falling-tiles-loader.module.css";

const FallingTilesLoader = (props) => {
  const {
    rows = 3,
    columns = 3,
  } = props;

  const delayBetweenTwoTilesMs = 50;
  const stayInGridDurationMs = 4000;
  
  const _rows = Math.max(1, rows);
  const _cols = Math.max(1, columns);

  const totalTiles = _rows * _cols;
  const totalAnimationDurationMs = (
    stayInGridDurationMs + (totalTiles * delayBetweenTwoTilesMs)
  );

  return (
    <span
      className={styles["falling-tiles-loader"]}
      style={{
        "--tiles-grid-columns": _cols,
      }}
    >
      {Array.from({ length: totalTiles }, ((_, index) => (
        <span
          key={`tile-${index}`}
          className={styles["tile"]} 
          style={{
            "--animation-duration": `${totalAnimationDurationMs}ms`,
            "--animation-delay": `${delayBetweenTwoTilesMs * (totalTiles - index)}ms`,
          }}
        />
      )))}
    </span>
  );
};

export default memo(FallingTilesLoader);