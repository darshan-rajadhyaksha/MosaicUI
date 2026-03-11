import { memo, useMemo } from "react";
import styles from "./showcase-window.module.css";

const ShowcaseWindow = (props) => {
  const {
    title,
    children,
    className,
    ...restProps
  } = props;

  const titleElementId = useMemo(() => (
    `showcase-window-title-${Math.random().toString(36).substring(2)}`
  ), []);

  return (
    <div
      aria-label="Showcase"
      aria-describedby={titleElementId}
      role="region"
      {...restProps}
      className={[
        className,
        styles["showcase-window"]
      ].join(" ")}
    >
      <div 
        aria-hidden={true}
        className={styles["header"]}
      >
        <div className={styles["controls"]}>
          <span className={styles["close"]}></span>
          <span className={styles["minimize"]}></span>
          <span className={styles["maximize"]}></span>
        </div>
        <div 
          className={styles["title"]}
          id={titleElementId}
        >
          {title}
        </div>
      </div>
      <div className={styles["panel"]}>
        {children}
      </div>
    </div>
  );
};

export default memo(ShowcaseWindow);