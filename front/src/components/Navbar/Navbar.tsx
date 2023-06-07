import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.scss";
import { INavbarCertificate } from "../../models/certificate.model";
import { INavbarProject } from "../../models/project.model";

interface INavbarProp {
  certificates: INavbarCertificate[];
  projects: INavbarProject[];
}

const Navbar = ({ certificates, projects }: INavbarProp) => {
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
            {certificates.map((c, index) => (
              <li
                className={
                  `/${c.path}` === currentURL
                    ? "navbar-item item-active"
                    : "navbar-item"
                }
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


      <div className="navbar-container">
        <h1 className="navbar-title">
          <Link to="/projects">Projects</Link>
        </h1>
        <nav>
          <ul>
            {projects.map((p, index) => (
              <li
                className={
                  `/${p.path}` === currentURL
                    ? "navbar-item item-active"
                    : "navbar-item"
                }
                key={p.path}
              >
                <Link to={p.path}>
                  {index + 1}. {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
