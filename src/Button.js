import React from "react";
import "./Button.css";

const Button = ({ type, children, onClick }) => {
  const classNames = `custom-button ${type}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
