import React, { useState } from "react";
import "./Slider.scss";

interface SliderProp {
  imagesPaths: string[];
}
const Slider = ({ imagesPaths }: SliderProp) => {
  const [activeSlide, setActiveSlide]: [number, (value: number) => void] =
    useState(0);

  const slideClickHandler = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="container">
      <div className="slides">
        {imagesPaths.map((img, index) => (
          <div
            key={img}
            className={`slide ${activeSlide === index && "active"}`}
            style={{
              backgroundImage: `url('http://localhost:8080${img}')`,
            }}
            onClick={slideClickHandler.bind(null, index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
