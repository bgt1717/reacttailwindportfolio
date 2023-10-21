import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai';

const SideBar = () => {
    const[nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);

    };
    return ( 

        <div>
            <AiOutlineMenu 
            onClick={handleNav }
            className='absolute top-4 right-4 z-[99] md:hidden'
            />
            {nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>About </span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <AiOutlineHome size={20} />
                            <span className='pl-4'> Projects</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ): (
                    <div> </div>
                )}
        </div>
     );
};
 
export default SideBar;