import React from "react";
import api from "../assets/icons/api.svg";
import computer from "../assets/icons/computer.svg";
import backend from "../assets/icons/backend.svg";
import ux from "../assets/icons/ux.svg";
import repair from "../assets/icons/repair.svg";
import algo from "../assets/icons/algo.svg";
import puzzle from "../assets/icons/puzzle.svg";

import Skillcard from "./Skillcard";
import "./About.css";

const skills = [
  {
    icon: computer,
    title: "Frontend Web Development",
    content:
      "I can build beautiful and scalable SPA using HTML,CSS and React Js.",
  },
  {
    icon: repair,
    title: "Backend Web Dvelopment",
    content:
      "I can handle databases ,server ,api and can work with databases like Mysql , mongodb ,SQLite .",
  },
  {
    icon: api,
    title: "API Development",
    content: "I can develop robust REST API's using django-rest-framework.",
  },
  {
    icon: algo,
    title: "Competitive Coder",
    content: "A daily problem solver in Hacker Rank and LeetCode.",
  },
];

function About() {
  return (
    <div className="about">
      <h6 className="about__intro">
        I describe myself as someone who's persistent, a quick learner and loves
        problem solving using simple and scalable solutions.
      </h6>
      <div className="container about__container">
        <div className="about__heading">What I offer !</div>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
