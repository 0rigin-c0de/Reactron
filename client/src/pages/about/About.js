import React, { useContext } from "react";
import "./about.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import RegsiterImg from "../../img/RegisterPage.png";
import LoginImg from "../../img/LoginPage.png";
import HomeImg from "../../img/HomePage.png";
import WriteImg from "../../img/WritePage.png";
import SingleImg from "../../img/SinglePage.png";
import AuthorImg from "../../img/Author.png";
import SettingPageImg from "../../img/SettingPage.png";
import DeleteAccountImg from "../../img/DeleteAccount.png";
import Mypic from "../../img/mypic.jpg";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import UserContext from "../../context/UserContext";
import { motion } from "framer-motion";

function Cards() {
  const context = useContext(UserContext);
  const { mode } = context;

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className={`cards container-fluid row theme-${mode}`}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="aboutHead">What can you do here?</h2>
        <p className="aboutHeadAns">
          Here is the step by step guide you may follow to use this site.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        div
        className="col-md-6"
      >
        <Card className={`card theme-${mode}`}>
          <CardActionArea>
            <CardHeader
              style={{ color: "#d49837" }}
              avatar={
                <Avatar aria-label="recipe">
                  <img className="cardImg" src={Mypic} alt="" srcSet="" />
                </Avatar>
              }
              title="Shunnu"
              subheader="August 21, 2023"
            />
            <CardMedia
              className="cardimg"
              component="img"
              height="140"
              image={RegsiterImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="aboutDescHead">
                  {" "}
                  1 - Create an account with unique username and email{" "}
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="aboutDesc">
                  {" "}
                  You must have to use unique username and email to create an
                  account, otherwise your account will not be created.
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        div
        className="col-md-6"
      >
        <Card className="card">
          <CardActionArea>
            <CardHeader
              style={{ color: "#d49837" }}
              avatar={
                <Avatar aria-label="recipe">
                  {/* V */}
                  <img className="cardImg" src={Mypic} alt="" srcSet="" />
                </Avatar>
              }
              title="Shunnu"
              subheader="August 21, 2023"
            />
            <CardMedia
              className="cardimg"
              component="img"
              height="140"
              image={LoginImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="aboutDescHead">
                  {" "}
                  2 - Login with your registered username and password{" "}
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="aboutDesc">
                  {" "}
                  After logging in successfully, You will be redirected to home
                  page, otherwise you will not be able to access content.{" "}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        div
        className="col-md-6"
      >
        <Card className="card">
          <CardActionArea>
            <CardHeader
              style={{ color: "#d49837" }}
              avatar={
                <Avatar aria-label="recipe">
                  {/* V */}
                  <img className="cardImg" src={Mypic} alt="" srcSet="" />
                </Avatar>
              }
              title="Shunnu"
              subheader="August 21, 2023"
            />
            <CardMedia
              className="cardimg"
              component="img"
              height="140"
              image={HomeImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="aboutDescHead"> 3 - Home page </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="aboutDesc">
                  {" "}
                  On home page you can see post of all the users with there
                  published date, click them to view complete post in seperate
                  page.
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        div
        className="col-md-6"
      >
        <Card className="card">
          <CardActionArea>
            <CardHeader
              style={{ color: "#d49837" }}
              avatar={
                <Avatar aria-label="recipe">
                  {/* V */}
                  <img className="cardImg" src={Mypic} alt="" srcSet="" />
                </Avatar>
              }
              title="Shunnu"
              subheader="August 21, 2023"
            />
            <CardMedia
              className="cardimg"
              component="img"
              height="140"
              image={WriteImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="aboutDescHead">
                  {" "}
                  4 - Write/Publish post page{" "}
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="aboutDesc">
                  {" "}
                  Add image, title, description of your post, And publish post
                  then it will be visible on single page and home page.{" "}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="col-md-6"
      >
        <Card className="card">
          <CardActionArea>
            <CardHeader
              style={{ color: "#d49837" }}
              avatar={
                <Avatar aria-label="recipe">
                  {/* V */}
                  <img className="cardImg" src={Mypic} alt="" srcSet="" />
                </Avatar>
              }
              title="Shunnu"
              subheader="August 21, 2023"
            />
            <CardMedia
              className="cardimg"
              component="img"
              height="140"
              image={SingleImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="aboutDescHead"> 5 - Single post page </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="aboutDesc">
                  {" "}
                  Single post page contains information of clicked post along
                  with it's author name.{" "}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        div
        className="col-md-6"
      >
        <Card className="card">
          <CardActionArea>
            <CardHeader
              style={{ color: "#d49837" }}
              avatar={
                <Avatar aria-label="recipe">
                  {/* V */}
                  <img className="cardImg" src={Mypic} alt="" srcSet="" />
                </Avatar>
              }
              title="Shunnu"
              subheader="August 21, 2023"
            />
            <CardMedia
              className="cardimg"
              component="img"
              height="140"
              image={AuthorImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="aboutDescHead">
                  {" "}
                  6 - Click on author name to see only his posts{" "}
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="aboutDesc">
                  {" "}
                  By clicking on author name you can see all posts those belong
                  to him.{" "}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        div
        className="col-md-6"
      >
        <Card className="card">
          <CardActionArea>
            <CardHeader
              style={{ color: "#d49837" }}
              avatar={
                <Avatar aria-label="recipe">
                  {/* V */}
                  <img className="cardImg" src={Mypic} alt="" srcSet="" />
                </Avatar>
              }
              title="Shunnu"
              subheader="August 21, 2023"
            />
            <CardMedia
              className="cardimg"
              component="img"
              height="140"
              image={SettingPageImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="aboutDescHead"> 9 - Settings page </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="aboutDesc">
                  {" "}
                  Here you can update your profile pic, username, email id and
                  password.{" "}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        div
        className="col-md-6"
      >
        <Card className="card">
          <CardActionArea>
            <CardHeader
              style={{ color: "#d49837" }}
              avatar={
                <Avatar aria-label="recipe">
                  {/* V */}
                  <img className="cardImg" src={Mypic} alt="" srcSet="" />
                </Avatar>
              }
              title="Shunnu"
              subheader="August 21, 2023"
            />
            <CardMedia
              className="cardimg"
              component="img"
              height="140"
              image={DeleteAccountImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="aboutDescHead">
                  {" "}
                  10 - Delete your account{" "}
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="aboutDesc">
                  {" "}
                  Also you can delete your account, by doing this all of your
                  posts will be deleted.{" "}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default Cards;
