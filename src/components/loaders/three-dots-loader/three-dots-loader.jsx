import styles from "./three-dots-loader.module.css";

const ThreeDotsLoader = () => {
  return (
    <span className={styles["three-dots-loader"]}>
      <span className={styles["pair"]}>
        <span className={styles["dot"]}></span>
        <span className={styles["dot"]}></span>
      </span>
      <span className={styles["pair"]}>
        <span className={styles["dot"]}></span>
        <span className={styles["dot"]}></span>
      </span>
    </span>
  );
};

export default ThreeDotsLoader;