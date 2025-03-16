import React from "react";

const ProjectItem = ({ img, title, githubUrl, websiteDemo }) => (
  <div className="w-50 h-50 border border-sky-500 relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
    <img
      src={img}
      alt={title}
      className="w-full h-full rounded-xl object-cover group-hover:opacity-10 transition duration-300"
    />
    <div className="hidden group-hover:flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
      <h3 className="md:text-4xl sm:text-3xl text-3xl pb-2 font-bold tracking-wider text-center">
        {title}
      </h3>
      <div className="flex space-x-4 pt-2">
        {/* Conditionally render the Demo button only if websiteDemo exists */}
        {websiteDemo && (
          <a href={websiteDemo} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200"
            >
              Demo
            </button>
          </a>
        )}
        {/* Conditionally render the GitHub button only if githubUrl exists */}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200"
            >
              GitHub
            </button>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectItem;
