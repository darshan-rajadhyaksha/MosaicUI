import { useCallback, useEffect, useState } from "react";
import styles from "./ghost-cubes-background.module.css";

const Cube = (props) => {
  const {
    index,
  } = props;

  const getCube = useCallback(() => ({
    id: `cube-${Math.floor(Math.random() * 10000)}`,
    xPos: Math.random() * 100, // position in % of width
    size: Math.random() * 100, // size in px
    durationMs: 10000 + Math.random() * 20000,
    delayMs: Math.random() * 5000 * index,
  }), [index]);

  const [cube, setCube] = useState(getCube);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCube(getCube());
    }, cube.durationMs + cube.delayMs + 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [cube, getCube]);

  return (
    <span
      key={cube.id}
      aria-hidden={true}
      className={styles["cube"]}
      style={{
        "--size": `${cube.size}px`,
        "--xPos": `${cube.xPos}%`,
        "--durationMs": `${cube.durationMs}ms`,
        "--delayMs": `${cube.delayMs}ms`,
      }}
    />
  );
};

const GhostCubesBackground = (props) => {
  const {
    children,
    className = "",
    style = null,
    wrapperProps = {},
    wrapperTagName = "div",
    backgroundColor = "#d37185",
    ...rest
  } = props;

  const cubesCount = 20;

  const {
    className: wrapperClassName = "", 
    ...restWrapperProps
  } = wrapperProps;

  const Wrapper = wrapperTagName || "div";

  return (
    <div 
      {...rest}
      className={[
        className,
        styles["ghost-cube-background"]
      ].join(" ")}
      style={{
        ...style,
        "--background-color": backgroundColor,
      }}
    >
      <div 
        aria-hidden={true}
        className={styles["cubes"]}
      >
        {new Array(cubesCount).fill(0).map((_, index) => (
          <Cube
            key={`cube-${index}`}
            index={index}
          />
        ))}
      </div>
      <Wrapper
        {...restWrapperProps} 
        className={[
          wrapperClassName,
          styles["wrapper"]
        ].join(" ")}
      >
        {children}
      </Wrapper>
    </div>
  );
};

export default GhostCubesBackground;