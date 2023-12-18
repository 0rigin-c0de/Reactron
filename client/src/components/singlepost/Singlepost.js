import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./singlepost.css";
import UserContext from "../../context/UserContext";
import { motion } from "framer-motion";

function Singlepost() {
  //1 - get id from /post/:postId and render post with that id
  let location = useLocation();
  location = location.pathname;
  const postId = location.split("/")[2];

  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    const fetchSinglePost = async () => {
      setProgress(0);
      const res = await axios.get(`http://localhost:5000/api/posts/${postId}`);
      setProgress(30);
      setSinglePost(res.data);
      setProgress(100);
    };

    fetchSinglePost();
    // eslint-disable-next-line
  }, [postId]);

  // to show stored image in api folder
  // make Public folder
  const PF = "http://localhost:5000/images/";

  //2 - delete post if this post belongs to current user
  const context = useContext(UserContext);
  const { user, setProgress, mode } = context;
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/posts/delete/${postId}`,
        {
          headers: {
            token: "bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      // go to homepage after deleting
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // 3 - edit post if this post belongs to current user

  return (
    <motion.div
      whileInView={{ opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`singlepost container-fluid theme-${mode}`}
    >
      <div className="singlepostWrapper">
        <img
          src={
            singlePost.photo
              ? PF + singlePost.photo
              : "https://c4.wallpaperflare.com/wallpaper/405/400/980/winter-snow-sun-light-forest-trees-sunset-wallpaper-preview.jpg"
          }
          alt="img"
          className="singlepostImg"
        />

        <h1 className="singlepostTitle">
          {singlePost.title}
          {/* show delete and edit post icon if this post belongs to current user */}
          {user.username === singlePost.username && (
            <div className="singlepostEdit">
              <i className="singlepostIcon fa-regular fa-pen-to-square"></i>
              <i
                className="singlepostIcon fa-regular fa-trash-can"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>

        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author:
            <b>
              {/* user specific posts ?use=john */}
              <Link className="link" to={`/?user=${singlePost.username}`}>
                {singlePost.username}
              </Link>
            </b>
          </span>
          <span className="singlepostDate">
            {new Date(singlePost.createdAt).toDateString()}
          </span>
        </div>

        <p className="singlepostDesc">{singlePost.desc}</p>
      </div>
    </motion.div>
  );
}

export default Singlepost;
