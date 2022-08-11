import React from "react";
import "../Content.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { db } from "../db";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { query, where, onSnapshot } from "firebase/firestore";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";


export default function Comment() {

  const [comment, setComment] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const data = {
      comment: comment,
    }
    console.log(data);
    setComment('');
  }

  return (
    <div className="content-bg">
      <div className="container">
        <h4>Comment</h4>
        <div className="content-box">
          <form id="comment" onSubmit={handleSubmit}>
            <label htmlFor="comment">Comment for me</label>
            <br />
            <input
              type="text"
              id="comment"
              placeholder="Comment..."
              className="comment-input mt-3"
              onChange={ (e) => {
                //dom
                setComment(e.target.value);
              }}
              value={comment}
            />
            <br />
            <button type="submit" id="btn" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
          <div className="data-list mt-5">
            <ul id="comment-list">
              {/* {data.map((data, index) => {
                return (
                  <li key={index}>
                    {data.comment}
                  </li>
                );
              })} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
