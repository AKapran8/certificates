import React from "react";

import "./Navbar.scss";
import NavbarList from "./Navbar-list";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Certificates</h1>
        <NavbarList />
      </div>
    </div>
  );
};

export default Navbar;
