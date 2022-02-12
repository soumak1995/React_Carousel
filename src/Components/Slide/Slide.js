import React from "react";
import "./Slide.css";
function Slide({ imgUrl, active }) {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={imgUrl} alt="img" />
    </div>
  );
}

export default Slide;
