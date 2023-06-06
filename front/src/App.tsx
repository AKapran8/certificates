import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/content/Content";
import Home from "./components/Home";

import "./App.scss";
import { ICertificate } from "./models/certificates.model";

const App = () => {
  const [certificatesList, setCertificatesList] = useState<ICertificate[]>([]);

  useEffect(() => {
    console.log(`${process.env.API_URL}/certificates`)
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
          <Route path="/certificates/:path" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
