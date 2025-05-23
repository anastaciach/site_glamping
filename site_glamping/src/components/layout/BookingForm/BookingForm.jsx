import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
// registerLocale("ru", ru);
import Button from "../../ui/Button";
import "./BookingForm.scss";

import userSVG from'../../../assets/images/svg/user.svg'
// import { ReactComponent as UserSVG } from '../../../assets/images/svg/user.svg'; 

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleCheckInChange = (date) => {
    setCheckIn(date);
    if (checkOut && date > checkOut) {
      setCheckOut(null);
    }
  };

  const handleCheckOutChange = (date) => {
    if (checkIn && date > checkIn) {
      setCheckOut(date);
    }
  };

  return (
    <section className="booking-form">
      <div className="booking-form__wrapper">
        <div className="booking-form__title">Забронировать домик</div>
        <div className="booking-form__group">
          <div className="booking-form__item">
            <label htmlFor="check-in" className="booking-form__label">
              ЗАЕЗД
            </label>
            <div className="date-wrapper">
              <DatePicker
                id="check-in"
                selected={checkIn}
                onChange={handleCheckInChange}
                dateFormat="dd.MM.yyyy"
                placeholderText="Выберите дату"
                className="booking-form__input"
                minDate={new Date()}
                locale={ru}
              />
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3157 3.95483H17.9823V3.02142C17.9823 2.46631 17.5281 2.01221 16.9729 2.01221C16.4178 2.01221 15.9639 2.46631 15.9639 3.02142V3.95483H9.36995V3.02142C9.36995 2.46631 8.91585 2.01221 8.36075 2.01221C7.80564 2.01221 7.35154 2.46631 7.35154 3.02142V3.95483H5.01818C4.06285 3.95483 3.28552 4.73198 3.28552 5.68731V18.4854C3.28552 19.4407 4.06267 20.2178 5.01818 20.2178H18.7676C20.5767 20.2178 22.0482 18.7464 22.0482 16.9373V5.68731C22.0482 4.73198 21.271 3.95483 20.3157 3.95483ZM5.01818 5.33612H7.35275C7.36604 5.87983 7.81393 6.32064 8.36075 6.32064C8.90739 6.32064 9.3551 5.87983 9.36857 5.33612H15.9651C15.9786 5.87983 16.4261 6.32064 16.9729 6.32064C17.5198 6.32064 17.9677 5.87983 17.9811 5.33612H20.3157C20.5063 5.33612 20.6669 5.49704 20.6669 5.68731V8.38498H4.66682V5.68731C4.66682 5.49687 4.82774 5.33612 5.01818 5.33612ZM4.66682 18.4854V9.7447H20.6669V15.7986H17.8444L17.8237 18.8366H5.01818C4.82774 18.8366 4.66682 18.6756 4.66682 18.4854ZM19.2055 18.7835L19.2165 17.1799H20.6494C20.5484 17.9669 19.9652 18.6033 19.2055 18.7835Z"
                  fill="#1A3A27"
                />
                <path
                  d="M8.69399 13.0049C8.70089 12.3721 8.92656 11.9094 9.28881 11.6009C9.65122 11.2999 10.1437 11.1533 10.6768 11.1533C12.058 11.1533 12.516 12.0793 12.516 12.5343C12.516 13.6607 11.8868 13.6607 11.8868 13.6839V13.6992C11.8868 13.761 12.6662 13.761 12.6662 14.9569C12.6662 15.6127 12.2287 16.6464 10.6698 16.6464C8.52944 16.6464 8.52288 14.9489 8.55707 14.548H9.856C9.84909 14.8336 9.91073 15.0493 10.0406 15.1883C10.1704 15.3656 10.3688 15.4276 10.6081 15.4276C10.9978 15.4276 11.244 15.2656 11.244 14.8258C11.244 14.355 10.9227 14.2702 10.6081 14.2702C10.4097 14.2702 10.3141 14.2935 10.2115 14.3091V13.2596C10.3141 13.2674 10.4235 13.2905 10.6081 13.2905C10.8954 13.2905 11.2577 13.2213 11.2577 12.8048C11.2577 12.4652 10.9158 12.334 10.6356 12.334C10.2662 12.334 9.96547 12.5576 9.97911 13.0051L8.69399 13.0049Z"
                  fill="#1A3A27"
                />
                <path
                  d="M14.6979 13.4909H13.5834V12.38C14.2738 12.3956 14.9578 12.1026 14.9985 11.2151H16.1199V16.5847H14.6979V13.4909Z"
                  fill="#1A3A27"
                />
              </svg>
            </div>
          </div>
          <div className="booking-form__item">
            <label htmlFor="check-out" className="booking-form__label">
              ВЫЕЗД
            </label>
            <div className="date-wrapper">
              <DatePicker
                id="check-out"
                selected={checkOut}
                onChange={handleCheckOutChange}
                dateFormat="dd.MM.yyyy"
                placeholderText="Выберите дату"
                className="booking-form__input"
                minDate={checkIn || new Date()}
                locale={ru}
              />
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3157 3.95483H17.9823V3.02142C17.9823 2.46631 17.5281 2.01221 16.9729 2.01221C16.4178 2.01221 15.9639 2.46631 15.9639 3.02142V3.95483H9.36995V3.02142C9.36995 2.46631 8.91585 2.01221 8.36075 2.01221C7.80564 2.01221 7.35154 2.46631 7.35154 3.02142V3.95483H5.01818C4.06285 3.95483 3.28552 4.73198 3.28552 5.68731V18.4854C3.28552 19.4407 4.06267 20.2178 5.01818 20.2178H18.7676C20.5767 20.2178 22.0482 18.7464 22.0482 16.9373V5.68731C22.0482 4.73198 21.271 3.95483 20.3157 3.95483ZM5.01818 5.33612H7.35275C7.36604 5.87983 7.81393 6.32064 8.36075 6.32064C8.90739 6.32064 9.3551 5.87983 9.36857 5.33612H15.9651C15.9786 5.87983 16.4261 6.32064 16.9729 6.32064C17.5198 6.32064 17.9677 5.87983 17.9811 5.33612H20.3157C20.5063 5.33612 20.6669 5.49704 20.6669 5.68731V8.38498H4.66682V5.68731C4.66682 5.49687 4.82774 5.33612 5.01818 5.33612ZM4.66682 18.4854V9.7447H20.6669V15.7986H17.8444L17.8237 18.8366H5.01818C4.82774 18.8366 4.66682 18.6756 4.66682 18.4854ZM19.2055 18.7835L19.2165 17.1799H20.6494C20.5484 17.9669 19.9652 18.6033 19.2055 18.7835Z"
                  fill="#1A3A27"
                />
                <path
                  d="M8.69399 13.0049C8.70089 12.3721 8.92656 11.9094 9.28881 11.6009C9.65122 11.2999 10.1437 11.1533 10.6768 11.1533C12.058 11.1533 12.516 12.0793 12.516 12.5343C12.516 13.6607 11.8868 13.6607 11.8868 13.6839V13.6992C11.8868 13.761 12.6662 13.761 12.6662 14.9569C12.6662 15.6127 12.2287 16.6464 10.6698 16.6464C8.52944 16.6464 8.52288 14.9489 8.55707 14.548H9.856C9.84909 14.8336 9.91073 15.0493 10.0406 15.1883C10.1704 15.3656 10.3688 15.4276 10.6081 15.4276C10.9978 15.4276 11.244 15.2656 11.244 14.8258C11.244 14.355 10.9227 14.2702 10.6081 14.2702C10.4097 14.2702 10.3141 14.2935 10.2115 14.3091V13.2596C10.3141 13.2674 10.4235 13.2905 10.6081 13.2905C10.8954 13.2905 11.2577 13.2213 11.2577 12.8048C11.2577 12.4652 10.9158 12.334 10.6356 12.334C10.2662 12.334 9.96547 12.5576 9.97911 13.0051L8.69399 13.0049Z"
                  fill="#1A3A27"
                />
                <path
                  d="M14.6979 13.4909H13.5834V12.38C14.2738 12.3956 14.9578 12.1026 14.9985 11.2151H16.1199V16.5847H14.6979V13.4909Z"
                  fill="#1A3A27"
                />
              </svg>
            </div>
          </div>
          <div className="booking-form__item" >
            <label htmlFor="count-guests" className="booking-form__label">КОЛИЧЕСТВО ГОСТЕЙ</label>
            <div className="select__wrapper">
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
                <img src={userSVG} className="select_image" />
            </div>
          </div>
          <Button style={{ backgroundColor: "black",position:'relative',top:'0.8rem',}}>Забронировать</Button>
        </div>
      </div>
    </section>
  );
}