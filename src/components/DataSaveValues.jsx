import React from "react";
import { useLocation } from "react-router-dom";

export default function DataSave() {
  const location = useLocation();

  const { selectedCity, selectedDistrict, selectedHour, selectedTrainer} =
    location.state || {};

  return (
    <div className="dataSave-container">
      <div className="images-container">
        <img
          className="left-image"
          src="https://lawnuk.com/wp-content/uploads/2014/01/Green%20Grass.jpg"
          alt="murawa"
        />
        <img
          className="right-image"
          src="https://lawnuk.com/wp-content/uploads/2014/01/Green%20Grass.jpg"
          alt=""
        />
      </div>
      <div className="data-container">
        {selectedCity && <h2>Twoja rezerwacja została potwierdzona!</h2>}
        {selectedCity && <p>Miasto: {selectedCity}</p>}
        {selectedDistrict && <p>Dzielnica: {selectedDistrict}</p>}
        {selectedHour && <p>Godzina: {selectedHour}</p>}
        {selectedTrainer && <p>Trener: {selectedTrainer}</p>}
        
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
