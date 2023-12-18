import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const search = location.search;

  useEffect(() => {
    const fetchPosts = async () => {
      setProgress(10);
      const res = await axios.get("http://localhost:5000/api/posts" + search, {
        headers: {
          token: "bearer " + localStorage.getItem("accessToken"),
        },
      });
      setProgress(50);
      setPosts(res.data);
      setProgress(100);
    };

    fetchPosts();
    //eslint-disable-next-line
  }, [search]);

  // loading bar
  const context = useContext(UserContext);
  const { setProgress } = context;

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
