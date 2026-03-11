import styles from "./shining-text-animation.module.css";

const ShiningTextAnimation = (props) => {
  const {
    text,
    className,
    ...restProps
  } = props;

  return (
    <span
      {...restProps}
      className={[
        className,
        styles["shining-text-animation"],
      ].join(" ")}
    >
      {text}
    </span>
  );
};

export default ShiningTextAnimation;