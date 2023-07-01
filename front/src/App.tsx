import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Certificate from "./components/Certificate/Certificate";
import Project from "./components/Project/Projects";
import Home from "./components/Home";

import "./App.scss";
import { INavbarResponse, INavbarPart } from "./models/navbar.model";
import ProjectItem from "./components/Project/Project-item";
import Certificates from "./components/Certificates/Certificates";

const App = () => {
  const [navbarData, setNavbarData] = useState<INavbarPart[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/utils/navbar`)
      .then((res) => res.json())
      .then((res: INavbarResponse) => res.data && setNavbarData(res.data));
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <Navbar navbarData={navbarData} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/certificates/:path" element={<Certificate />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:key" element={<ProjectItem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
