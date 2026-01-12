import React from 'react';
import ProjectItem from './ProjectItem';
import ProjectItemPic from '../assets/360.jpg';
import ProjectItemPic2 from '../assets/bag.avif';
import ProjectItemPic3 from '../assets/austinmotel.jpg';
import ProjectItemPic4 from '../assets/congressbuild.jpg';

function Projects() {
  return (
    <div className="bg-gradient-to-r from-indigo-300 ...">
      <div id='Projects' className='max-w-[1040px] m-auto md:pl-10 p-4 py-4 pb-10'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      </div>
      <div className='grid grid-cols md:grid-cols-2 gap-4 lg:px-60 md:px-40 sm:px-32'>
        <ProjectItem img={ProjectItemPic} title='Gantt App' githubUrl='https://github.com/bgt1717/GantAPP/' websiteDemo='https://ganttapp-pe5h.onrender.com/'/>
        <ProjectItem img={ProjectItemPic2} title='Bag Website' githubUrl='https://github.com/bgt1717/BagWebsite2/tree/main/BagSite' websiteDemo='https://atxbags.onrender.com/'/>
        <ProjectItem img={ProjectItemPic3} title='Notes App' githubUrl='https://github.com/bgt1717/CRUD_Project_VB' websiteDemo='https://notesapp-s8ix.onrender.com/'/>
        <ProjectItem img={ProjectItemPic} title='LeetCode Progression ' githubUrl='https://github.com/bgt1717/Practice_LeetCode' />
        {/* Add more ProjectItem components as needed */}
      </div>
    </div>
  );
}

export default Projects;
