import styles from "./shining-text-animation.module.css";

const ShiningTextAnimation = (props) => {
  const {
    text,
  } = props;

  return (
    <span className={styles["shining-text-animation"]}>
      {text}
    </span>
  );
};

export default ShiningTextAnimation;