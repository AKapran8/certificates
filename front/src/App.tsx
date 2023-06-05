import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.scss";
import { ICertificate, INavbarCertificate } from "./models/certificates.model";

const App = () => {
  const [certificatesList, setCertificatesList]: [ICertificate[], any] =
    useState([]);
  const [navbarList, setNavbarList]: [INavbarCertificate[], any] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/certificates`)
      .then((res) => res.json())
      .then((res: ICertificate[]) => _initComponent(res));
  }, []);

  const _initComponent = (list: ICertificate[] = []) => {
    if (!list?.length) return;
    setCertificatesList(list);
    const navList = list.map((e: ICertificate) => {
      return { text: e.title, url: e.path, key: e.key };
    });

    setNavbarList(navList);
  };

  return (
    <div className="wrapper">
      <Navbar list={navbarList} />
    </div>
  );
};

export default App;
