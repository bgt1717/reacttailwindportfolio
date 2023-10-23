import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectItemPic from '../assets/360.jpg'
import ProjectItemPic2 from '../assets/atx.jpg'
import ProjectItemPic3 from '../assets/congress.jpg'
import ProjectItemPic4 from '../assets/congressbuild.jpg'


function Projects() {
  return (
    <>
      <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas vel quod. Esse eveniet error exercitationem iste consequatur porro sit dolore possimus odit dolorem, reprehenderit laudantium autem incidunt consequuntur eos?   
        </p>
      </div>
      {/* anything above small grid cols 2 and gap 12. One column if not small.*/}
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>

      </div>
    </>
  );
}

export default Projects;