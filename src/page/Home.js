import React from "react";
import "../Content.css";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <div className="content-bg">
      <div className="container">
        <h3>Home</h3>
        <div className="content-box">
          <div className="left-side">
            <ReactTypingEffect
              className="typing"
              text={[
                "Hello, My name is Pawaris Sueaaeim Computer Engineering",
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
              Hello, My name is Pawaris Suea-aeim nickname Pleum, I'm 23 years
              old, I'm graduated from Chiang Mai University faculty computer
              engineering, Currently living in Rayong and working as a System
              Engineer/IT Support at The amata city, Is a company related to the
              production of auto parts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
