import React, { useState } from "react";
import Values from "../Values.json"
import Dates from "./Dates"

export default function WindowPop() {
  
  const triCity = {
    cities : [Values.cities[0], Values.cities[1], Values.cities[2]]
  }

  const [selectedCity, setSelectedCity] = useState(null)

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
  }

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <select className="form-select" aria-label="Default select example" onChange={handleCityChange}>
              <option selected>Wybierz miasto</option>
              {triCity.cities.map((city, index) =>(
                <option key={index} value={index + 1}>
                  {city}
                </option>
              ))}
            </select> <br></br>
            <select className="form-select" aria-label="Default select example" onChange={handleCityChange}>
              <option selected>Wybierz dzielnicę</option>              
              {selectedCity === 1 ? <option value="1">One</option> : ''}
              {selectedCity === 2 ? <option value="1">Two</option> : ''}
              {selectedCity === 3 ? <option value="1">Three</option> : ''}
            </select> <br></br>
            <Dates/> <br></br>
            <select className="form-select" aria-label="Default select example">
              <option selected>Wybierz godzinę</option>
              <option value="1">{Values.hours[0]}</option>
              <option value="2">{Values.hours[1]}</option>
              <option value="3">{Values.hours[2]}</option>
              <option value="3">{Values.hours[3]}</option>
              <option value="3">{Values.hours[4]}</option>
              <option value="3">{Values.hours[5]}</option>
              <option value="3">{Values.hours[6]}</option>
            </select> <br></br>
            <p>Czy chcesz wynająć trenera?</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Tak
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Nie
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
