import React from "react";
import "../Content.css";
import * as FaIcons from "react-icons/fa";
import { useState, useEffect } from "react";
import { addComment, getComment } from "../db/utilities";

export default function Comment() {
  const [comment, setComment] = useState("");
  const [getCommentList, setGetCommentList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      comment: comment,
    };
    console.log(data);
    if (data.comment === "") {
      alert("Please enter a comment");
    } else {
      addComment(data);
    }
    setComment("");
  }

  function updateCommentList() {
    getComment().then((com) => {
      setGetCommentList(com);
      // console.log('test updated comment')
    });
  }

  useEffect(() => {
    updateCommentList();
  }, []);
  return (
    <div className="content-bg">
      <div className="container">
        <h1>Comment</h1>
        <div className="content-box">
          <form id="comment" onSubmit={handleSubmit}>
            <label htmlFor="comment">Comment for me</label>
            <br />
            <input
              type="text"
              id="comment"
              placeholder="Comment..."
              className="comment-input mt-3"
              onChange={(e) => {
                //dom
                setComment(e.target.value);
              }}
              value={comment}
            />
            <br />
            <button onClick={updateCommentList} type="submit" id="btn" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
          <div className="data-list mt-5">
            <ul id="comment-list">
              {getCommentList.map((items, index) => {
                return (
                  <div key={index}>
                    <p>
                      <FaIcons.FaUserAlt className="users-icons" />
                      {items.name}
                    </p>
                    <p>Comment: {items.comment}</p>
                    <p><FaIcons.FaRegThumbsUp/>:{items.like}</p>
                    <p><FaIcons.FaRegThumbsDown/>:{items.unlike}</p>
                    <hr></hr>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
