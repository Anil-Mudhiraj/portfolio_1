import React from "react";

import github from "../assets/icons/github.svg";

function ProjectCard({ project: { name, image, deployed_url, github_url } }) {
  return (
    <div className="project-card col-md-6 col-lg-4 my-2">
      <figure className="project-card__wrapper">
        <a href={deployed_url} target="_blank" rel="noreferrer noopener">
          <img src={image} alt={name} className="project-card__image" />
        </a>
        <div className="project-card__title">
          <a href={github_url} target="_blank" rel="noreferrer noopener">
            <img
              src={github}
              alt="github link"
              className="project-card__icon"
            />
          </a>
          {name}
        </div>
      </figure>
    </div>
  );
}

export default ProjectCard;
