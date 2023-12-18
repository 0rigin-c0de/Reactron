import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Img from "../../img/addAvatar.png";
import Button from "@mui/material/Button";
import SecurityUpdateGoodIcon from "@mui/icons-material/SecurityUpdateGood";

export default function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user, mode } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      userId: user._id,
    };
    // if there is file then save that
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name; //unique file name
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        // upload image
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      // now upload newPost
      const res = await axios.post(
        "http://localhost:5000/api/posts/createpost",
        newPost,
        {
          headers: {
            token: "bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      //now show newpost in singlepage -- path of react app /post/:postIdz
      navigate("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`write theme-${mode}`}>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <img className="writeIcon" src={Img} alt="" srcSet="" />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            required
            placeholder="Write title..."
            className="writeInput writeTtile"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            required
            className="writeInput writeText writeDescription"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <Button
          className="writeSubmit"
          type="submit"
          endIcon={<SecurityUpdateGoodIcon />}
        >
          Publish
        </Button>
      </form>
    </div>
  );
}
