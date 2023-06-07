import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Certificate from "./components/Certificate/Certificate";
import Project from "./components/Project/Project";
import Home from "./components/Home";

import "./App.scss";
import { ICertificate } from "./models/certificate.model";

const App = () => {
  const [certificatesList, setCertificatesList] = useState<ICertificate[]>([]);

  useEffect(() => {
    fetch(`https://andrii-kapran.cyclic.app/api/certificates`)
      .then((res) => res.json())
      .then((list: ICertificate[]) => setCertificatesList(list || []));
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <Navbar list={certificatesList} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates/:path" element={<Certificate />} />
          <Route path="/projects/:key" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
