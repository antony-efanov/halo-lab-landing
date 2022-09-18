import { useState } from "react";
import { slides } from "./common";
import { Pagination } from "./components/Pagination";
import { Slide } from "./components/Slide";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideContent, setSlideContent] = useState(slides[currentSlide]);

  const onNextSlide = () => {
    if (currentSlide === 4) {
      setCurrentSlide(0);
      setSlideContent(slides[0]);
    } else {
      setCurrentSlide((prev) => prev + 1);
      setSlideContent(slides[currentSlide + 1]);
    }
  };

  const onPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(4);
      setSlideContent(slides[4]);
    } else {
      setCurrentSlide((prev) => prev - 1);
      setSlideContent(slides[currentSlide - 1]);
    }
  };

  return (
    <section className="slider">
      <div className="slides">
        <div className="slides__thirdly-slide">
          <img
            className="slides__thirdly-slide_image"
            src={
              currentSlide === 1
                ? slides[4].image
                : currentSlide === 0
                ? slides[3].image
                : slides[currentSlide - 2].image
            }
            alt="thirdly"
          />
          <p className="slides__thirdly-slide_title">
            {currentSlide === 1
              ? slides[4].title
              : currentSlide === 0
              ? slides[3].title
              : slides[currentSlide - 2].title}
          </p>
        </div>
        <div className="slides__secondary-slide">
          <img
            className="slides__secondary-slide_image"
            src={
              currentSlide === 0
                ? slides[4].image
                : slides[currentSlide - 1].image
            }
            alt="secondary"
          />
          <p className="slides__secondary-slide_title">
            {currentSlide === 0
              ? slides[4].title
              : slides[currentSlide - 1].title}
          </p>
        </div>
        <Slide
          image={slideContent.image}
          title={slideContent.title}
          text={slideContent.text}
        />
        <div className="slides__secondary-slide">
          <img
            className="slides__secondary-slide_image"
            src={
              currentSlide === 4
                ? slides[0].image
                : slides[currentSlide + 1].image
            }
            alt="secondary"
          />
          <p className="slides__secondary-slide_title">
            {currentSlide === 4
              ? slides[0].title
              : slides[currentSlide + 1].title}
          </p>
        </div>
        <div className="slides__thirdly-slide">
          <img
            className="slides__thirdly-slide_image"
            src={
              currentSlide === 3
                ? slides[0].image
                : currentSlide === 4
                ? slides[1].image
                : slides[currentSlide + 2].image
            }
            alt="thirdly"
          />
          <p className="slides__thirdly-slide_title">
            {currentSlide === 3
              ? slides[0].title
              : currentSlide === 4
              ? slides[1].title
              : slides[currentSlide + 2].title}
          </p>
        </div>
      </div>
      <Pagination
        onNextSlide={onNextSlide}
        onPrevSlide={onPrevSlide}
        currentSlide={currentSlide}
      />
    </section>
  );
};

export default Slider;
