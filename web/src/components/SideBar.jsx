import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject,AiOutlineMail,AiOutlineSolution } from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr'

const SideBar = () => {
    const [nav, setNav] = useState(false);
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
                        <a onClick={handleNav} href="#Home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handleNav} href="#About" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <GrProjects size={20} />
                            <span className='pl-4'>About </span>
                        </a>
                        <a onClick={handleNav} href="#About" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <AiOutlineSolution size={20} />
                            <span className='pl-4'>Skills </span>
                        </a>
                        <a onClick={handleNav} href="#Projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <AiOutlineProject size={20} />
                            <span className='pl-4'> Projects</span>
                        </a>
                        <a onClick={handleNav} href="#Contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200'
                        >    
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ): (
                    <div> </div>
                )}
                
                {/* ----------------------------------------------------------- */}
                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>
                        <a href='#Home' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineHome  size={30}/>
                        </a>
                        <a href='#About' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineSolution  size={30}/>
                        </a>
                        <a href='#Skills' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <GrProjects  size={30}/>
                        </a>
                        <a href='#Projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineProject  size={30}/>
                        </a>
                        <a href='#Contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail  size={30}/>
                        </a>
                    </div>
                </div>


        </div>
     );
};
 
export default SideBar;