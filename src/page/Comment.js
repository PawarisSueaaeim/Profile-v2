import React from "react";
import "../Content.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { db } from "../db";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { query, where, onSnapshot } from "firebase/firestore";
import * as FaIcons from "react-icons/fa";

// getDocs(collection(db, "comment")).then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     const data = doc.data();
//     const li = document.createElement("li");
//     li.textContent = `${data.comment}: ${data.like}`;
//     document.getElementById("comment-list").appendChild(li);

//     console.log(data)
//   });
// });

const data = [
  {
    comment: "good",
  },
  {
    comment: "nice",
  },
];

export default function Comment() {
  return (
    <div className="content-bg">
      <div className="container">
        <h4>Comment</h4>
        <div className="content-box">
          <form id="comment">
            <label>Comment for me</label>
            <br />
            <input
              type="text"
              id="comment"
              placeholder="Comment..."
              className="comment-input mt-3"
            />
            <br />
            <button type="submit" id="btn" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
          <div className="data-list mt-5">
            <ul id="comment-list">
              {data.map((data, index) => {
                return (
                  <li key={index}>
                    {data.comment}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
