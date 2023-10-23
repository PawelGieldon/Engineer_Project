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
        <h4 className="description">Zarezerwuj boisko, sprzęt piłkarski oraz trening z trenerem już teraz ! </h4>       
        <div className="information">                   
          <li><Link to="/List">O ofercie</Link> </li>
          <li><Link to="/List">Dostępność</Link> </li>
          <li><Link to="/List">Coś tam będzie</Link> </li>
        </div>      
        <div className="advantages-container">
          <h4 className="advantage">Dlaczego powinieneś skorzystać z naszych usług?</h4>
          <img
          src="https://t4.ftcdn.net/jpg/03/18/48/95/360_F_318489561_qpVjxV7GEF4btKaiD4OWe78vX737Jnzz.jpg"
          alt="Boisko"
          className="second-grass"
          />
          <div className="paragraphs-container">
            <p>Oferujemy dostęp do nawet 30 boisk piłkarskich w obrębie trójmiasta</p>
            <p>Świetna lokalizacja, do każdego z boiska dojedziesz komunikacją miejską w bardzo krótkim czasie</p>
            <p>Bardzo niskie ceny!</p>
            <p>Ogromna dostępność!</p>
          </div>
          <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 1.72L15 4.52v5.108a4.124 4.124 0 0 1-6 0V4.519l-3.5-2.8L2 4.52V22h20V4.52l-3.5-2.8ZM9 12.14a6.151 6.151 0 0 0 6 0V20h-2v-5h-2v5H9v-7.86ZM7 20H4V5.48l1.5-1.2L7 5.48V20Zm10 0V5.48l1.5-1.2l1.5 1.2V20h-3Z"></path></svg>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4z"></path></svg>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.438 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125ZM12 12q.825 0 1.413-.587T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Z"></path></svg>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm5.56 10.46l5.93-5.93l-1.06-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06z"></path></svg>
          </div>
        </div>
        <footer>
          <p>&copy; TWOJA FIRMA</p>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="mailto:kontakt@twojafirma.com">kontakt@twojafirma.com</a>
        </footer>
    </div>
    
  );
}
