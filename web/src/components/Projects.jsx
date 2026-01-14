import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectItemPic from "../assets/360.jpg";
import ProjectItemPic2 from "../assets/bag.avif";
import ProjectItemPic3 from "../assets/austinmotel.jpg";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <div id="Projects" className="projects-header">
        <h1 className="projects-title">Projects</h1>
      </div>

      <div className="projects-grid">
        <ProjectItem
          img={ProjectItemPic}
          title="Gantt App"
          githubUrl="https://github.com/bgt1717/GantAPP/"
          websiteDemo="https://ganttapp-pe5h.onrender.com/"
        />

        <ProjectItem
          img={ProjectItemPic2}
          title="Bag Website"
          githubUrl="https://github.com/bgt1717/BagWebsite2/tree/main/BagSite"
          websiteDemo="https://atxbags.onrender.com/"
        />

        <ProjectItem
          img={ProjectItemPic3}
          title="Notes App"
          githubUrl="https://github.com/bgt1717/CRUD_Project_VB"
          websiteDemo="https://notesapp-s8ix.onrender.com/"
        />

        <ProjectItem
          img={ProjectItemPic}
          title="LeetCode Progression"
          githubUrl="https://github.com/bgt1717/Practice_LeetCode"
        />
      </div>
    </section>
  );
}

export default Projects;
