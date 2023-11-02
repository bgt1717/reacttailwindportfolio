import React from 'react';
import htmlpic from '../assets/html.png';
import mepic from '../assets/me.jpg';
import js from '../assets/js.png';
import node from '../assets/node.png';
import tw from '../assets/tw.png'

function About() {
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
          <li className='flex items-center mr-4'>
            <img className="" src={htmlpic} alt='HTML' />
          </li>
          <li className='flex items-center mr-4'>
            <img className="" src={js} alt='JavaScript' />
          </li>
          <li className='flex items-center mr-4'>
            <img className="" src={node} alt='Node' />
          </li>
          <li className='flex items-center mr-4'>
            <img className="" src={tw} alt='TailWind' />
          </li>

          <li>Programming Languages: Java, Python, C++, JavaScript</li>
          <li>Web Development: HTML/CSS, Node.js, MERN stack</li>
          <li>Databases: MongoDB</li>
          <li>Other: Microsoft Office, MATLAB, Postman API, TailWind</li>
        </ul>

      </div>
    </div>
  );
}

export default About;


// https://icons8.com/icon/set/javascript-html-css/color--static