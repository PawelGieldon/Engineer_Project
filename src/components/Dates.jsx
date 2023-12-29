import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Dates() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <div className="kalendarz">
        <header>
          <p>Wybierz dzień</p>
        </header>
        <Calendar onChange={handleDateChange} value={date} />
        <footer>
          <p>Wybrana data: {date.toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}
