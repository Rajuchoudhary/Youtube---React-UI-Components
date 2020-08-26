import React from "react";
import "./Button.css";

const Button = ({ text = "button" }) => {
  return (
    <button className="button" type="submit">
      {text}
    </button>
  );
};

export default Button;
