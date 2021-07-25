import React, { useState } from "react";
import "../../CSS/Admin.css";
import { getDriverInfo } from "../../Utility/API.js";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const [action, setAction] = useState("search");
  const [driverId, setDriverId] = useState("");
  const [toggleDriverinfo, setToggleDriverinfo] = useState(true);
  const [driverInfo, setDriverInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const handleAdminActions = async (action) => {
    console.log("handle admin actions ", action, " -> ", driverId);
    let response;
    switch (action) {
      case "Search":
        setToggleDriverinfo(true);
        console.log("Search API in Work");
        response = await getDriverInfo(driverId);
        console.log("Resposne -> ", response);
        break;

      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <div className="admin__main">
        <p className="intro__admin">Admin DashBoard</p>
        <div className="admin__contents">
          <div className="admin__inputs__section">
            <input
              type="number"
              placeholder="enter driver's Id"
              className="form-control"
              name="driverId"
              onChange={(e) => setDriverId(e.target.value)}
            />
            <span className="section__intro">Select Action</span>
            <select
              className="form-select"
              value={action}
              onChange={(e) => setAction(e.target.value)}
            >
              <option value="Search">Search</option>
              <option value="Delete">Delete</option>
            </select>
            <button
              type="button"
              className="btn btn-secondary next"
              onClick={handleAdminActions}
              disabled={driverId === ""}
            >
              {action}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
