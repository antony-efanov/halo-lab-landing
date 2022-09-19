import { useState } from "react";
import { slides } from "./common";
import { Pagination } from "./components/Pagination";
import Slides from "./components/Slides/Slides";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideContent, setSlideContent] = useState(slides[currentSlide]);

  return (
    <section id="slider" className="slider">
      <Slides currentSlide={currentSlide} slideContent={slideContent} />
      <Pagination
        setCurrentSlide={setCurrentSlide}
        setSlideContent={setSlideContent}
        currentSlide={currentSlide}
      />
    </section>
  );
};

export default Slider;
