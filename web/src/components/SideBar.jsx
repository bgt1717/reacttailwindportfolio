import React, {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

const SideBar = () => {
    const[nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);

    };
    return ( 

        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hideen'/>
        </div>



     );
}
 
export default SideBar;