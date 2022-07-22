import React from "react";
import "../Content.css";

export default function Skills() {

  const CardData = [
    {
      name: 'CAMS',
      skills: 'react',
    },
    {
      name: 'CAMS',
      skills: 'react',
    },
    {
      name: 'CAMS',
      skills: 'react',
    },
    {
      name: 'CAMS',
      skills: 'react',
    },
  ]

  return (
    <div className="content-bg">
      <h1>Skills</h1>
      <div className="content-box">
        {CardData.map( (index,items) => {
          return (
            <div key={index} className="card">
              <p>{items.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
