import React, { useEffect, useRef, useState } from "react";
import "../../CSS/Form.css";

const Form = () => {
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [driversCount, setDriversCount] = useState("");
  const [isCommercial, setIsCommercial] = useState("");
  const [canUseOutSide, setCanUserOutSide] = useState("");
  const [currentRange, setCurrentRange] = useState(0);
  const [registeredDate, setRegisteredDate] = useState("");

  let slide1 = useRef();
  let slide2 = useRef(null);
  let slide3 = useRef(null);

  console.log(slide1.current);
  let slideIndex = 1;

  // Next/previous controls
  let plusSlides = (e) => {
    showSlides((slideIndex += e));
    console.log("next button pressed");
  };

  var showSlides = (n) => {
    var i;
    //var slides = document.getElementsByClassName("form-slide");
    if (n > 3) {
      slideIndex = 1;
    }

    console.log(slide1.current.length);

    // if (n === 1) {
    //   slide1.current.style.display = "block";
    //   slide2.current.style.display = "none";
    //   slide3.current.style.display = "none";
    // }
    if (n === 2) {
      slide2.current.style.display = "block";
      slide1.current.style.display = "none";
      slide3.current.style.display = "none";
    }

    if (n === 3) {
      slide3.current.style.display = "block";
      slide1.current.style.display = "none";
      slide2.current.style.display = "none";
    }
  };

  // useEffect(() => {
  //   showSlides(slideIndex);
  // }, []);

  return (
    <React.Fragment>
      <div className="form-main">
        <section
          style={{ display: "block" }}
          className="name-section form-slide "
          ref={slide1}
        >
          <span className="section__intro">Personnel Information</span>
          <select
            className="form-select"
            aria-label="Prefix"
            value={salutation}
            onChange={(e) => {
              setSalutation(e.target.value);
            }}
          >
            <option defaultValue disabled>
              Salutation
            </option>
            <option value="1">Mr.</option>
            <option value="2">Miss</option>
            <option value="3">Mrs.</option>
          </select>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              aria-label="First Name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Last Name"
              aria-label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Contact No.
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Contact No."
              aria-label="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary next"
            onClick={() => plusSlides(1)}
          >
            Next
          </button>
        </section>

        <section className="owner-address form-slide" ref={slide2}>
          <span className="section__intro">Address Details</span>
          <div className="input__card">
            <textarea
              type="text"
              className="form-control"
              placeholder="Address Line 1"
              required
              rows="2"
              name={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </div>
          <div className="input__card">
            <textarea
              type="text"
              className="form-control"
              placeholder="Address Line 2"
              required
              rows="2"
              name={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              required
              name={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="PostCode/Zip Code"
              required
              name={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary next"
            onClick={() => plusSlides(1)}
          >
            Next
          </button>
        </section>

        <section className="owner-vehicle form-slide " ref={slide3}>
          <span className="section__intro">Vehicle Details</span>
          <div className="vehicle-type">
            <label>Vehicle Type</label>
            <select
              className="form-select"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option>Select a Vehicle Type</option>
              <option value="Cabriolet ">Cabriolet</option>
              <option value="Coupe">Coupe</option>
              <option value="Estate">Estate</option>
              <option value="HatchBack">HatchBack</option>
              <option value="Others">Others</option>
            </select>
            <label>Engine Size</label>
            <select
              className="form-select"
              value={engineSize}
              onChange={(e) => setEngineSize(e.target.value)}
            >
              <option>Select Engine Size</option>
              <option value="1000">1000</option>
              <option value="1600">1600</option>
              <option value="2000">2000</option>
              <option value="2500">2500</option>
              <option value="3000">3000</option>
              <option value="Others">Others</option>
            </select>
            <label>Additional Drivers</label>
            <select
              className="form-select"
              value={driversCount}
              onChange={(e) => setDriversCount(e.target.value)}
            >
              <option>Additional Drivers using the Car</option>
              <option value="1000">1</option>
              <option value="1600">2</option>
              <option value="2000">3</option>
              <option value="2500">4</option>
              <option value="3000">&gt;4</option>
            </select>
            <label htmlFor="commercialPurpose">
              Will the vehicle be used for commercial purposes?
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="commercialPurpose"
                id="commercialPurposeYes"
                value={isCommercial}
                onChange={(e) => setIsCommercial(e.target.value)}
              />
              <label
                className="form-check-label"
                htmlFor="commercialPurposeYes"
              >
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="commercialPurpose"
                id="commercialPurposeNo"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="commercialPurposeNo">
                No
              </label>
            </div>

            <label htmlFor="outsideStates">
              Will the vehicle be used outside the registered state?
            </label>
            <div className="form-check" name="outsideStates">
              <input
                className="form-check-input"
                type="radio"
                name="outsideStates"
                id="outsideStateYes"
                value={canUseOutSide}
                onChange={(e) => setCanUserOutSide(e.target.value)}
              />
              <label className="form-check-label" htmlFor="outsideStateYes">
                Yes
              </label>
            </div>
            <div className="form-check" name="outsideStates">
              <input
                className="form-check-input"
                type="radio"
                name="outsideStates"
                id="outsideStateNo"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="outsideStateNo">
                No
              </label>
            </div>
            <div className="registered__date">
              <label>Registered Date</label>
              <input
                type="date"
                className="form-control"
                value={registeredDate}
                onChange={(e) => setRegisteredDate(e.target.value)}
              />
            </div>
            <div className="curr__Range">
              <label>Current Range(0-50000)</label>
              <span> {currentRange}</span>
              <input
                type="range"
                className="form-range"
                step="1000"
                min="0"
                max="50000"
                value={currentRange}
                onChange={(e) => setCurrentRange(e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className="form__submission">
          <button
          //   onClick={submitForm}
          >
            Submit
          </button>
          <button>Reset</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
