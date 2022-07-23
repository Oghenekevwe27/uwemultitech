/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import "./styles.css";

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src="/2.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
        {" "}
        <img src="/3.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
        {" "}
        <img src="/4.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide4">
        {" "}
        <img src="/5.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide5">
        {" "}
        <img src="/6.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide6">
        {" "}
        <img src="/7.png" alt="" />
      </div>
    </div>
  );
};
export default Slider;
