import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Certificate from "./components/Certificate/Certificate";
import Project from "./components/Project/Projects";
import Home from "./components/Home";

import "./App.scss";
import { INavbarCertificate } from "./models/certificate.model";
import { INavbarResponse } from "./models/navbar.model";
import { INavbarProject } from "./models/project.model";
import ProjectItem from "./components/Project/Project-item";

const App = () => {
  const [navbarCertificates, setNavbarCertificates] = useState<
    INavbarCertificate[]
  >([]);
  const [navbarProjects, setNavbarProjects] = useState<INavbarProject[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/utils/navbar`)
      .then((res) => res.json())
      .then((data: INavbarResponse) => setNavbarData(data));
  }, []);

  const setNavbarData = (data: INavbarResponse) => {
    setNavbarCertificates(data.certificates);
    setNavbarProjects(data.projects);
  };

  return (
    <Router>
      <div className="wrapper">
        <Navbar projects={navbarProjects} certificates={navbarCertificates} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates/:path" element={<Certificate />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:key" element={<ProjectItem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
