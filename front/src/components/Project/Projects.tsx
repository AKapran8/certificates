import React, { useEffect, useState } from "react";

import {
  IProject,
  IProjectsResponse,
  ITechnologiesResponse,
} from "../../models/project.model";

import "./Projects.scss";
import TechnologiesFilter from "./Technologies-filter";

const Project = () => {
  const [technologies, setTechnologies]: [
    { id: number; text: string }[] | [],
    any
  ] = useState([]);
  const [selectedTechnologies, setSelectedTEchnologies]: [
    { value: number; label: string }[],
    any
  ] = useState([]);
  const [projects, setProjects] = useState<IProject[] | null>([]);
  const [modifiedProjects, setModifiedProjects] = useState<IProject[] | null>(
    []
  );

  useEffect(() => {
    fetch(`http://localhost:8080/api/utils/technologies`)
      .then((res) => res.json())
      .then((data: ITechnologiesResponse) => {
        setTechnologies(
          Object.entries(data.technologies).map(([name, { id, text }]) => ({
            value: id,
            label: text,
          }))
        );
      });

    fetch(`http://localhost:8080/api/projects`)
      .then((res) => res.json())
      .then((data: IProjectsResponse) => setProjects(data.list));
  }, []);

  const onFilterProjects = (
    filtersList: { value: number; label: string }[]
  ) => {
    setSelectedTEchnologies(filtersList);
  };

  if (!projects) {
    return <div>Loading...</div>;
  }

  if (selectedTechnologies?.length) {
    const filteredProjects = projects.filter((proj) => {
      return proj.technologies.some((tech) =>
        selectedTechnologies.some((filter) => filter.value === tech.id)
      );
    });
    setModifiedProjects(filteredProjects);
  }

  return (
    <div className="projects">
      {technologies && (
        <TechnologiesFilter
          onFilterProjects={onFilterProjects}
          options={technologies}
        />
      )}

      {!selectedTechnologies?.length &&
        projects?.length &&
        projects.map((p) => (
          <div className="block" key={p.key}>
            <img src={`http://localhost:8080${p!.imagesPaths[0]}`} alt={p.title} className="img" />
            <p>
              {p.title} <strong>{p.description}</strong>
            </p>
          </div>
        ))}
      {!modifiedProjects?.length && <p>No data found.</p>}
    </div>
  );
};

export default Project;
