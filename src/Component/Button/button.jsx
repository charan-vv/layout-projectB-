import React from "react";
import "./button.css";
function Button(props) {
  const { text, backgroundColor, color, border, borderRadius, borderColor } =
    props;

  return (
    <button className="btn"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border: border,
        borderRadius: borderRadius,
        borderColor: borderColor,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
