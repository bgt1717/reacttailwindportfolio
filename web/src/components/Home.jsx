import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
return(
<div id ='main'>
  <img className=' w-full h-screen object-cover object-right' src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&q=80&w=1228&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'>
  <div>
      <h1>Hi I'm Bryce</h1>
      <h2> I'm a 
          <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'We produce food for Mice',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'We produce food for Hamsters',
            1000,
            'We produce food for Guinea Pigs',
            1000,
            'We produce food for Chinchillas',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1em', paddingLeft:"5px" }}
          repeat={Infinity}
        />

      </h2>
  </div>
  </div>
</div>
);
}
export default Home;