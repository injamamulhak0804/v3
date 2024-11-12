import React, { useState } from 'react'
import AnimatedLinks from './AnimatedComponents/AnimatedLinks'

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
    <div className='font-fira flex text-[#607B96] border-b items-center border-[#1E2D3D] justify-between text-sm  sm:px-10 px-4 h-10'>
        <div className='flex items-center justify-center'>
          <div className='pe-16 border-e pt-2 z-20 select-none cursor-pointer border-[#1E2D3D]'>
            <AnimatedLinks time={0.5} path="/" text={"zamamulhak"} />
          </div>
          
          <div className='sm:hidden absolute right-0 z-20'>
            <button onClick={toggleMenu} className='p-2 z-20'>
              {/* Hamburger icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className= {`absolute md:relative bg-[#011627] z-10 right-0 top-0 p-10 md:p-0 w-full text-center ${isMenuOpen ? 'block' : 'hidden' } md:flex`}>
              <div className='pt-2 cursor-pointer select-none  px-4 border-e border-[#1E2D3D]'>
                <AnimatedLinks time={1} path="/" text={"_hello"} />
              </div>
              <div className='pt-2 cursor-pointer select-none  px-4 border-e border-[#1E2D3D]'>
                <AnimatedLinks time={1.5} path="/about" text={"_about"} />
              </div>
              <div className='pt-2 cursor-pointer select-none  px-4 border-e border-[#1E2D3D]'>
                <AnimatedLinks time={2} path="/project" text={"_projects"} />
              </div>
          </div>
        </div>
        <div className='pt-2 sm:flex hidden cursor-pointer px-3 border-s border-[#1E2D3D]'>
          <AnimatedLinks time={2.5} path="/contact" text={"_contact-me"} />
        </div>
    </div>
  )
}

export default Header