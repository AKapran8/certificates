import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/content/Content";

import "./App.scss";
import { ICertificate } from "./models/certificates.model";

const App = () => {
  const [certificatesList, setCertificatesList] = useState<ICertificate[]>([]);
  const [selectedCertificate, setSelectedCertificate] =
    useState<ICertificate | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/certificates`)
      .then((res) => res.json())
      .then((list: ICertificate[]) => setCertificatesList(list || []));
  }, []);

  const selectCertificate = (key: string): void => {
    const selectedCertificate =
      certificatesList.find((c) => c.key === key) || null;
    setSelectedCertificate(selectedCertificate);
  };

  return (
    <div className="wrapper">
      <Navbar list={certificatesList} handleCertificate={selectCertificate} />
      <Content certificate={selectedCertificate} />
    </div>
  );
};

export default App;
