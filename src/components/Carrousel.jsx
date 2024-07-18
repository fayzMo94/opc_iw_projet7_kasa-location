import React, { useState } from "react";
import "../styles/Carrousel.scss";
import sliderArrowRight from "../assets/sliderArrowRight.png";
import sliderArrowLeft from "../assets/sliderArrowLeft.png";

const Carrousel = ({ sliderImgs }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index === sliderImgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousSlide = () => {
    if (index === 0) {
      setIndex(sliderImgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${sliderImgs[index]})` }}
      className="carrousel"
    >
      {sliderImgs.length > 1 && (
        <div>
          <img
            onClick={() => previousSlide()}
            className="carrousel__sliderArrow carrousel__sliderArrow--Left"
            src={sliderArrowLeft}
            alt="show previous slide"
          />
          <img
            onClick={() => nextSlide()}
            className="carrousel__sliderArrow carrousel__sliderArrow--Right"
            src={sliderArrowRight}
            alt="show next slide"
          />
          <p className="carrousel__currentSlideTxt carrousel__currentSlideTxt--hidden">
            {index + 1}/{sliderImgs.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default Carrousel;
