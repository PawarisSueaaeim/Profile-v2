import React from "react";
import "../Content.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { db } from "../db";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";

const ul = document.querySelector('ul')
getDocs(collection(db, "comment")).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {

    const id = doc.id;
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.comment}: ${data.like}`;
    document.getElementById('comment-list').appendChild(li);

    console.log(doc.id, doc.data());
  });
});


export default function Comment() {
  return (
    <div className="content-bg">
      <div className="container">
        <h4>Comment</h4>
        <div className="content-box">
          <form id="comment">
            <label>Comment for me</label><br/>
            <input type="text" id="comment" placeholder="Comment..." className="comment-input mt-3"/><br/>
            <button type="submit" id="btn" className="btn btn-primary mt-3">Submit</button>
          </form>
          <div className="data-list mt-5">
            <ul id="comment-list">
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
