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
  disabled
}) => {
  return (
    <button
      className={`${styles.button} ${styles[category]} ${styles[size]} ${outlined && styles.outlined_buttons}`}
      type={type}
      onClick={onClick}
      disabled={category == "disabled"}
      aria-label={aria_label}
    >
      <span>{startIcon}</span>
      <span>{children}</span>
      <span>{endIcon}</span>
    </button>
  );
};

export default index;
