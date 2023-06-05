import React from "react";
import { ICertificate } from "../../models/certificates.model";

import "./Content.scss";

interface IContentProp {
  certificate: ICertificate | null;
}
const Content = ({ certificate }: IContentProp) => {
  return <div className="content">
    {certificate?.key}
  </div>;
};

export default Content;
