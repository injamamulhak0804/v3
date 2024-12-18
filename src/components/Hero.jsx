import React from 'react'
import { BLUE, CODE1, CODE2, CODE3, GREEN, TypeWriter } from "../utils/constants";
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedComponents/AnimatedText';
import BlobMover from "./BlobMover"

const Hero = () => {

  return (
    <>
    <div className='md:px-[130px] px-3 flex items-center gap-x-10 relative overflow-hidden h-[89%] 2xl:h-[93%]'>
    <BlobMover/>
      <div className='font-fira w-[100%] md:w-[50%]'>
      <div className="text-white">
        <AnimatedText text="Hi all. I am" time={3} />
      </div>
        <div className='2xl:text-8xl md:text-7xl text-6xl pb-3 md:pb-0 text-white'>
          <AnimatedText text={"Zamamul Hak"} time={3.5}/>
        </div>
        <TypeWriter/>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration:3.5 }}
        >
        <p className='text-[#607B96] hidden md:block md:text-sm'>// complete the game to continue</p>
        <p className='text-[#607B96] hidden md:block md:text-sm'>// you can also see it on my Github page</p>
        <p className='text-white text-md  md:text-sm'>
          <a href="https://github.com/injamamulhak0804" target='_blank'>
          <span className='text-[#4D5BCE]'>const </span>
          <span  className='text-[#43D9AD]'>githubLink </span>  = 
          <span className='text-[#E99287]'> “https://github.com/injamamulhak0804”</span>
          </a>
        </p>
        </motion.div>
      </div>
      <div className='w-[50%] hidden md:block relative'>
        <img src={GREEN} alt="" className='absolute -left-28 top-10 blur-3xl' />
        <img className='pb-4 w-[100%] object-fit' src={CODE1} alt="" />
        <img className='pb-4 w-[100%] object-fit' src={CODE2} alt="" />
        <img className='pb-4 w-[100%] object-fit' src={CODE3} alt="" />
        <img className='pb-4 w-[100%] object-fit' src={CODE3} alt="" />
        <img src={BLUE} alt="" className='absolute z-10 -right-28 bottom-0 blur-3xl' />
      </div>
      
    </div>
  </>
  )
}

export default Hero