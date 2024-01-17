import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Dates(props) {

  

  const handleDateChange = (date) => {
    props.setDate(date);
  };

  const formattedDate = props.date instanceof Date ? props.date.toLocaleDateString() : '';

  return (
    <div>
      <div className="kalendarz">
        <header>
          <p>Wybierz dzień</p>
        </header>
        <Calendar onChange={handleDateChange} value={props.date} />
        <footer>
        <p>Wybrana data: {formattedDate}</p>
        </footer>
      </div>
    </div>
  );
}
