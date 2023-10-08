import React from "react";
import { useState, useEffect } from "react";
import Reserving from "./Reserving";

export default function Component() {
  return (
    <div className="content-container">
      <img
        src="https://en.reformsports.com/oxegrebi/2022/04/artificial-grass-on-football-pitch.jpeg"
        alt="Boisko"
      />
        <button type="button" className="btn btn-success overlay-button">
          <Reserving />
        </button> 
        <h4>Zarezerwuj boisko, sprzęt piłkarski oraz trening z trenerem już teraz ! </h4>
    </div>
  );
}
