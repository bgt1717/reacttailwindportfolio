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

function About() {
  const listItemStyle = {
    width: '120px', // Adjust the size as needed
    height: '120px', // Adjust the size as needed
    borderRadius: '50%',
    border: '2px solid #001b5e', // Adjust the border color
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const listItemTextStyle = {
    marginTop: '8px',
  };

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
    { name: 'mysql', image: mysql, category: 'Backend' },
    { name: 'REST', image: rest, category: 'Backend' },
  ];

  // Function to render a grid of icons for a specific category
  const renderCategoryIcons = (category) => {
    const categorySkills = skillsData.filter((skill) => skill.category === category);
    const iconGrid = [];
    
    for (let i = 0; i < categorySkills.length; i += 2) {
      const row = (
        <div className="flex items-center justify-center">
          {categorySkills.slice(i, i + 2).map((skill, index) => (
            <div key={index}>
              <li className='flex items-center mr-2'>
                <div style={listItemStyle}>
                  <img className="" src={skill.image} alt={skill.name} />
                </div>
              </li>
              <div style={listItemTextStyle}>{skill.name}</div>
            </div>
          ))}
        </div>
      );
      iconGrid.push(row);
    }

    return iconGrid;
  };

// ...

return (
  <div className="bg-blue-200">
    <div id="About" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8 md:py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">About</h1>
      <p className="text-center text-2xl py-4 md:py-8">
        Results-driven computer science graduate with a strong foundation in Front and Back-End development, seeking an entry-level position to contribute to the development and enhancement of innovative web applications and other areas of the tech industry.
      </p>
      <img className="w-1/2 h-1/2 mx-auto rounded-lg border border-solid border-gray-400" src={mepic} alt="Your Name" title="Your Name" />

      <h1 id="Skills" className="font-bold text-center text-4xl text-[#001b5e] pt-8 pb-4">Skills</h1>

      <ul className="text-center text-2xl py-2 md:py-4 flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <h2 className="text-2xl font-bold text-[#001b5e] mb-2">Frontend</h2>
          {renderCategoryIcons('Frontend')}
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <h2 className="text-2xl font-bold text-[#001b5e] mb-2">Backend</h2>
          {renderCategoryIcons('Backend')}
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <h2 className="text-2xl font-bold text-[#001b5e] mb-2">Other</h2>
          {renderCategoryIcons('Other')}
        </div>
      </ul>
    </div>
  </div>
);

}

export default About;





// https://icons8.com/icon/set/javascript-html-css/color--static