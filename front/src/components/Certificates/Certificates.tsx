import React, { useEffect, useState } from "react";

import "./Certificates.scss";
import {
  ICertificate,
  ICertificatesListResponse,
} from "../../models/certificate.model";

const Certificates = () => {
  const [certificates, setCertificates] = useState<ICertificate[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/certificates/`)
      .then((res) => res.json())
      .then(
        (data: ICertificatesListResponse) =>
          data.list.length && setCertificates(data.list)
      );
  }, []);

  return (
    <div className="certificates">
      <h2 className="certificates-title">Certificates List</h2>
      {!certificates?.length && <p>No data.</p>}
      {certificates.length && (
        <ul className="certificates-list">
          {certificates.map((c) => (
            <li className="certificates-item" key={c.key}>
              <a href={c.path}>{c.title}</a>
              <p>Date of receiving: {c.dateOfReceiving}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Certificates;
