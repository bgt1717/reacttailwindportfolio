import React from 'react';
import ProjectItem from './ProjectItem';
import ProjectItemPic from '../assets/360.jpg';
import ProjectItemPic2 from '../assets/atx.jpg';
import ProjectItemPic3 from '../assets/austinmotel.jpg';
import ProjectItemPic4 from '../assets/congressbuild.jpg';

function Projects() {
  return (
    <div className="bg-blue-200">
      <div id='Projects' className='max-w-[1040px] m-auto md:pl-10 p-4 py-4 pb-10'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 lg:px-60 md:px-40 sm:px-32'>
        <ProjectItem img={ProjectItemPic} title='Mern Blog' githubUrl='https://github.com/bgt1717/MERNBLOG3' websiteDemo='https://github.com/bgt1717/Practice_LeetCode'/>
        <ProjectItem img={ProjectItemPic2} title='Notes Application' githubUrl='https://github.com/bgt1717/MERNBLOG3' websiteDemo='https://mynotesapplication1.netlify.app/'/>
        <ProjectItem img={ProjectItemPic3} title='Recipe Application' githubUrl='https://github.com/bgt1717/recipeapp' />
        <ProjectItem img={ProjectItemPic} title='LeetCode Progression ' githubUrl='https://github.com/bgt1717/Practice_LeetCode' />
        {/* Add more ProjectItem components as needed */}
      </div>
    </div>
  );
}

export default Projects;
