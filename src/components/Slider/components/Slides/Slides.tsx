import { FC } from "react";
import { SlidesProps } from "./types";
import { slides } from "../../common";

const Slides: FC<SlidesProps> = ({ currentSlide, slideContent }) => {
  const slidesImages = {
    first: () => {
      return currentSlide === 1
        ? slides[4].image
        : currentSlide === 0
        ? slides[3].image
        : slides[currentSlide - 2].image;
    },
    second: () => {
      return currentSlide === 0
        ? slides[4].image
        : slides[currentSlide - 1].image;
    },
    fourth: () => {
      return currentSlide === 4
        ? slides[0].image
        : slides[currentSlide + 1].image;
    },
    fifth: () => {
      return currentSlide === 3
        ? slides[0].image
        : currentSlide === 4
        ? slides[1].image
        : slides[currentSlide + 2].image;
    },
  };

  const slidesTitles = {
    first: () => {
      return currentSlide === 1
        ? slides[4].title
        : currentSlide === 0
        ? slides[3].title
        : slides[currentSlide - 2].title;
    },
    second: () => {
      return currentSlide === 0
        ? slides[4].title
        : slides[currentSlide - 1].title;
    },
    fourth: () => {
      return currentSlide === 4
        ? slides[0].title
        : slides[currentSlide + 1].title;
    },
    fifth: () => {
      return currentSlide === 3
        ? slides[0].title
        : currentSlide === 4
        ? slides[1].title
        : slides[currentSlide + 2].title;
    },
  };

  return (
    <div className="slides">
      <div className="slides__thirdly-slide">
        <img
          className="slides__thirdly-slide_image"
          src={slidesImages.first()}
          alt="thirdly"
        />
        <p className="slides__thirdly-slide_title">{slidesTitles.first()}</p>
      </div>
      <div className="slides__secondary-slide">
        <img
          className="slides__secondary-slide_image"
          src={slidesImages.second()}
          alt="secondary"
        />
        <p className="slides__secondary-slide_title">{slidesTitles.second()}</p>
      </div>
      <div className="slide">
        <div className="slide__image">
          <img src={slideContent.image} alt="Forest" />
        </div>
        <h1 className="slide__title">{slideContent.title}</h1>
        <p className="slide__text">{slideContent.text}</p>
      </div>
      <div className="slides__secondary-slide">
        <img
          className="slides__secondary-slide_image"
          src={slidesImages.fourth()}
          alt="secondary"
        />
        <p className="slides__secondary-slide_title">{slidesTitles.fourth()}</p>
      </div>
      <div className="slides__thirdly-slide">
        <img
          className="slides__thirdly-slide_image"
          src={slidesImages.fifth()}
          alt="thirdly"
        />
        <p className="slides__thirdly-slide_title">{slidesTitles.fifth()}</p>
      </div>
    </div>
  );
};

export default Slides;
