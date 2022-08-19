import React from "react";
import "../Content.css";
import "../Card.css";
import { CardData } from "../component/CardData";

export default function Skills() {
  return (
    <div className="content-bg">
        <h1>Skills</h1>
        <div className="content-box-grid">
          {CardData.map((items) => {
            return (
              <div className="pleum-card">
                <h4>{items.name}</h4>
                <p>{items.skills}</p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
