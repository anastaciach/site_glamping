import "./FeaturedListings.scss";
import ButtonArrow from "../../common/Button-arrow/Button-arrow.jsx";
export default function FeaturedListings() {
  return (
    <section className="featured-listings">
      <div className="featured-listings__wrapper">
        <div className="featured-listings__title-group">
          <h2 className="featured-listings__title">Лучшие домики на природе</h2>
          <div className="gallery__controls">
            <ButtonArrow />
            <ButtonArrow inverted={true} />
          </div>
        </div>
        <div className="gallery__list">
            <div className="gallery__item"></div>
        </div>
      </div>
    </section>
  );
}
