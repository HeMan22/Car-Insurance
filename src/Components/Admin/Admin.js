import React, { useState } from "react";
import "../css/Admin.css";
const Admin = () => {
  const [action, setAction] = useState("search");
  const [driverId, setDriverId] = useState("");
  const handleAdminActions = () => {
    console.log("handle admin actions");
  };

  return (
    <React.Fragment>
      <div className="admin__main">
        <p className="intro__admin">Admin DashBoard</p>
        <div className="admin__contents">
          <input
            type="text"
            placeholder="enter driver's Id"
            className="form-control"
            name="driverId"
            onChange={(e) => setDriverId(e.target.value)}
          />
          <span className="section__intro">Select Action</span>
          <select
            className="form-select salutation__text"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="Search">Search</option>
            <option value="Update">Update</option>
            <option value="Delete">Delete</option>
          </select>
          <button onClick={handleAdminActions} disabled={driverId === ""}>
            {action}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
