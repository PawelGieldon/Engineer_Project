import React, { useState, useEffect} from "react";
import Values from "../Values.json";
import Dates from "./Dates";


export default function WindowPop() {
  const triCity = {
    cities: [Values.cities[0], Values.cities[1], Values.cities[2]],
  };

  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedDistrict, setSelectedDistrict] = useState(0);
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false)
  

  const handleCityChange = (event) => {
    setSelectedCity(Number(event.target.value));
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(Number(event.target.value));
  };

  const handleHourChange = (event) => {
    setSelectedHour(Number(event.target.value));
  };

  const handleTrainerChange = (event) => {
    setSelectedTrainer(Number(event.target.value));
  };

  

  const handleSubmit = () => {
    
    if (
      selectedCity === 0 ||
      selectedDistrict === 0 ||
      selectedHour === 0 ||
      selectedTrainer === null
    ) {
      setError(
        <div className="alert alert-danger w-100" role="alert">
          Proszę o zaznaczenie wszystkich opcji
        </div>      
      );   
      
    } else {
      setError(null)
      
    }
    console.log(error)
  };

  useEffect(() => {
    if (selectedCity !== 0 && selectedDistrict !== 0 && selectedHour !== 0 && selectedTrainer !== null) {
      setShowModal(true);
    }
  }, [selectedCity, selectedDistrict, selectedHour, selectedTrainer]);
  
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
                Rezerwacja
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleCityChange}
              >
                <option selected value="0">
                  Wybierz miasto
                </option>
                {triCity.cities.map((city, index) => (
                  <option key={index} value={index + 1}>
                    {city}
                  </option>
                ))}
              </select>{" "}
              <br></br>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleDistrictChange}
              >
                <option selected value="0">
                  Wybierz dzielnice
                </option>
                {selectedCity === 1
                  ? Values.districtGdansk.map((district, index) => (
                      <option key={index} value={index + 1}>
                        {district}
                      </option>
                    ))
                  : selectedCity === 3
                  ? Values.districtSopot.map((district, index) => (
                      <option key={index} value={index + 1}>
                        {district}
                      </option>
                    ))
                  : selectedCity === 2
                  ? Values.districtGdynia.map((district, index) => (
                      <option key={index} value={index + 1}>
                        {district}
                      </option>
                    ))
                  : null}
              </select>
              <br></br>
              <Dates /> <br></br>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleHourChange}
              >
                <option selected value="0">
                  Wybierz godzinę
                </option>
                <option value="1">{Values.hours[0]}</option>
                <option value="2">{Values.hours[1]}</option>
                <option value="3">{Values.hours[2]}</option>
                <option value="3">{Values.hours[3]}</option>
                <option value="3">{Values.hours[4]}</option>
                <option value="3">{Values.hours[5]}</option>
                <option value="3">{Values.hours[6]}</option>
              </select>{" "}
              <br></br>
              <p>Czy chcesz wynająć trenera?</p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                  onChange={handleTrainerChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Tak
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                  onChange={handleTrainerChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
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
                Zamknij
              </button>

              <button
                type="button"
                className="btn btn-primary"                       
                onClick={handleSubmit}  
                data-bs-dismiss={showModal && 'modal'}                             
              >          
                  Rezerwuj            
              </button>
              {error}
            </div>
          </div>
        </div>
      </div>     
  );
}
