import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Slider from "./slider/Slider";

import { IProject, IProjectByKeyResponse } from "../../models/project.model";

import "./Project-item.scss";

const ProjectItem = () => {
  const { key } = useParams<{ key: string }>();
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/projects/${key}`)
      .then((res) => res.json())
      .then((data: IProjectByKeyResponse) => setProject(data.project));
  }, [key]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project">
      <h1 className="project-title">{project.title}</h1>
      <p className="project-description">{project.description}</p>
      <p className="project-link">
        <a href={project.linkToCode} target="blank">
          View the Code on GitHub
        </a>
      </p>
      <p>
        Technologies:&nbsp;
        {project.technologies.map((t, i) => (
          <span key={t.id}>
            {t.text}
            {i + 1 === project.technologies.length
              ? "."
              : ", "}
          </span>
        ))}
      </p>
      {project.imagesPaths && <Slider imagesPaths={project.imagesPaths} />}
    </div>
  );
};

export default ProjectItem;
