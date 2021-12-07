import React from "react";

const Input = ({
  label,
  value,
  setValue,
  type = "text",
  placeholder,
  autoFocus = false,
}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{label}</span>
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
        className="form-control"
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default Input;
