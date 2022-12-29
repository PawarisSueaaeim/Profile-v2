import React from "react";
import "../Content.css";
import { CertificateData } from "../db/CertificateData";

//  ใข้ props ในการส่งข้อมูลที่ config มาจาก data file //

export default function Certificate() {
  return (
    <div className="content-bg">
      <h4>Certificate</h4>
      <div className="content-box-grid-2">
        {CertificateData.map((items) => {
          return <div className="certificate-card">{items.image}</div>;
        })}
      </div>
    </div>
  );
}
