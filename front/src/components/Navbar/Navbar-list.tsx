import React from "react";
import "./Navbar-list.scss";
import NavbarListItem from "./Navbar-list-item";

const NavbarList = () => {
  const list = [
    { id: 1, title: "REact" },
    { id: 2, title: "Angular" },
  ];
  return (
    <ul>
      {list.map((item, i) => (
        <NavbarListItem key={item.id} item={item} index={i} />
      ))}
    </ul>
  );
};

export default NavbarList;
