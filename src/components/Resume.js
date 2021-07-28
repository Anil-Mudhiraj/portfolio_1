import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";
import "./Resume.css";

import { motion } from "framer-motion";

const languages = [
  {
    icon: react,
    name: "React Js",
    level: "78",
  },
  {
    icon: react,
    name: "HTML",
    level: "75",
  },
  {
    icon: react,
    name: "CSS",
    level: "65",
  },
  {
    icon: react,
    name: "Javascript",
    level: "75",
  },
  {
    icon: react,
    name: "Python",
    level: "78",
  },
  {
    icon: react,
    name: "Django",
    level: "70",
  },
  {
    icon: react,
    name: "C & C++",
    level: "55",
  },
];

const tools = [
  {
    icon: react,
    name: "Figma",
    level: "80",
  },
  {
    icon: react,
    name: "Git & Github",
    level: "75",
  },
  {
    icon: react,
    name: "VS Code",
    level: "85",
  },
  {
    icon: react,
    name: "Post man",
    level: "80",
  },
];

function Resume() {
  const resume_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className="container resume"
      variants={resume_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="row ">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Electrical Engineering</h5>
            <p className="resume-card__name">
              Guru Nanak Institute of Technology (2019-2022)
            </p>
            <p className="resume-card__details">
              I'm currently persuing B.tech in Electrical engineering from Guru
              Nanak Institute of Technology.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Freelancer</h5>
            <p className="resume-card__name"></p>
            <p className="resume-card__details">
              I work as a freelancer and also completed some projects on Full
              Stack Web Development
            </p>
          </div>
        </div>
      </div>
      <div className="row resume-cards">
        <div className="col-lg-6 resume-languages">
          <h4 className="resume-language__heading">Languages and Frameworks</h4>
          <div className="resume-language__body">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
