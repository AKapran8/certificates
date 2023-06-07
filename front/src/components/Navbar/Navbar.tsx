import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.scss";
import { ICertificate } from "../../models/certificate.model";

interface INavbarProp {
  list: ICertificate[];
}

const Navbar = ({ list }: INavbarProp) => {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">
          <Link to="/">Certificates</Link>
        </h1>
        <nav>
          <ul>
            {list.map((certificate, index) => (
              <li
                className={
                  `/${certificate.path}` === currentURL
                    ? "navbar-item item-active"
                    : "navbar-item"
                }
                key={certificate.path}
              >
                <Link to={certificate.path}>{index +1}. {certificate.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
