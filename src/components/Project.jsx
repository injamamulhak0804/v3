import React, { useState } from 'react'
import SidebarAbout from './SidebarAbout'
import SideBarProject from './SideBarProject'
import { FaXmark } from 'react-icons/fa6'
import { FIGMA, ProjectDetails } from '../utils/constants'
import ProjectCart from './ProjectCart'

const Project = () => {
  const [language, setLanguage] = useState('figma')
  const [selected, isSlected] = useState('figma')
  const handleclick = (e, txt)=>{
    console.log(txt);
    isSlected(txt)
    setLanguage(txt)
  }
  return (
    <div className='overflow-hidden h-[89%] flex 2xl:h-[93%]'>
        <div className='w-[16%] border-e h-[100%] border-[#1E2D3D]'>
            <SideBarProject selected={selected} language={language} isSlected={isSlected} handleclick={handleclick}/>
        </div>
        <div className='w-[84%] font-fira text-[#607B96] border-e border-b h-[100%] border-[#1E2D3D]'>
            <div className='flex px-2 h-[6%] w-fit text-white items-center font-fira border-e text-xs  border-[#1E2D3D] gap-x-1'>
                <p className='text-[#607B96]'>projects</p>
                <FaXmark className='text-gray-400' />
            </div>
            <div className='flex px-[120px] pt-3 font-fira gap-5 flex-wrap text-xs border-t border-[#1E2D3D]'>
              {
                language.toLocaleLowerCase() == "figma" && ProjectDetails.figma.map((item, idx)=> <ProjectCart key={idx} data={item}/>)
              }
            </div>
        </div>
    </div>
  )
}

export default Project