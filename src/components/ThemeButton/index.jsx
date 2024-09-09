import React from "react";

const ThemeButton = (props) => {
  const { toggle } = props;

  return (
    <button className="btn" onClick={toggle}>
      Click to change
    </button>
  );
};

export default ThemeButton;
