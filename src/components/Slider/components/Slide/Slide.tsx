import { FC } from "react";
import { SlideProps } from "./types";

const Slide: FC<SlideProps> = ({ image, title, text }) => {
  return (
    <div className="slide">
      <div className="slide__image">
        <img src={image} alt="Forest" />
      </div>
      <h1 className="slide__title">{title}</h1>
      <p className="slide__text">{text}</p>
    </div>
  );
};

export default Slide;
