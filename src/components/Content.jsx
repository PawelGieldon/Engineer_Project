import React from "react";
import { useState, useEffect } from "react";
import Reserving from "./Reserving";
import { Outlet, Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="content-container">
      <img
        src="https://en.reformsports.com/oxegrebi/2022/04/artificial-grass-on-football-pitch.jpeg"
        alt="Boisko"
      />
        <button type="button" className="btn btn-success overlay-button">
          <li><Link to="/List">Rezerwuj</Link> </li>
        </button> 
        <h4>Zarezerwuj boisko, sprzęt piłkarski oraz trening z trenerem już teraz ! </h4>       
        <div className="information">                   
          <li><Link to="/List">O ofercie</Link> </li>
          <li><Link to="/List">Dostępność</Link> </li>
          <li><Link to="/List">Coś tam będzie</Link> </li>
          
        </div>
        <footer>
          <p>&copy; 2023 Twoja Firma</p>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="mailto:kontakt@twojafirma.com">kontakt@twojafirma.com</a>
        </footer>
    </div>
    
  );
}
