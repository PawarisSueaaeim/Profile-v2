import React from "react";
import "../Content.css";
import { CertificateData } from "../component/CertificateData";

export default function Certificate() {
  return (
    <div className="content-bg">
      <div className="container">
        <h1>Certificate</h1>
        <div className="content-2-grid">
          {CertificateData.map((items) => {
            return (
              <div className="certificate-card">
                {items.image}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
