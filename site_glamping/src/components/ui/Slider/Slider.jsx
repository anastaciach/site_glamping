import { useState } from "react";
import { sliderList } from "./Slider-data.js";
import ButtonArrow from "../../common/Button-arrow/Button-arrow.jsx";
import Button from "../../ui/Button.jsx";
import "./Slider.scss";
import "../../common/Button-arrow/Button-arrow.scss";

export default function Slider() {
  const [index, setIndex] = useState(0);
  let hasPrev = index > 0;
  let hasNext = index < sliderList.length - 1;
  function handlePrevClick() {
    if (hasPrev) setIndex(index - 1);
  }
  function handleNextClick() {
    if (hasNext) setIndex(index + 1);
  }

  let slider = sliderList[index];

  const sliderStyle = {
    backgroundImage: `url(${slider.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="slider">
      <div className="slider__wrapper" style={sliderStyle}>
        <h2 className="slider__title">{slider.title}</h2>
        <div className="slider__descrription">{slider.description}</div>
        <Button svgIs={true}>Забронировать домик</Button>
        <div className="slider__controls">
          <ButtonArrow onClick={handlePrevClick} />
          <ButtonArrow inverted={true} onClick={handleNextClick} />
        </div>

        <h3>
          ({index + 1} of {sliderList.length})
        </h3>
      </div>
    </section>
  );
}
