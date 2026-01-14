import React from 'react';
import htmlpic from '../assets/html.png';
import mepic from '../assets/me.jpg';
import js from '../assets/js.png';
import node from '../assets/node.png';
import tw from '../assets/tw.png';
import react from '../assets/react.png';
import postman from '../assets/postman.png';
import vite from '../assets/vite.png';
import netlify from '../assets/netlify.png';
import github from '../assets/github.png';
import git from '../assets/git.png';
import mongoDB from '../assets/mongoDB.png';
import express from '../assets/express.png';
import mysql from '../assets/mysql.png';
import rest from '../assets/rest.png';
import './About.css';
import './animations.css';

function About() {
  const skillsData = [
    { name: 'HTML', image: htmlpic, category: 'Frontend' },
    { name: 'JavaScript', image: js, category: 'Frontend' },
    { name: 'TailWind', image: tw, category: 'Frontend' },
    { name: 'React', image: react, category: 'Frontend' },
    { name: 'Node', image: node, category: 'Backend' },
    { name: 'MongoDB', image: mongoDB, category: 'Backend' },
    { name: 'Postman', image: postman, category: 'Other' },
    { name: 'GitHub', image: github, category: 'Other' },
    { name: 'Git', image: git, category: 'Other' },
    { name: 'Netlify', image: netlify, category: 'Other' },
    { name: 'Vite', image: vite, category: 'Other' },
    { name: 'Express', image: express, category: 'Backend' },
    { name: 'MySQL', image: mysql, category: 'Backend' },
    { name: 'REST', image: rest, category: 'Backend' },
  ];

  const renderCategoryIcons = (category) => {
    const categorySkills = skillsData.filter(skill => skill.category === category);
    const rows = [];

    for (let i = 0; i < categorySkills.length; i += 2) {
      rows.push(
        <div className="skills-row" key={i}>
          {categorySkills.slice(i, i + 2).map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-circle">
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skill-label">{skill.name}</div>
            </div>
          ))}
        </div>
      );
    }

    return rows;
  };

  return (
    <section className="about-section">
      <div id="About" className="about-container">
        <h1 className="about-title">About</h1>

        <p className="about-description">
Bachelor of Science in Computer Science graduate from Texas State University with hands-on experience in full-stack development. Skilled in building responsive, scalable web applications across both front-end and back-end technologies, with a strong focus on writing clean, maintainable code that delivers real-world impact.
        </p>

        <img
          className="profile-image animate-profile_animate"
          src={mepic}
          alt="Me!"
        />

        <h1 id="Skills" className="skills-title">Skills</h1>

        <div className="skills-grid">
          <div className="skills-column">
            <h2>Frontend</h2>
            {renderCategoryIcons('Frontend')}
          </div>

          <div className="skills-column">
            <h2>Backend</h2>
            {renderCategoryIcons('Backend')}
          </div>

          <div className="skills-column">
            <h2>Other</h2>
            {renderCategoryIcons('Other')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
