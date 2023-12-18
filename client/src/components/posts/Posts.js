import React from "react";
import "./posts.css";
import Post from "../Post/Post";

function Posts(props) {
  return (
    <div className="posts container-fluid row">
      {props.posts.map((post) => (
        <div className="col-md-6" key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
