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
        {/* <p className='text-center text-2xl py-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas vel quod. Esse eveniet error exercitationem iste consequatur porro sit dolore possimus odit dolorem, reprehenderit laudantium autem incidunt consequuntur eos?
        </p> */}
      </div>
      {/* Create a grid with two rows and two columns */}
      <div className='grid grid-cols-1 gap-4 lg:px-60 md:px-40 sm:px-32'>
        <ProjectItem img={ProjectItemPic} title='Project 1' />
        <span>dsadsdsa</span>
        <ProjectItem img={ProjectItemPic} title='Project 2' />
        <span>dsadsdsa</span>
        <ProjectItem img={ProjectItemPic} title='Project 3' />
        <span>dsadsdsa</span>

      </div>
    </div>
  );
}

export default Projects;

