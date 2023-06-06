import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ICertificate } from "../../models/certificates.model";

const Content = () => {
  const currentUrl: string = window.location.href;
  const { path } = useParams<{ path: string }>();
  const [certificate, setCertificate] = useState<ICertificate | null>(null);

  useEffect(() => {
    fetch(`${currentUrl}/api/certificates/${path}`)
      .then((res) => res.json())
      .then((data: ICertificate) => setCertificate(data));
  }, [path]);

  if (!certificate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <div className="block">
        <div>
          <iframe
            title={certificate.title}
            src={`http://localhost:8080${certificate!.filePath}`}
            width="100%"
            height="600px"
          ></iframe>
        </div>

        <div className="content-description">
          <h3 className="content-title">{certificate?.title}</h3>
          <p>
            Place <strong>{certificate?.organization}</strong>
          </p>
          <p>
            Education Period <strong>{certificate?.educationPeriod}</strong>
          </p>
          <p>
            Date of receiving <strong>{certificate?.dateOfReceiving}</strong>
          </p>
          {certificate?.credentialID}
          <p>
            Certificate ID <strong>{certificate?.credentialID}</strong>
          </p>
          {certificate?.expiredDate}
          <p>
            Expired date <strong>{certificate?.expiredDate}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
