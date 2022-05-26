import React from 'react'
import "../App.css";
const Button = ({ children, colorScheme, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      data-testid="cbtn"
      className={`btn ${colorScheme || "red"} ${variant || "ghost"}`}
    >
      {children}
    </button>
  );
};

export default Button