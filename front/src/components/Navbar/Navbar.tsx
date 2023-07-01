import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.scss";
import { INavbarPart } from "../../models/navbar.model";

interface INavbarProp {
  navbarData: INavbarPart[];
}

const Navbar = ({ navbarData }: INavbarProp) => {
  const location = useLocation();
  const currentURL = location.pathname;

  console.log(navbarData);
  return (
    <div className="navbar">
      {navbarData.map((element) => (
        <div className="navbar-container" key={element.title}>
          <h1
            className={`navbar-title ${
              currentURL.includes(element.title) ? "item-active" : ""
            }`}
          >
            <Link to={`/${element.title}`}>{element.title}</Link>
          </h1>
          <nav>
            <ul>
              {element.value.map((c, index) => (
                <li
                  className={`navbar-item ${
                    `/${c.path}` === currentURL ? "item-active" : ""
                  }`}
                  key={c.path}
                >
                  <Link to={c.path}>
                    {index + 1}. {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
