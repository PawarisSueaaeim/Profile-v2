import React from "react";
import "../Content.css";
import { expData } from "../db/expData";
import CardExp from "../component/subComponents/CardExp";

//  ใข้ props ในการส่งข้อมูลที่ config มาจาก data file //

export default function Experience() {

  return (
    <div className="content-bg">
      <h1>Experience</h1>
      <div className="content-box">
        <div className="timeline">
          <CardExp className="container-exp">
            {expData.map((items) => {
              return (
                <div className="content">
                  <h3>{items.position}</h3>
                  <h4>{items.time}</h4>
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
