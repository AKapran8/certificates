import React from "react";

import "./Navbar.scss";
import { ICertificate } from "../../models/certificates.model";

interface INavbarProp {
  list: ICertificate[];
  handleCertificate: Function;
}

const Navbar = ({ list, handleCertificate }: INavbarProp) => {
  const certificateHandler = (e: any) => {
    const certificateKey = e.currentTarget.getAttribute("key-value");
    if (certificateKey) handleCertificate(certificateKey);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Certificates</h1>
        <nav>
          <ul>
            {list.map((certificate) => (
              <li
                className="navbar-item"
                key={certificate.key}
                onClick={certificateHandler}
                key-value={certificate.key}
              >
                <a href={certificate.path}>{certificate.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
