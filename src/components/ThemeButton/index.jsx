import React from "react";
import styles from "./ThemeButton.module.sass";

const ThemeButton = (props) => {
  const { toggle, theme } = props;

  let themeClass = styles.btn + " lightTheme";
  if (theme !== false) {
    themeClass = styles.btn + " darkTheme";
  }

  return (
    <button className={themeClass} onClick={toggle}>
      Click to change
    </button>
  );
};

export default ThemeButton;
