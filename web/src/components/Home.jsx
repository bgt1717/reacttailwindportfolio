import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import atx from "../assets/atx.jpg";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div id="Home" className="flex items-center justify-center">
      <img className="w-full h-screen object-cover object-right" src={atx} />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 flex items-center justify-center">
        <div className="w-3/4 bg-white p-8 rounded-xl flex flex-col items-center">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 text-center">
            Hello. I'm Bryce.
          </h1>
          <h2 className="flex sm:text-3xl text-1xl sm:pt-4 text-gray-800 text-center">
            I'm a
            <TypeAnimation
              sequence={[
                "programmer.",
                1000,
                "developer.",
                1000,
                "React enthusiast.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <a
            href="https://drive.google.com/file/d/12cinhmut1lt1kOMPSM6Mwr2ZcJ_Fhjuu/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Resume
              </span>
            </button>
          </a>

          <div className="flex justify-between pt-4 max-w-[100px] w-full">
            <a
              href="https://www.linkedin.com/in/bryce-townsend-426289237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={30} />
            </a>
            <a
              href="https://github.com/bgt1717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="cursor-pointer" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
