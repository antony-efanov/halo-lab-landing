import { FC } from "react";
import { PaginationProps } from "./types";
import { slides } from "../../common";

import { ReactComponent as LeftArrow } from "../../../../assets/Slider/icons/ChevronLeft.svg";
import { ReactComponent as RightArrow } from "../../../../assets/Slider/icons/ChevronRight.svg";

const Pagination: FC<PaginationProps> = ({
  setCurrentSlide,
  setSlideContent,
  currentSlide,
}) => {
  const onPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(4);
      setSlideContent(slides[4]);
    } else {
      setCurrentSlide((prev: number) => prev - 1);
      setSlideContent(slides[currentSlide - 1]);
    }
  };

  const onNextSlide = () => {
    if (currentSlide === 4) {
      setCurrentSlide(0);
      setSlideContent(slides[0]);
    } else {
      setCurrentSlide((prev: number) => prev + 1);
      setSlideContent(slides[currentSlide + 1]);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={onPrevSlide}
        className="pagination__button pagination__button_left"
      >
        <LeftArrow />
      </button>
      <div className="pagination__current-page">
        {`${currentSlide + 1}`}
        <span className="pagination__pages-amount">{"/5"}</span>
      </div>
      <button
        onClick={onNextSlide}
        className="pagination__button pagination__button_right"
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default Pagination;
