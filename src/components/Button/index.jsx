import React from "react";
import styles from "./index.module.css";

const index = ({
  category = "",
  type = "button",
  onClick = () => {},
  children,
  size = "normal",
  outlined,
  startIcon,
  endIcon,
  aria_label,
  disabled,
  className,
  width
}) => {
  return (
    <button
      className={`${styles.button} ${styles[category]} ${styles[size]} ${outlined && styles.outlined_buttons} ${className}`}
      type={type}
      onClick={onClick}
      disabled={category == "disabled"}
      aria-label={aria_label}
      style={{width:width}}

    >
      <span>{startIcon}</span>
      <span>{children}</span>
      <span>{endIcon}</span>
    </button>
  );
};

export default index;
