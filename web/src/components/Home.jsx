import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {FaLinkedinIn} from 'react-icons/fa';

const Home = () => {
return(
<div id ='main'>
  <img className=' w-full h-screen object-cover object-right' src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&q=80&w=1228&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'>
  <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center log:items-start items-center' >
      {/* Anything above small text 5xl otherwise text 4xl. 100 through 800 larger number is darker font.*/}
      <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hello. I'm Bryce.</h1>
      <h2> I'm a 
          <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'programmer.',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
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
      <div>
        <FaLinkedinIn className='cursor-pointer' size={20}/>
      </div>
  </div>
  </div>
</div>
);
}
export default Home;