import React, { useState, useEffect, useRef } from "react";
import Slide from "../Slide/Slide";
import SliderButton from "../SliderButton/SliderButton";
import { useStateValue } from "../../StateProvider";
import "./Carousel.css";
function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);
  const timeoutRef = useRef(null);
  const [{ images, direction, duration }] = useStateValue();
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (direction === "Reverse") {
        onPrevSlide();
      } else {
        onNextSlide();
      }
    }, duration * 1000);

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  const onNextSlide = () => {
    if (slideIndex < images.length) {
      setSlideIndex((prev) => prev + 1);
    } else {
      setSlideIndex(1);
    }
  };
  const onPrevSlide = () => {
    if (slideIndex > 1) {
      setSlideIndex((prev) => prev - 1);
    } else {
      setSlideIndex(images.length);
    }
  };
  console.log(direction, duration);
  return (
    <div className="carousel">
      {images?.map((url, i) => (
        <Slide
          key={i}
          imgUrl={url}
          active={i + 1 === slideIndex ? true : false}
        />
      ))}
      <SliderButton direction={"next"} handleClick={onNextSlide}>
        {">"}
      </SliderButton>
      <SliderButton direction={"prev"} handleClick={onPrevSlide}>
        {"<"}
      </SliderButton>
    </div>
  );
}

export default Carousel;
