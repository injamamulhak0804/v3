import React from 'react'
import AnimatedLinks from './AnimatedComponents/AnimatedLinks'

const Header = () => {
  return (
    <div className='font-fira flex text-[#607B96] border-b items-center border-[#1E2D3D] justify-between text-sm  px-10 h-10'>
        <div className='flex items-center justify-center'>
          <div className='pe-16 border-e pt-2  select-none cursor-pointer border-[#1E2D3D]'>
            <AnimatedLinks time={0.5} path="/" text={"zamamul hak"} />
          </div>
            <div className='flex'>
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
        <div>
        <div className='pt-2 cursor-pointer px-3 border-s border-[#1E2D3D]'>
                <AnimatedLinks time={2.5} path="/contact" text={"_contact-me"} />
              </div>
          <p ></p>
        </div>
    </div>
  )
}

export default Header