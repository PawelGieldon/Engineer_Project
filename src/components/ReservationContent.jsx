import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { LuMinusCircle } from "react-icons/lu";
import WindowPop from "./WindowPop";

export default function ReservationContent() {
    const [count, setCount] = useState(0)
    const [countForBalls, setCountForBalls] = useState(0)
    const [countForGloves, setCountForGloves] = useState(0)
    const [countForVests, setCountForVests] = useState(0)
    

    const incrementForBalls = () => {
      setCountForBalls(countForBalls + 1)
    }
    const incrementforGloves = () => {
      setCountForGloves(countForGloves + 1)
    }
    const incrementforVests = () => {
      setCountForVests(countForVests + 1)
    }

    const onlyoneincrement = () => {
      if(count == 0) {
        setCount(count + 1)
      }
    }
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    }
    const decrementForBalls = () => {
      if (countForBalls > 0) {
        setCountForBalls(countForBalls - 1);
      }
    }
    const decrementForGloves = () => {
      if (countForGloves > 0) {
        setCountForGloves(countForGloves - 1);
      }
    }
    const decrementForVests = () => {
      if (countForVests > 0) {
        setCountForVests(countForVests - 1);
      }
    }

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
          <span className="badge bg-secondary">{count}</span>
          <FaPlus className="plus-icon" onClick={onlyoneincrement}/>
          <LuMinusCircle className="minus-icon" onClick={decrement} />
        </div>
        <div className="pitch-image-container">
          <img
            className="pitch-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevvrWksFMClmVHLlYWdcd0wfqQzsVLbFDXw&usqp=CAU"
            alt="ball"
          />
          <span className="badge bg-secondary">{countForBalls}</span>
          <FaPlus className="plus-icon" onClick={incrementForBalls} />
          <LuMinusCircle className="minus-icon" onClick={decrementForBalls} />
        </div>
        <div className="pitch-image-container">
          <img
            className="pitch-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07VFDy5tmihmjbXzVzYAvhH272_qbTIfEeg&usqp=CAU"
            alt="gloves"
          />
          <span className="badge bg-secondary">{countForGloves}</span>
          <FaPlus className="plus-icon" onClick={incrementforGloves} />
          <LuMinusCircle className="minus-icon" onClick={decrementForGloves} />
        </div>
        <div className="pitch-image-container">
          <img
            className="pitch-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT278Xr6f6ltfG-k1WqXjmhVjp7qgmpEnHSPA&usqp=CAU"
            alt="vests"
          />
          <span className="badge bg-secondary">{countForVests}</span>
          <FaPlus className="plus-icon" onClick={incrementforVests} />
          <LuMinusCircle className="minus-icon" onClick={decrementForVests}/>
        </div>
        <button
        type="button"
        className="btn btn-success my-button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Zarezerwuj
        </button>
      </div>
      {count > 0 ? <WindowPop countForBalls={countForBalls} countForGloves={countForGloves} countForVests={countForVests}/> : ''}
      <footer>
        <p>&copy; TWOJA FIRMA</p>
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="mailto:kontakt@twojafirma.com">kontakt@twojafirma.com</a>
      </footer>    
    </div>
  );
}
