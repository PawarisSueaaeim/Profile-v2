import React from "react";
import "../Content.css";
import ReactTypingEffect from "react-typing-effect";
import * as FaIcons from "react-icons/fa";

//  ใข้ props ในการส่งข้อมูลที่ config มาจาก data file //

export default function Home() {
  return (
    <div className="content-bg">
      <h4>Home</h4>
      <div className="content-box">
        <div className="left-side">
          <ReactTypingEffect
            className="typing"
            text={[
              "Hello, My name is Pawaris Suea-aeim",
              "I'm a Computer Engineer",
            ]}
            speed={80}
            eraseDelay={500}
          />
        </div>
        <div className="right-side">
          <h2>About me</h2>
          <p>♦ Gender: Male</p>
          <p>♦ National: Thai</p>
          <p>♦ Address: Sukhuthai</p>
          <p>♦ Thai: Native</p>
          <p>♦ English: Fair</p>
          <p>♦ Japan: A little bit</p>
          <p>
            Hello, My name is Pawaris Suea-aeim nickname Pleum, I'm 24 years
            old, I'm graduated from Chiang Mai University faculty computer
            engineering, Currently living in Bangkok and working as a Software Tester 
            at Mungmee, Is a company related to the platform application.
          </p>
          <p>
            Spatial metavers:{" "}
            <a
              href="https://spatial.io/s/PAWARISs-Digital-World-627892af5c8a2e0001d0f632?share=2006685969420519881"
              terget="_blank"
            >
              Matavers room
            </a>
          </p>
          <h2>Educations</h2>
          <p>High school Mathematics-Science program</p>
          <p>Bachelor's degree of Computer Engineering</p>
        </div>
        <div className="home-resume">
          <a href="../img/PawarisResume.pdf" download>
            <FaIcons.FaFileDownload className="icons" />
          </a>
          <p>Resume Download</p>
        </div>
      </div>
    </div>
  );
}
