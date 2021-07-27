import React from "react";
import "./Sidebar.css";

import github from "../assets/icons/github-big-logo.png";
import linkedin from "../assets/icons/linkedin.png";
import pin from "../assets/icons/pin.svg";
import myPic from "../assets/mypic.jpeg";
import { motion } from "framer-motion";

function Sidebar() {
  const sidebar_variant = {
    hidden: {
      x: "-10vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.7,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="side-bar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={myPic} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name "> Anil</div>
      <div className="sidebar__item sidebar__title">
        <h2>Web Developer</h2>
      </div>

      <div className=" sidebar__resume">
        <button className="sidebar__resume-button">Download Resume</button>
      </div>

      <div className="sidebar__social-icons ">
        <a href="https://github.com/Anil-Mudhiraj">
          <img src={github} alt="github" className="sidebar__icon " />
        </a>
        <a href="https://www.linkedin.com/in/anil-mudhiraj-994284186">
          <img src={linkedin} alt="linkedin" className="sidebar__icon" />
        </a>
      </div>
      <div className="sidebar__contact ">
        <div className="sidebar__item">
          <img
            src={pin}
            alt="location"
            className="sidebar__icon sidebar__pin"
          />
          Hyderabad,India
        </div>
        <div className="sidebar__item">anil9618454029@gmail.com</div>
        <div className="sidebar__item">9618454029/630067008</div>
      </div>
      <button className="sidebar__item sidebar__email">Email me !</button>
    </motion.div>
  );
}

export default Sidebar;
