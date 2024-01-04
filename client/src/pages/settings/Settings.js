import React, { useContext, useState } from "react";
import "./settings.css";
// import Sidebar from '../../components/sidebar/Sidebar';
import UserContext from "../../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { motion } from "framer-motion";

function Setting() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  const { user, setUser, mode } = context;

  // to show stored image in api folder
  // make Public folder
  const PF = "https://reactron01.onrender.com/images/";

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    // if there is file then save that
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name; //unique file name
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        // upload image
        await axios.post("https://reactron01.onrender.com/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      // now update user
      const res = await axios.put(
        `https://reactron01.onrender.com/api/users/update/${user._id}`,
        updatedUser,
        {
          headers: {
            token: "bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      console.log("updated user is ", res.data);
      navigate("/");
      // update user
      setUser(res.data);
    } catch (err) {
      // if fails it means there exists a user with same username or email. show alert msg
      setError(true);
      console.log("username or email already taken", err);
    }
  };

  // delete account
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `https://reactron01.onrender.com/api/users/delete/${user._id}`,
        {
          headers: {
            token: "bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      const data = res.data;
      if (data.success) {
        console.log("deleted successfilly...");
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      whileInView={{ opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`settings theme-${mode}`}
    >
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form onSubmit={handleUpdate} className="settingsForm">
          <label className="settingLabel">Profile Picture</label>
          <div className="settingsPP">
            <img
              // if new image selected then show that , else use old pic
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label className="settingLabel">Username</label>
          <input
            type="text"
            placeholder={user.username}
            required
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="settingLabel">Email</label>
          <input
            type="email"
            placeholder={user.email}
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="settingLabel">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="settingsSubmitButton"
            type="submit"
            endIcon={<PublishedWithChangesIcon />}
          >
            Update
          </Button>
          {error && (
            <span
              style={{ color: "red", textAlign: "center", marginTop: "15px" }}
            >
              Username or Email already taken, Try another.
            </span>
          )}
        </form>
      </div>

      {/* Sidebar */}
      {/* <Sidebar /> */}
    </motion.div>
  );
}

export default Setting;
