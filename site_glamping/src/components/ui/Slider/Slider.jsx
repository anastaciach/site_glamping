import { useState } from "react";
import { sliderList } from "./Slider-data.js";
import ButtonArrow from "../../common/Button-arrow/Button-arrow.jsx"
import "./Slider.scss";

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
  
  const sliderStyle={
    backgroundImage: `url(${slider.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
  return (
    <section className="slider">
      <div className="slider__wrapper" style={sliderStyle}>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      
      <h2>{slider.title}</h2>
      <div>{slider.description}</div>
      <button>Забронировать домик</button>
      <ButtonArrow onClick={handlePrevClick}/>
      <h3>
        ({index + 1} of {sliderList.length})
      </h3>
      </div>

    </section>
  );
}
