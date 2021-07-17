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
            className="navbar-brand mb-0 h1 logo"
            onClick={() => history.push("/")}
          >
            <img src={process.env.PUBLIC_URL + "/assets/logo.jpg"}></img>
            Car's Safety
          </div>

          <ul className="navLinks">
            <li onClick={() => history.push("/quote")}>Get a quote</li>
            <li onClick={() => history.push("/admin")}>Admin</li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
