import React, { useState } from "react";
import "../../CSS/Admin.css";
import { getDriverInfo, deleteDriverInfo } from "../../Utility/API.js";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const [action, setAction] = useState("Search");
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
        setToggleDriverinfo(!toggleDriverinfo);
        if (response && response.status === "SUCCESS") {
          console.log("after if ", response.data);
          setDriverInfo(response.data);
        } else {
          setDriverInfo(response);
          setErrorMessage(response.message);
        }
        setDriverId("");
        console.log(response.data);
        break;

      case "Delete":
        response = await deleteDriverInfo(driverId);
        if (response && response.data.status === "SUCCESS") {
          console.log(response.data);
          setErrorMessage(response.message);
        } else {
          setErrorMessage(response.message);
        }
        break;

      default:
        return "";
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
              onClick={() => handleAdminActions(action)}
              disabled={driverId === ""}
            >
              {action}
            </button>

            <div>{driverInfo.city}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
