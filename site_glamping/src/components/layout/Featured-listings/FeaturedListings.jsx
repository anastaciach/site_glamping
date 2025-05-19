import "./FeaturedListings.scss";
import { useState } from "react";
import ButtonArrow from "../../common/Button-arrow/Button-arrow.jsx";
import image1 from "./images/Rectangle2.png";
import image2 from "./images/Rectangle2_1.png";
import image3 from "./images/Rectangle2_2.png";
import image4 from "./images/Rectangle2_3.png";
import image5 from "./images/Rectangle2_4.png";
import image6 from "./images/Rectangle2_5.png";
import image7 from "./images/Rectangle2_6.png";
const images = [image1, image2, image3, image4, image5, image6, image7];
const ITEMS_PER_VIEW=7;


export default function FeaturedListings() {
  const[startIndex,setStartIndex]=useState(0);

  const handleNext=()=>{
    setStartIndex((prev)=>(prev+1)%images.length);
  };
  const handlePrev=()=>{
    setStartIndex((prev)=>(prev-1+images.length)%images.length);
  };
  const getVisibleImages=()=>{
    return Array.from({length:ITEMS_PER_VIEW},(_,i)=>images[(startIndex+i)%images.length]);
  }
  return (
    <section className="featured-listings">
      <div className="featured-listings__wrapper">
        <div className="featured-listings__title-group">
          <h2 className="featured-listings__title">Лучшие домики на природе</h2>
          <div className="featured-listings__controls"> 
            <ButtonArrow onClick={handlePrev}/>
            <ButtonArrow onClick={handleNext} inverted={true} />
          </div>
        </div>
        <div className="featured-listings__gallery"> 
          {getVisibleImages().map((image, index) => (
            <div className="featured-listings__gallery-item" key={index}> 
              <img src={image} alt={`Домик ${index + 1}`} className="featured-listings__image"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}