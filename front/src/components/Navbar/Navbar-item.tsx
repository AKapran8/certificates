import React from "react";
import "./Navbar-item.scss";
import { INavbarCertificate } from "../../models/certificates.model";

interface INavbarListItemProp {
  index: number;
  item: INavbarCertificate;
}

const NavbarItem = ({ item, index }: INavbarListItemProp) => {
  return (
    <ul className="navbar-item">
      {index + 1}. {item.text}
    </ul>
  );
};

export default NavbarItem;
