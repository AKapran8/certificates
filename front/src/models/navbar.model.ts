export interface INavbarResponse {
  message: string;
  data: INavbarPart[];
}

export interface INavbarPart {
  title: string;
  value: INavbarPartElement[];
}
export interface INavbarPartElement {
  title: string;
  path: string;
}
