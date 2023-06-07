import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  IProject,
  IProjectByKeyResponse,
  ITechnologiesResponse,
} from "../../models/project.model";

import "./Project.scss";

const Project = () => {
  const [technologies, setTechnologies]: [
    { id: number; text: string }[] | [],
    any
  ] = useState([]);

  const [selectedTechnologies, setSelectedTechnologies]: [number[], any] =
    useState([]);
  const { key } = useParams<{ key: string }>();
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/technologies`)
      .then((res) => res.json())
      .then((data: ITechnologiesResponse) => {
        console.log(data.technologies);
        setTechnologies(
          Object.entries(data.technologies).map(([name, { id, text }]) => ({
            id,
            text,
          }))
        );
      });

    fetch(`http://localhost:8080/api/projects/${key}`)
      .then((res) => res.json())
      .then((data: IProjectByKeyResponse) => setProject(data.project));
  }, [key]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const showData = ({ id }: { id: number }) => {
    setSelectedTechnologies((prev: number[]) => [...prev, id]);
  };

  return (
    <div className="project">
      <ul>
        {technologies &&
          technologies.map(
            (technology) =>
              typeof technology.id === "number" && (
                <li key={technology.id}>
                  <input
                    type="checkbox"
                    onChange={showData.bind(null, { id: technology.id })}
                  />
                  {technology.text}
                </li>
              )
          )}
      </ul>
    </div>
  );
};

export default Project;
