import React, { useState } from "react";
import "../../CSS/Admin.css";
import {
  getDriverInfo,
  deleteDriverInfo,
  updateDriverInfo,
} from "../../Utility/API.js";
// import { useHistory } from "react-router-dom";
import UpdateDriverInfo from "../UpdateDriverInfo/UpdateDriverInfo";

const Admin = () => {
  const [action, setAction] = useState("Search");
  const [driverId, setDriverId] = useState("");
  const [toggleDriverinfo, setToggleDriverinfo] = useState(true);
  const [driverInfo, setDriverInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // let history = useHistory();

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

  const handleDriverInfoUpdates = async (updatedDriverInfo) => {
    console.log("Handle Driver updates::", updatedDriverInfo);
    // api call
    let response = await updateDriverInfo(updatedDriverInfo);
    console.log("update response::", response);
    const { status } = response.data;
    if (status === "success") {
      setToggleDriverinfo(!toggleDriverinfo);
      setDriverId("");
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
          </div>

          {driverInfo.email && (
            <>
              <div className="admin__info__section">
                <UpdateDriverInfo
                  driverInfo={driverInfo}
                  manageDriverInfoUpdates={handleDriverInfoUpdates}
                  errorMessage={errorMessage}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
