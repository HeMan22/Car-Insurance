import React from "react";
import { useHistory } from "react-router-dom";
import "../../CSS/Header.css";

const Header = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div
            className="navbar-brand mb-0 fs-bolder fw-3 h1 app-logo"
            onClick={() => history.push("/")}
          >
            <div className="logo-img">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.jpg"}
                alt="Logo"
              ></img>
            </div>
            <span className="label">Car's Safety</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navLinks navbar-nav">
              <li className="nav-item" onClick={() => history.push("/quote")}>
                Get Quote
              </li>
              <li className="nav-item" onClick={() => history.push("/admin")}>
                Admin
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
