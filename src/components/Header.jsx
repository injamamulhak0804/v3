import React, { useState } from 'react'
import AnimatedLinks from './AnimatedComponents/AnimatedLinks'
import { CLOSEICON, HAMBURGERICON } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  
  const handleClick = (e) =>{
    // e.preventDefault()
    setIsMenuOpen(false)
  }

  return (
    <div className='font-fira flex text-[#607B96] border-b items-center border-[#1E2D3D] justify-between text-sm  sm:px-10 px-4 md:h-10 h-14'>
        <div className='flex items-center justify-center'>
          <div className='pe-16 border-e pt-2 z-20 select-none cursor-pointer border-[#1E2D3D]'>
            {/* <AnimatedLinks time={0.5} path="/" text={"zamamulhak"} /> */}
            <Link to="/">zamamulhak</Link>
          </div>
          
          <div className='sm:hidden absolute right-0 z-20'>
            <button onClick={toggleMenu} className='p-2 z-20'>
              {isMenuOpen ?  CLOSEICON :HAMBURGERICON}
            </button>
          </div>
          <div className= {`absolute md:relative md:bg-transparent bg-[#4d7497e8] z-10 right-0 top-0 p-10 md:p-0 w-full text-center ${isMenuOpen ? 'block' : 'hidden' } md:flex`}>
              <div onClick={handleClick} className='pt-6 md:pt-2 text-[#011627] md:text-[#607B96] cursor-pointer select-none  px-4 hidden:border-e md:border-e border-[#1E2D3D]'>
                <AnimatedLinks time={1} path="/" text={"_hello"} />
              </div>
              <div onClick={handleClick} className='pt-6 md:pt-2 text-[#011627] md:text-[#607B96] cursor-pointer select-none  px-4 hidden:border-e md:border-e border-[#1E2D3D]'>
                <AnimatedLinks time={1.5} path="/about" text={"_about"} />
              </div>
              <div onClick={handleClick} className='pt-6 md:pt-2 text-[#011627] md:text-[#607B96] cursor-pointer select-none  px-4 hidden:border-e md:border-e border-[#1E2D3D]'>
                <AnimatedLinks time={2} path="/project" text={"_projects"} />
              </div>
          </div>
        </div>
        <div onClick={handleClick} className='pt-2 sm:flex hidden cursor-pointer px-3 border-s border-[#1E2D3D]'>
          <AnimatedLinks time={2.5} path="/contact" text={"_contact-me"} />
        </div>
    </div>
  )
}

export default Header