import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IProject, IProjectByKeyResponse } from "../../models/project.model";

import "./Projects.scss";

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
      <h1>{project.title}</h1>

      {project.imagesPaths?.length &&
        project.imagesPaths.map((path) => (
          <div key={path}>
            <img src={`http://localhost:8080${path}`} width="100" alt="" />
          </div>
        ))}
    </div>
  );
};

export default ProjectItem;
