import React, { useEffect, useState } from "react";
import {
  IProject,
  IProjectsResponse,
  ITechnologiesResponse,
} from "../../models/project.model";
import "./Projects.scss";
import TechnologiesFilter from "./Technologies-filter";

const Project = () => {
  const [technologies, setTechnologies] = useState<
    { value: number; label: string }[]
  >([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    { value: number; label: string }[]
  >([]);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/utils/technologies`)
      .then((res) => res.json())
      .then((data: ITechnologiesResponse) => {
        const techOptions = Object.entries(data.technologies).map(
          ([name, { id, text }]) => ({
            value: id as unknown as number,
            label: text as unknown as string,
          })
        );
        setTechnologies(techOptions);
      });

    fetch(`http://localhost:8080/api/projects`)
      .then((res) => res.json())
      .then((data: IProjectsResponse) => setProjects(data.list));
  }, []);

  const onFilterProjects = (
    filtersList: { value: number; label: string }[]
  ) => {
    setSelectedTechnologies(filtersList);
  };

  let filteredProjects: IProject[] = JSON.parse(JSON.stringify(projects));

  if (selectedTechnologies.length) {
    filteredProjects = projects.filter((project) => {
      const projectTechnologies = project.technologies.map(
        (technology) => technology.id
      );
      const hasAllTechnologies = selectedTechnologies.every((filterTech) =>
        projectTechnologies.includes(filterTech.value)
      );
      return hasAllTechnologies;
    });
  }

  return (
    <div className="projects">
      {technologies.length > 0 && (
        <TechnologiesFilter
          onFilterProjects={onFilterProjects}
          options={technologies}
        />
      )}

      {projects.length > 0 ? (
        filteredProjects.length > 0 ? (
          filteredProjects.map((p) => (
            <a className="block" href={`projects/${p.key}`} key={p.key}>
              <img
                src={`http://localhost:8080${p.imagesPaths[0]}`}
                alt={p.title}
                className="img"
              />
              <div className="project-description">
                <p>{p.title}</p>
                <p>
                  Technologies:{" "}
                  {p.technologies.map((t, i) => (
                    <span key={t.id}>
                      {i + 1 === p.technologies.length
                        ? `${t.text}.`
                        : `${t.text}, `}
                    </span>
                  ))}
                </p>
              </div>
            </a>
          ))
        ) : (
          <div className="empty">No data found.</div>
        )
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Project;
