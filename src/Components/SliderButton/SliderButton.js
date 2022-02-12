import React from "react";
import "./SliderButton.css";
function SliderButton({ children, handleClick, direction }) {
  return (
    <button
      className={`sliderButton ${direction === "next" ? "next" : "prev"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default SliderButton;
