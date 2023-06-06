import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ICertificate } from "../../models/certificates.model";

import "./Content.scss";

const Content = () => {
  const { path } = useParams<{ path: string }>();
  const [certificate, setCertificate] = useState<ICertificate | null>(null);

  useEffect(() => {
    fetch(`https://andrii-kapran.cyclic.app/api/certificates/${path}`)
      .then((res) => res.json())
      .then((data: ICertificate) => setCertificate(data));
  }, [path]);

  if (!certificate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <div className="content-pdf">
        <iframe
          title={certificate.title}
          src={`https://andrii-kapran.cyclic.app${certificate!.filePath}`}
          height="600px"
        ></iframe>
      </div>

      <div className="content-description">
        <h3 className="content-title">{certificate!.title}</h3>
        {certificate?.organization && (
          <p className="organization">
            <a href={certificate.organizationLink}>
              Organization <strong>{certificate?.organization}</strong>
            </a>
          </p>
        )}
        {certificate?.educationPeriod && (
          <p>
            Education Period <strong>{certificate?.educationPeriod}</strong>
          </p>
        )}
        {certificate.dateOfReceiving && (
          <p>
            Date of receiving <strong>{certificate?.dateOfReceiving}</strong>
          </p>
        )}

        {certificate?.credentialID && (
          <p>
            Certificate ID <strong>{certificate?.credentialID}</strong>
          </p>
        )}
        {certificate?.expiredDate && (
          <p>
            Expired date <strong>{certificate?.expiredDate}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Content;
