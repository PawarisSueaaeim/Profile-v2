import React from "react";
import "../Content.css";
import { ExpData } from "../db/ExpData";
import CardExp from "../component/subComponents/CardExp";

//  ใข้ props ในการส่งข้อมูลที่ config มาจาก data file //

export default function Experience() {

  return (
    <div className="content-bg">
      <h4>Experience</h4>
      <div className="content-box">
        <div className="timeline">
          <CardExp className="container-exp">
            {ExpData.map((items) => {
              return (
                <div className="content">
                  <h5>{items.position}</h5>
                  <h6>{items.time}</h6>
                  <p>{items.title}</p>
                  <p>{items.detail}</p>
                </div>
              );
            })}
          </CardExp>
        </div>
      </div>
    </div>
  );
}
