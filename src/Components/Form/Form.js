import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "../../CSS/Form.css";
import { saveDriverInfo } from "../../Utility/API";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [salutation, setSalutation] = useState("Mr.");
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
  const [commercialUse, setCommercialUse] = useState("No");
  const [outsideState, setOutsideState] = useState("No");
  const [currentValue, setCurrentValue] = useState(0);
  const [registeredDate, setRegisteredDate] = useState("");

  const VALUE_SELECTION = "*required";
  const REQUIRED_FIELD = "can't be empty";
  let history = useHistory();

  const [fieldErrors, setfieldErrors] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    error: false,
    address1: "",
    city: "",
    pinCode: "",
    vehicleType: "",
    engineSize: "",
    driversCount: "",
    currentValue: 0,
    registeredDate: "",
  });

  const updateErrorProps = (prop, updatedValue) => {
    setfieldErrors((prevState) => ({
      ...prevState,
      [prop]: updatedValue,
    }));
  };

  const validationCheckPersonnelDetails = () => {
    console.log(
      "ValidationChecks : ",
      firstName,
      ", ",
      lastName,
      ", ",
      contact,
      ", ",
      salutation
    );
    let validationOk = true;

    if (salutation === "") {
      validationOk = false;
    }

    if (firstName === "") {
      validationOk = false;
      updateErrorProps("firstName", REQUIRED_FIELD);
    }
    if (lastName === "") {
      validationOk = false;
      updateErrorProps("lastName", REQUIRED_FIELD);
    }
    if (contact === "") {
      validationOk = false;
      updateErrorProps("contact", REQUIRED_FIELD);
    } else if (contact.length < 10 || contact.length > 10) {
      validationOk = false;
      updateErrorProps("contact", "Kindly Enter a proper 10 digit Number");
    }

    if (
      !new RegExp(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-za-z]{2,15}/g).test(
        email
      )
    ) {
      validationOk = false;
      updateErrorProps("email", "Enter Correct Email Format");
    }

    if (validationOk) {
      plusSlides(1);
    }
  };

  const validationCheckAddressDetails = () => {
    let validationOk = true;
    if (address1 === "") {
      validationOk = false;
      updateErrorProps("address1", REQUIRED_FIELD);
    }
    if (pinCode === "") {
      validationOk = false;
      updateErrorProps("pinCode", REQUIRED_FIELD);
    }
    if (city === "") {
      validationOk = false;
      updateErrorProps("city", REQUIRED_FIELD);
    }
    if (validationOk) {
      plusSlides(2);
    }
  };

  const validationVehicleDetails = () => {
    let validationOk = true;

    if (vehicleType === "" || vehicleType === "Select a Vehicle Type") {
      validationOk = false;
      updateErrorProps("vehicleType", VALUE_SELECTION);
    }
    if (engineSize === "" || engineSize === "Select Engine Size") {
      validationOk = false;
      updateErrorProps("engineSize", VALUE_SELECTION);
    }
    if (
      driversCount === "" ||
      driversCount === "Additional Drivers using the Car"
    ) {
      validationOk = false;
      updateErrorProps("driversCount", VALUE_SELECTION);
    }

    if (registeredDate === "") {
      validationOk = false;
      updateErrorProps("registeredDate", VALUE_SELECTION);
    }
    if (currentValue === 0) {
      validationOk = false;
      updateErrorProps("currentRange", VALUE_SELECTION);
    }
    if (validationOk) {
      submitForm();
    }
  };

  const submitForm = async (e) => {
    let driverInfo = {
      prefix: salutation,
      firstName,
      lastName,
      contactNo: contact,
      email,
      addressLine1: address1,
      addressLine2: address2,
      city,
      postCode: pinCode,
      vehicleType,
      engineSize,
      additionalDriver: driversCount,
      commercialUse,
      outsideState,
      registeredDate,
      currentValue,
    };
    let response = await saveDriverInfo(driverInfo);
    console.log("save Driver info -> ", response);
    console.log(response.data.driverID);
    const { data, status, message } = response;

    if (status === "SUCCESS") {
      toast.success(message);

      //Route to Quote Display Page
      history.push({
        pathname: `/quote/success/:${data.driverID}`,
        state: data,
      });
      clearFormValues();
    } else {
      toast.error(response.data.message);
      clearFormValues();
    }
  };
  const clearFormValues = () => {
    setAddress1("");
    setAddress2("");
    setSalutation("");
    setFirstName("");
    setLastName("");
    setContact("");
    setPinCode("");
    setCity("");
    setEmail("");
    setOutsideState("");
    setCurrentValue(0);
    setDriversCount("");
    setEngineSize("");
    setCommercialUse("");
    setRegisteredDate("");
    setVehicleType("");
    // setfieldErrors({ ...fieldErrors, [Object.keys(fieldErrors)]: "" });
    // console.log(Object.keys(fieldErrors));
  };

  let slide1 = useRef();
  let slide2 = useRef(null);
  let slide3 = useRef(null);

  // console.log(slide1.current);
  let slideIndex = 1;

  // Next/previous controls
  let plusSlides = (e) => {
    showSlides((slideIndex += e));
    console.log("next button pressed");
  };

  var showSlides = (n) => {
    // var slides = document.getElementsByClassName("form-slide");
    if (n > 3) {
      slideIndex = 1;
    }
    console.log("next value : ", n);

    console.log(slide1.current.length);

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

  return (
    <React.Fragment>
      <div className="form-main sm">
        <section
          style={{ display: "block" }}
          className="name-section form-slide "
          ref={slide1}
        >
          <span className="mb-4 section_intro">Personnel Information</span>
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
          <div className="mb-3 sm">
            <label htmlFor="formGroupExampleInput" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              aria-label="First Name"
              placeholder="Himanshu"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <span
              className="error_message"
              hidden={fieldErrors.firstName === ""}
            >
              {fieldErrors.firstName}
            </span>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Tripathi"
              aria-label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span
              className="error_message"
              hidden={fieldErrors.lastName === ""}
            >
              {fieldErrors.lastName}
            </span>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupContact" className="form-label">
              Contact No.
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupContact"
              placeholder="xxx-xxx-xxxx"
              aria-label="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <span className="error_message" hidden={fieldErrors.contact === ""}>
              {fieldErrors.contact}
            </span>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupEmail"
              placeholder="abc@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error_message" hidden={fieldErrors.email === ""}>
              {fieldErrors.email}
            </span>
          </div>
          <button
            type="button"
            className="btn btn-secondary next"
            onClick={() => validationCheckPersonnelDetails()}
          >
            Next
          </button>
        </section>

        <section className="owner-address form-slide" ref={slide2}>
          <span className="section_intro">Address Details</span>
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
            <span
              className="error_message"
              hidden={fieldErrors.address1 === ""}
            >
              {fieldErrors.address1}
            </span>
          </div>
          <br />
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
          <br />
          <div className="input__card">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              required
              name={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <span className="error_message" hidden={fieldErrors.city === ""}>
              {fieldErrors.city}
            </span>
          </div>
          <br />
          <div className="input__card">
            <input
              type="number"
              className="form-control"
              placeholder="PostCode/Zip Code"
              required
              name={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
            <span className="error_message" hidden={fieldErrors.pinCode === ""}>
              {fieldErrors.pinCode}
            </span>
          </div>
          <button
            type="button"
            className="btn btn-secondary next"
            onClick={() => validationCheckAddressDetails()}
          >
            Next
          </button>
        </section>

        <section className="owner-vehicle form-slide " ref={slide3}>
          <span className="section_intro">Vehicle Details</span>
          <div className="vehicle-type">
            <label>Vehicle Type</label>
            <select
              className="form-select"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option>Select a Vehicle Type</option>
              <option value="Cabriolet">Cabriolet</option>
              <option value="Coupe">Coupe</option>
              <option value="Estate">Estate</option>
              <option value="HatchBack">HatchBack</option>
              <option value="Others">Others</option>
            </select>
            <span
              className="error_message"
              hidden={fieldErrors.vehicleType === ""}
            >
              {fieldErrors.vehicleType}
            </span>
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
            <span
              className="error_message"
              hidden={fieldErrors.engineSize === ""}
            >
              {fieldErrors.engineSize}
            </span>
            <label>Additional Drivers</label>
            <select
              className="form-select"
              value={driversCount}
              onChange={(e) => setDriversCount(e.target.value)}
            >
              <option>Additional Drivers using the Car</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span
              className="error_message"
              hidden={fieldErrors.driversCount === ""}
            >
              {fieldErrors.driversCount}
            </span>
            <label htmlFor="commercialPurpose">
              Will the vehicle be used for commercial purposes?
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="commercialPurpose"
                id="commercialPurposeYes"
                value={commercialUse}
                onChange={(e) => setCommercialUse(e.target.value)}
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
                value={outsideState}
                onChange={(e) => setOutsideState(e.target.value)}
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
              <span
                className="error_message"
                hidden={fieldErrors.registeredDate === ""}
              >
                {fieldErrors.registeredDate}
              </span>
            </div>
            <div className="curr_Range">
              <label>Current Range(0-50000)</label>
              <span> {currentValue}</span>
              <input
                type="range"
                className="form-range"
                step="1000"
                min="0"
                max="50000"
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
              <span
                className="error_message"
                hidden={fieldErrors.currentValue === 0}
              >
                {fieldErrors.currentValue}
              </span>
            </div>

            <div className="form_submission">
              <button
                type="button"
                className="btn btn-secondary submission"
                onClick={() => validationVehicleDetails()}
              >
                Submit
              </button>
              {/* <span> &emsp;</span>

              <button type="button" className="btn btn-secondary submission">
                Reset
              </button> */}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Form;
