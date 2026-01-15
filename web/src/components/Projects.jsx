import React from "react";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section id="Projects" className="section section-alt">
      <div className="section-inner">
        <h1 className="section-title">Projects</h1>

        <div className="projects-grid">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </section>
  );
}

export default Projects;
