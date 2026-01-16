import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectItemPic from "../assets/notesapp.jpg";
import ProjectItemPic2 from "../assets/bag.avif";
import ProjectItemPic3 from "../assets/austinmotel.jpg";

function Projects() {
  return (
    <section id="Projects" className="section section-alt">
      <div className="section-inner">
        <h1 className="section-title">Projects</h1>

        <div className="projects-grid">
          <ProjectItem
            img={ProjectItemPic}
            title="Gantt App"
            stack="React, Node.js, Express, MongoDB"
            githubUrl="https://github.com/bgt1717/GantAPP"
            websiteDemo="https://ganttapp-pe5h.onrender.com/"
          />

          <ProjectItem
            img={ProjectItemPic2}
            title="Bag E-Commerce Site"
            stack="React, Node.js, Express, MongoDB"
            githubUrl="https://github.com/bgt1717/BagWebsite2"
            websiteDemo="https://atxbags.onrender.com/"
          />

          <ProjectItem
            img={ProjectItemPic3}
            title="Notes Application"
            stack="JavaScript, Node.js, Express, MySQL"
            githubUrl="https://github.com/bgt1717/CRUD_Project_VB"
            websiteDemo="https://notesapp-s8ix.onrender.com/"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
