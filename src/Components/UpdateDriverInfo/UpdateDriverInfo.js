import React from "react";
import { useState, useEffect } from "react";

const UpdateDriverInfo = ({ driverInfo, manageDriverInfoUpdates }) => {
  const [toUpdateDriverInfo, setToUpdateDriverInfo] = useState({});

  const updateDriverState = (prop, newValue) => {
    console.log("Updating Driver Info");
    setToUpdateDriverInfo({
      ...toUpdateDriverInfo,
      [prop]: newValue,
    });
  };

  const handleDriverInfoUpdates = () => {
    manageDriverInfoUpdates(toUpdateDriverInfo);
  };

  useEffect(() => {
    setToUpdateDriverInfo(driverInfo);
  }, [driverInfo]);

  return (
    <React.Fragment>
      <section className="name-section ">
        <span className="section__intro">Personnel Information</span>
        <select
          className="form-select"
          aria-label="Prefix"
          value={toUpdateDriverInfo.prefix}
          onChange={(e) => {
            updateDriverState("prefix", e.target.value);
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
            placeholder="Himanshu"
            value={toUpdateDriverInfo.firstName}
            onChange={(e) => {
              updateDriverState("firstName", e.target.value);
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
            placeholder="Tripathi"
            aria-label="Last Name"
            value={toUpdateDriverInfo.lastName}
            onChange={(e) => updateDriverState("lastName", e.target.value)}
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
            placeholder="xxx-xxx-xxxx"
            aria-label="Contact"
            value={toUpdateDriverInfo.contactNo}
            onChange={(e) => updateDriverState("contactNo", e.target.value)}
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
            placeholder="abc@example.com"
            value={toUpdateDriverInfo.email}
            onChange={(e) => updateDriverState("email", e.target.value)}
          />
        </div>
      </section>

      <section className="owner-address">
        <span className="section__intro">Address Details</span>
        <div className="input__card">
          <textarea
            type="text"
            className="form-control"
            placeholder="Address Line 1"
            required
            rows="2"
            name={toUpdateDriverInfo.addressLine1}
            value={toUpdateDriverInfo.addressLine1}
            onChange={(e) => updateDriverState("addressLine1", e.target.value)}
          />
        </div>
        <br />
        <div className="input__card">
          <textarea
            type="text"
            className="form-control"
            placeholder="Address Line 2"
            required
            rows="2"
            name={toUpdateDriverInfo.addressLine2}
            value={toUpdateDriverInfo.addressLine2}
            onChange={(e) => updateDriverState("addressLine2", e.target.value)}
          />
        </div>
        <br />
        <div className="input__card">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            required
            name={toUpdateDriverInfo.city}
            value={toUpdateDriverInfo.city}
            onChange={(e) => updateDriverState("city", e.target.value)}
          />
        </div>
        <br />
        <div className="input__card">
          <input
            type="number"
            className="form-control"
            placeholder="PostCode/Zip Code"
            required
            name={toUpdateDriverInfo.pinCode}
            value={toUpdateDriverInfo.postCode}
            onChange={(e) => updateDriverState("postCode", e.target.value)}
          />
        </div>
      </section>
      <button
        className="btn btn-secondary submission"
        onClick={handleDriverInfoUpdates}
      >
        Update
      </button>
    </React.Fragment>
  );
};

export default UpdateDriverInfo;
