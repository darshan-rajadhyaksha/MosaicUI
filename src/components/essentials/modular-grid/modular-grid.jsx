import styles from "./modular-grid.module.css";

const ModularGridItem = (props) => {
  const {
    xs = 12,
    sm = 12,
    md = 12,
    lg = 12,
    xl = 12,
    xxl = 12,
    children,
    className = "",
    ...rest
  } = props;
  return (
    <div 
      {...rest}
      className={[
        className,
        styles["grid-item"],
        styles[`col-xs-${xs}`],
        styles[`col-sm-${sm}`],
        styles[`col-md-${md}`],
        styles[`col-lg-${lg}`],
        styles[`col-xl-${xl}`],
        styles[`col-xxl-${xxl}`],
      ].join(" ")}
    >
      {children}
    </div>
  );
};

const ModularGrid = (props) => {
  const {
    children,
    spacing = 16,
    variant = "none",
    className = "",
    style = {},
    ...rest
  } = props;
  return (
    <div
      {...rest}
      style={{ 
        ...style,
        "--grid-spacing": spacing 
      }} 
      className={[
        className,
        styles["modular-grid"],
        styles[`variant-${variant}`]
      ].join(" ")
    }
    >
      {children}
    </div>
  );
};

export { ModularGridItem };
export default ModularGrid;