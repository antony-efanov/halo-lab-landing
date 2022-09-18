import { FC } from "react";
import { PaginationProps } from "./types";

import { ReactComponent as LeftArrow } from "../../../../assets/Slider/icons/ChevronLeft.svg";
import { ReactComponent as RightArrow } from "../../../../assets/Slider/icons/ChevronRight.svg";

const Pagination: FC<PaginationProps> = ({
  onNextSlide,
  onPrevSlide,
  currentSlide,
}) => {
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
