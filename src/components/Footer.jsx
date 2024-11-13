import React from 'react'
import { FaInstagram, FaGithub, FaGitAlt, FaGithubAlt    } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
       <div className='font-fira fixed bottom-0 px-5 flex text-[#607B96] bg-[#011627] w-full border-t items-center border-[#1E2D3D] justify-between text-sm  md:px-10 md:h-7 h-9'>
          <div className='flex items-center justify-center'>
              <h3 className='md:pe-5 hidden md:block border-e md:pt-2 cursor-pointer border-[#1E2D3D]'>find me in:</h3>
              <div className='flex items-center'>
                <a href="https://x.com/kumaruT31322" target='_blank'>
                <p className='md:pt-2 cursor-pointer text-xl px-4 border-e border-[#1E2D3D]'><FaXTwitter /></p>
                </a>
                <a target="_blank" href="https://www.instagram.com/mr.brad_ford/">
                  <p className='md:pt-2 cursor-pointer text-xl  px-4 border-e border-[#1E2D3D]'><FaInstagram /></p>
                </a>
                <a target="_blank" href="https://github.com/injamamulhak0804">
                  <p className='md:pt-2 cursor-pointer text-xl  px-4 border-e border-[#1E2D3D]'><FaGithubAlt /></p>
                </a>
              </div>
          </div>
          <div>
          <a className='text-lg px-2' target='_blank' href="https://github.com/injamamulhak0804">
              <p className='cursor-pointer flex items-center text-xl px-2 border-s border-[#1E2D3D]'>
                <span className='text-xs pe-2'>@zamam</span>
                <FaGithub  />
              </p>
            </a>
          </div>
      </div>
    </>
  )
}

export default Footer