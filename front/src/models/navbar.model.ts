import { INavbarCertificate } from "./certificate.model";
import { INavbarProject } from "./project.model";

export interface INavbarResponse {
    message: string;
    certificates: INavbarCertificate[];
    projects: INavbarProject[]
}