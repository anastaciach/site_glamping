import { useState } from "react";
import { sliderList } from "./Slider-data.js";
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

  return (
    <section className="slider">
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      <img class="silder-image" src={slider.url}></img>
      <h2>{slider.title}</h2>
      <div>{slider.description}</div>
      <button>Забронировать</button>

      <h3>
        ({index + 1} of {sliderList.length})
      </h3>
    </section>
  );
}
