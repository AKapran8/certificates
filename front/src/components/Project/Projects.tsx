import React, { useEffect, useState } from "react";

import {
  IProject,
  IProjectsResponse,
  ITechnology,
} from "../../models/project.model";

import "./Projects.scss";
import TechnologiesFilter from "./Technologies-filter";

interface IProjectProp {
  technologies: ITechnology[];
}
const Project = ({ technologies }: IProjectProp) => {
  const [projects, setProjects] = useState<IProject[] | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/projects`)
      .then((res) => res.json())
      .then((data: IProjectsResponse) => setProjects(data.list));
  }, []);
console.log(projects)
  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project">
      {technologies && <TechnologiesFilter options={technologies} />}
      {projects?.length && projects.map(p => 
        <div key={p.key}>
          <p>{p.title} <strong>{p.description}</strong></p>
        </div>
        )}
    </div>
  );
};

export default Project;
