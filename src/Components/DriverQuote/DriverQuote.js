import React from "react";
import { useLocation } from "react-router-dom";
import "../../CSS/DriverQuote.css";

const DriverQuote = () => {
  const location = useLocation();
  console.log(location.state);
  const { driverID, prefix, firstName, lastName, quotation } = location.state;

  return (
    <React.Fragment>
      <div className="quote__main">
        <p className="p_msg">
          Congratulations Your Quote has been generated !!!!
        </p>
        <div className="quote_info">
          <p>
            Driver ID: &emsp; &emsp; <span> {driverID}</span>
          </p>
          <p>
            Driver Name: &emsp;{""}
            <span>{prefix + " " + firstName + " " + lastName}</span>
          </p>
          <p>
            Quotation: &emsp; &emsp;<span>${quotation.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DriverQuote;
