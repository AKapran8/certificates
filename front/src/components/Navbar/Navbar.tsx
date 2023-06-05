import React from "react";

import "./Navbar.scss";
import NavbarItem from "./Navbar-item";
import { INavbarCertificate } from "../../models/certificates.model";

interface INavbarProp {
  list: INavbarCertificate[];
}

const Navbar = ({ list }: INavbarProp) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Certificates</h1>
        <ul>
          {list.map((item, i) => (
            <NavbarItem key={item.key} item={item} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
