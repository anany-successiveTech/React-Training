import React from "react";

const ColorButton = ({ text, color }) => {
  const style = {
    backgroundColor: color || "gray",
    color: "#fff",
    padding: "2rem 2rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    width: "40%"
  };
  return <button style={style}>{text || "Click me"}</button>
};

export default ColorButton;
