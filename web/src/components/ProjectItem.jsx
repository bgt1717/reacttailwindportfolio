import React from "react";

const ProjectItem = ({ img, title, githubUrl, websiteDemo }) => (
  <div className="w-50 h-50 border border-sky-500 relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
    <img
      src={img}
      alt="/"
      className="w-full h-full rounded-xl group-hover:opacity-10"
    />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="md:text-4xl sm:text-3xl text-3xl pb-2 font-bold text-white tracking-wider text-center">
        {title}
      </h3>
      <div className="flex justify-center pt-2">

        <a href={websiteDemo} target="_blank" rel="noopener noreferrer">
        <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Demo</button>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GitHub</button>
        </a>
        
      </div>
    </div>
  </div>
);

export default ProjectItem;
