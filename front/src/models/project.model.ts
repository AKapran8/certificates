export interface IProject {
  key: string;
  title: string;
  description: string;
  imagesPaths: string[];
  linkToCode: string;
  nodeVersion: string;
  technologies: { id: number; text: string }[];
}

export interface IProjectsResponse {
  message: string;
  list: IProject[];
}

export interface IProjectByKeyResponse {
  message: string;
  project: IProject;
}

export interface ITechnologiesResponse {
  message: string;
  technologies: {[key: string]: ITechnology}[] | [];
}

interface ITechnology {
  id: number;
  text: string;
}