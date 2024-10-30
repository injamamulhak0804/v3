import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='font-fira flex text-[#607B96] border-b items-center border-[#1E2D3D] justify-between text-sm  px-10 h-10'>
        <div className='flex items-center justify-center'>
            <Link to="/" className='pe-16 border-e pt-2  select-none cursor-pointer border-[#1E2D3D]'>zamamul hak</Link>
            <div className='flex'>
            <Link to="/" className='pt-2 cursor-pointer select-none  px-4 border-e border-[#1E2D3D]'>_hello</Link>
            <Link to="/about" className='pt-2 cursor-pointer select-none   px-4 border-e border-[#1E2D3D]'>_about-me</Link>
            <Link to="/project"className='pt-2 cursor-pointer select-none  px-3 border-e border-[#1E2D3D]'>_projects</Link>
            </div>
        </div>
        <div>
            <p className='pt-2 cursor-pointer px-3 border-s border-[#1E2D3D]'>_contact-me</p>
        </div>
    </div>
  )
}

export default Header