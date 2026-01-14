import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ img, title, githubUrl, websiteDemo, demoDownloadUrl }) => (
  <div className="project-card">
    <img
      src={img}
      alt={`${title} project preview`}
      className="project-image"
    />

    <div className="project-overlay">
      <h3 className="project-title">{title}</h3>

      <div className="project-buttons">
        {websiteDemo && (
          <a href={websiteDemo} target="_blank" rel="noopener noreferrer">
            <div className="project-btn demo-btn">Demo</div>
          </a>
        )}

        {demoDownloadUrl && (
          <a href={demoDownloadUrl} download>
            <div className="project-btn download-btn">Download</div>
          </a>
        )}

        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <div className="project-btn github-btn">GitHub</div>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectItem;

