import React, { Component } from "react";

class footer extends Component {
  render() {
    const { person, year } = this.props;
    return (
      <nav className="navbar bottom navbar-dark bg-success">
        <div className="container-fluid">
          <p>This is a Allstate assignment FSD Project</p>
          <p className="text-center">
            {person} &copy;{year}
          </p>
        </div>
      </nav>
    );
  }
}

export default footer;
