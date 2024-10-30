import React from 'react'
import { BLUE, CODE1, CODE2, CODE3, GREEN } from "../utils/constants";

const Hero = () => {
  return (
    <div className=' px-[130px] flex items-center gap-x-10 relative overflow-hidden h-[89%]'>
      <div className='font-fira w-[50%]'>
        <p className='text-white'>Hi all. I am</p>
        <h1 className='text-7xl text-white'>Zamamul Hak</h1>
        <h2 className='text-3xl text-[#4D5BCE] pb-14'>&gt; Front-end developer</h2>
        <p className='text-[#607B96] text-sm'>// complete the game to continue</p>
        <p className='text-[#607B96] text-sm'>// you can also see it on my Github page</p>
        <p className='text-white text-sm'>
          <a href="https://github.com/injamamulhak0804" target='_blank'>
          <span className='text-[#4D5BCE]'>const </span>
          <span  className='text-[#43D9AD]'>githubLink </span>  = 
          <span className='text-[#E99287]'> “https://github.com/injamamulhak0804”</span>
          </a>
        </p>
      </div>
      <div className='w-[50%] relative'>
        <img src={GREEN} alt="" className='absolute -left-28 top-10 blur-3xl' />
        <img className='pb-4 w-[100%] object-fit' src={CODE1} alt="" />
        <img className='pb-4 w-[100%] object-fit' src={CODE2} alt="" />
        <img className='pb-4 w-[100%] object-fit' src={CODE3} alt="" />
        <img className='pb-4 w-[100%] object-fit' src={CODE3} alt="" />
        <img src={BLUE} alt="" className='absolute z-10 -right-28 bottom-0 blur-3xl' />
      </div>
    </div>
  )
}

export default Hero