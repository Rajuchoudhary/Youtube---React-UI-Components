import React from "react";
import "./InputBox.css";

const InputBox = ({
  id,
  type = "text",
  label = "enter label text",
  placeholder = "enter your text",
}) => {
  return (
    <div className="inputbox">
      <label htmlFor="input" className="label">
        {label}
      </label>
      <input type={type} className="input" id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputBox;
