import { Children, memo } from "react";
import styles from "./circular-list.module.css";

const CircularList = (props) => {
  const {
    degreeOffset = 0,
    radius = 100,
    duration = 10 * 1000,
    rotate = true,
    pauseOnHover = false,
    direction = "clockwise",
    children,
    className,
    style,
    ...restProps
  } = props;

  const childrenCount = Children.count(children);
  const _radius = Math.max(0, radius);
  const _duration = Math.min(Math.max(100, duration), 5 * 60 * 1000);

  const getCoordinates = (angle, radius) => {
    const radians = +((Math.PI / 180) * angle).toPrecision(4);
    return {
      x: +((Math.cos(radians) * radius).toFixed(0)),
      y: +((Math.sin(radians) * radius).toFixed(0)),
    };
  };

  return (
    <div
      {...restProps}
      className={[
        className,
        styles["circular-list"],
      ].join(" ")}
      style={{
        ...style,
        "--radius": `${_radius}px`,
        "--duration": `${_duration}ms`,
      }}
    >
      <div
        className={[
          styles["orbit"],
          rotate ? styles[`rotate-${direction}`] : "",
          pauseOnHover ? styles["pause-on-hover"] : "",
        ].join(" ")}
      >
        {Children.map(children, (item, index) => {
          const angle = (Math.abs(degreeOffset) + (360 / childrenCount * index)) % 360;
          const { x, y } = getCoordinates(angle, _radius);
          return (
            <span
              key={`circular-list-item-${index}`}
              style={{
                "--x": `${x}px`,
                "--y": `${y}px`,
                "--angle": `${angle}deg`,
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default memo(CircularList);