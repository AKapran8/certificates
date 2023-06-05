import React from "react";
import "./Navbar-list-item.scss";

const NavbarListItem = ({ item, index }: any) => {
  return (
    <ul className="navbar-item">
      {index + 1} {item.title}
    </ul>
  );
};

export default NavbarListItem;
