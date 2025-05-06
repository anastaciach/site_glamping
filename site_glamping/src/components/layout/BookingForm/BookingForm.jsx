import Button from "../../ui/Button";
import "./BookingForm.scss";
export default function BookingForm() {
  return (
    <section className="booking-form">
      <div className="booking-form__wrapper">
      <div className="booking-form__title"></div>
      <div className="booking-form_group">
        <label for="check-in" className="booking-form__label"></label>
        <input
          type="text"
          name="check-in"
          id="check-in"
          className="booking-form__input"
        />
        <label for="check-out" className="booking-form__label"></label>
        <input
          type="text"
          name="check-out"
          id="check-out"
          className="booking-form__input"
        />
        <select
          name="count-guests"
          id="count-guests"
          className="booking-form__select"
        >
          <option value="2-adults">2 взрослых</option>
          <option value="3-adults">3 взрослых</option>
          <option value="4-adults">4 взрослых</option>
          <option value="5-adults">5 взрослых</option>
        </select>
        <Button style={{backgroundColor:"black"}} >Забронировать</Button>
      </div>
      </div>
    </section>
  );
}
