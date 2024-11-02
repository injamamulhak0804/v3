import React from 'react'
import { FaTwitter, FaInstagram, FaGithub    } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='font-fira flex text-[#607B96] border-t items-center border-[#1E2D3D] justify-between text-sm  px-10 h-7'>
        <div className='flex items-center justify-center'>
            <h3 className='pe-5 border-e pt-2 cursor-pointer border-[#1E2D3D]'>find me in:</h3>
            <div className='flex'>
            <p className='pt-2 cursor-pointer text-md px-4 border-e border-[#1E2D3D]'><FaTwitter /></p>
            <a target="_blank" href="https://www.instagram.com/mr.brad_ford/">
              <p className='pt-2 cursor-pointer text-md  px-4 border-e border-[#1E2D3D]'><FaInstagram /></p>
            </a>
            </div>
        </div>
        <div>
        <a className='text-lg px-2' target='_blank' href="https://github.com/injamamulhak0804">
            <p className='cursor-pointer flex items-center px-2 border-s border-[#1E2D3D]'>
              <span className='text-xs pe-2'>@zamam</span>
              <FaGithub  />
            </p>
          </a>
        </div>
    </div>
  )
}

export default Footer