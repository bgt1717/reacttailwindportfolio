import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {FaLinkedinIn} from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import atx from '../assets/atx.jpg';

const Home = () => {
return(
<div id ='Home'>
 
  <img className=' w-full h-screen object-cover object-right' src={atx} alt="picture of city" />
  <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'>
  <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center log:items-start items-center' >
      {/* Anything above small text 5xl otherwise text 4xl. 100 through 800 larger number is darker font.*/}
      <div className= "bg-white p-10 rounded-xl">
      <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hello. I'm Bryce.</h1>
      {/* Anything above small text 3xl, otherwise 2xl. */}
      <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 '> I'm a 
          <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'programmer.',
            1000,
            'website developer.',
            1000,
            'React enthusiast.',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1em', paddingLeft:"5px" }}
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
</div>
);
}
export default Home;