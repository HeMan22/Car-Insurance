import React from "react";
import { useLocation } from "react-router-dom";

const DriverQuote = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
};

export default DriverQuote;
