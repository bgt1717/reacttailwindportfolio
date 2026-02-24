import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectItemPic from "../assets/gantt.jpg";
import ProjectItemPic2 from "../assets/bag.avif";
import ProjectItemPic3 from "../assets/NotesApp.jpg";
import ProjectItemPic4 from "../assets/360.jpg";

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
            bullets={[
              "Designed and implemented a full-stack task management system with user authentication.",
              "Built RESTful APIs to support real-time project updates and persistent data storage.",
            ]}
            githubUrl="https://github.com/bgt1717/GantAPP"
            websiteDemo="https://ganttapp-pe5h.onrender.com/"
          />

          <ProjectItem
            img={ProjectItemPic2}
            title="Bag E-Commerce Site"
            stack="React, Node.js, Express, MongoDB"
            bullets={[
              "Developed a responsive e-commerce interface.",
              "Implemented backend services for inventory management and order handling.",
            ]}
            githubUrl="https://github.com/bgt1717/BagWebsite2"
            websiteDemo="https://atxbags.onrender.com/"
          />

          <ProjectItem
            img={ProjectItemPic3}
            title="Notes Application"
            stack="JavaScript, Node.js, Express, MySQL"
            bullets={[
              "Built a CRUD-based notes application with a relational database backend.",
              "Designed REST endpoints to support data persistence and user interactions.",
            ]}
            githubUrl="https://github.com/bgt1717/CRUD_Project_VB"
            websiteDemo="https://notesapp-s8ix.onrender.com/"
          />
          <ProjectItem
            img={ProjectItemPic4}
            title="Blog Application"
            stack="JavaScript, Node.js, Express, MySQL"
            bullets={[
              "Developed a full-stack blog application powered by a relational database backend.",
              "Architected scalable backend services that handle CRUD operations with client–server communication.",
            ]}
            githubUrl="https://github.com/bgt1717/MernBlog2"
            websiteDemo="https://townsendblog.onrender.com/"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;