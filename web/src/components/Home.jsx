import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import atx from '../assets/atx.jpg';

const Home = () => {
  return (
    <div id='Home' className="flex items-center justify-center">
      <img className='w-full h-screen object-cover object-right' src={atx} alt="picture of city" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 flex items-center justify-center'>
        <div className='w-1/2 bg-white p-8 rounded-xl flex flex-col items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 text-center'>Hello. I'm Bryce.</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 text-center'>I'm a
            <TypeAnimation
              sequence={[
                'programmer.',
                1000,
                'website developer.',
                1000,
                'React enthusiast.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>

          <div className='flex justify-between pt-6 max-w-[100px] w-full'>
            <a href="https://www.linkedin.com/in/bryce-townsend-426289237/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='cursor-pointer' size={20} />
            </a>
            <a href="https://github.com/bgt1717" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='cursor-pointer' size={20} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
