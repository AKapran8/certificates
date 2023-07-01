export interface ICertificate {
  organization: string;
  organizationLink: string;
  title: string;
  filePath: string;
  key: string;
  credentialID?: string;
  dateOfReceiving: string;
  expiredDate?: string;
  path: string;
  educationPeriod?: string;
}

export interface ICertificateResponse {
  message: string;
  certificate: ICertificate
}