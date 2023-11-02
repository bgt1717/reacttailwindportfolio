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
    { name: 'HTML', image: htmlpic },
    { name: 'JavaScript', image: js },
    { name: 'TailWind', image: tw },
    { name: 'React', image: react },
    { name: 'Node', image: node },
    { name: 'MongoDB', image: mongoDB },
    { name: 'Node', image: node },
    { name: 'Postman', image: postman },
    { name: 'GitHub', image: github },
    { name: 'Git', image: git },
    { name: 'Netlify', image: netlify },
    { name: 'Vite', image: vite },
  ];

  return (
    <div className="bg-blue-200">
      <div id='About' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-blue-100 rounded-lg'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About</h1>
        <p className='text-center text-2xl py-8'>
          Results-driven computer science graduate with a strong foundation in Front and Back-End development, seeking an entry-level position to contribute to the development and enhancement of innovative web applications and other areas of the tech industry.
        </p>

        <img className='w-1/2 h-1/2 mx-auto rounded-lg border border-solid border-gray-400' src={mepic} alt='Your Name' title='Your Name' />

        <h1 className='font-bold text-center text-2xl text-[#001b5e] pt-8'>Skills</h1>

        <ul className='text-center text-2xl py-2 flex flex-wrap justify-center'>
          {skillsData.map((skill, index) => (
            <div key={index}>
              <li className='flex items-center mr-4'>
                <div style={listItemStyle}>
                  <img className="" src={skill.image} alt={skill.name} />
                </div>
              </li>
              <div style={listItemTextStyle}>{skill.name}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;



// https://icons8.com/icon/set/javascript-html-css/color--static