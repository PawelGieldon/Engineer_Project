import React from "react";
import { FaPlus } from "react-icons/fa";
import { LuMinusCircle } from "react-icons/lu";

export default function ReservationContent() {
  const handlePlusClick = () => {
    console.log("aaa");
    // Dodaj inne operacje, które mają być wykonane po kliknięciu plusa
  };

  return (
    <div className="reservation-container">
      <div className="reservation-images-container">
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
      <div className="services-container">
        <div className="pitch-image-container">
            <img
            className="pitch-image"
            src="https://www.cardenpark.co.uk/wp-content/uploads/2021/06/WA2U2367-scaled.jpg"
            alt="pitch"
            />
            <FaPlus className="plus-icon"/>
            <LuMinusCircle className="minus-icon" />
        </div>
        
      </div>
    </div>
  );
}
