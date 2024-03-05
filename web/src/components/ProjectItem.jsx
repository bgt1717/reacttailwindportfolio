import React from 'react';

const ProjectItem = ({ img, title, githubUrl, websiteDemo }) => (
  <div className="w-50 h-50 border border-sky-500 relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
    <img src={img} alt="/" className="w-full h-full rounded-xl group-hover:opacity-10" />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="text-xl pb-2 font-bold text-white tracking-wider text-center">{title}</h3>
      <div className="flex justify-center">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg mr-2">GitHub</a>
        <a href={websiteDemo} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">Demo</a>
      </div>
    </div>
  </div>
);

export default ProjectItem;
