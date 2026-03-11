import { memo } from "react";
import styles from "./avatar-group.module.css";

const AvatarGroup = (props) => {
  const {
    label,
    avatars,
    additionalText,
    size = 48,
    className,
    ...restProps
  } = props;

  return (
    <div
      {...restProps}
      role="group"
      aria-label={label}
      className={[
        className,
        styles["avatar-group"],
      ].join(" ")}
    >
      {avatars.map((avatarEntry, index) => (
        <a
          key={`avatar-${index}-${avatarEntry.name}`}
          href={avatarEntry.url}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            "--avatar-size": `${size}px`,
          }}
        >
          <img
            src={avatarEntry.image}
            alt={avatarEntry.name || `Avatar ${index + 1}`}
          />
        </a>
      ))}
      {additionalText && (
        <span>
          {additionalText}
        </span>
      )}
    </div>
  );
};

export default memo(AvatarGroup);