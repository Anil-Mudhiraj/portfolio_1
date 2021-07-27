import React from "react";

function Skillcard({ skill }) {
  return (
    <div className="col-lg-6">
      <div className="skill-card">
        <img src={skill.icon} alt="icon" className="skill-card__icon" />
        <div className="skill-card-body">
          <h6 className="skill-card-title">{skill.title}</h6>
          <p className="skill-card-content">{skill.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Skillcard;
