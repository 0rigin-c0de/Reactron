import React, { useContext } from "react";
import "./header.css";
import headerImg from "../../img/header.jpg";
import UserContext from "../../context/UserContext";
import { motion } from "framer-motion";

function Header() {
  const context = useContext(UserContext);
  const { mode } = context;

  return (
    <>
      <div className={`header theme-${mode} container-fluid`}>
        <motion.div
          whileInView={{ y: [-100, -50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="headerTitles"
        >
          <span className="headerTitlesm">React & Node</span>
          <span className="headerTitlelg">BLOG</span>
        </motion.div>
        <img className="headerImg" src={headerImg} alt="Img" />
      </div>
    </>
  );
}

export default Header;
