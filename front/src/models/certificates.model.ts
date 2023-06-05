export interface ICertificate {
  organization: string;
  organizationLink: string;
  title: string;
  filePath: string;
  key: string;
  credentialID: string;
  dateOfReceiving: string;
  expiredDate: string;
  path: string;
}

export interface INavbarCertificate {
  text: string;
  url: string;
  key: string;
}
