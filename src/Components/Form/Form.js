import React from "react";
import "../../CSS/Form.css";

const Form = () => {
  return (
    <React.Fragment>
      <div className="form-main">
        <section className="name-section">
          <span className="section__intro">Personnel Information</span>
          <select class="form-select" aria-label="Prefix">
            <option selected disabled>
              Salutation
            </option>
            <option value="1">Mr.</option>
            <option value="2">Miss</option>
            <option value="3">Mrs.</option>
          </select>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="First Name"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Last Name"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Contact No.
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Contact No."
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Email"
            />
          </div>
          <button type="button" class="btn btn-secondary">
            Next
          </button>
        </section>

        <section className="owner-address">
          <span className="section__intro">Address Details</span>
          <div className="input__card">
            <textarea
              type="text"
              class="form-control"
              placeholder="Address Line 1"
              required
              rows="2"
              //   name={addressLine1}
              // onChange={(e) => setAddrL1(e.target.value)}
            />
          </div>
          <div className="input__card">
            <textarea
              type="text"
              class="form-control"
              placeholder="Address Line 2"
              required
              rows="2"
              //   name={addressLine1}
              // onChange={(e) => setAddrL1(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control"
              placeholder="City"
              required
              //   name={city}
              //   onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              class="form-control"
              placeholder="PostCode/Zip Code"
              required
              //   name={pincode}
              //   onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
        </section>

        <section className="owner-address">
          <span className="section__intro">Vehicle Details</span>
          <div className="vehicle-type">
            <label>Vehicle Type</label>
            <select className="form-select">
              <option>Select a Vehicle Type</option>
              <option value="Cabriolet ">Cabriolet</option>
              <option value="Coupe">Coupe</option>
              <option value="Estate">Estate</option>
              <option value="HatchBack">HatchBack</option>
              <option value="Others">Others</option>
            </select>
            <label>Engine Size</label>
            <select className="form-select">
              <option>Select Engine Size</option>
              <option value="1000">1000</option>
              <option value="1600">1600</option>
              <option value="2000">2000</option>
              <option value="2500">2500</option>
              <option value="3000">3000</option>
              <option value="Others">Others</option>
            </select>
            <label>Additional Drivers</label>
            <select className="form-select">
              <option>Additional Drivers using the Car</option>
              <option value="1000">1</option>
              <option value="1600">2</option>
              <option value="2000">3</option>
              <option value="2500">4</option>
              <option value="3000">&gt;4</option>
            </select>
            <label>Will the vehicle be used for commercial purposes?</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="commercialPurpose"
                id="commercialPurposeYes"
              />
              <label className="form-check-label" for="commercialPurposeYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="commercialPurpose"
                id="commercialPurposeNo"
                checked
              />
              <label className="form-check-label" for="commercialPurposeNo">
                No
              </label>
            </div>
            <label>
              Will the vehicle be used outside the registered state?
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="outsideStates"
                id="outsideStateYes"
              />
              <label className="form-check-label" for="outsideStateYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="outsideStates"
                id="outsideStateNo"
                checked
              />
              <label className="form-check-label" for="outsideStateNo">
                No
              </label>
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
