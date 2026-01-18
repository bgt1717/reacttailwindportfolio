import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ img, title, stack, bullets, githubUrl, websiteDemo }) => {
  return (
    <div className="project-card">
      <img src={img} alt={`${title} preview`} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">{title}</h3>

        {stack && <p className="project-stack">{stack}</p>}

        {bullets && (
          <ul className="project-bullets">
            {bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <div className="project-buttons">
          {websiteDemo && (
            <a
              href={websiteDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn demo-btn"
            >
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn github-btn"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
