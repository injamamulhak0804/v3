import React, { useState } from 'react'
import SidebarAbout from './SidebarAbout'
import SideBarProject from './SideBarProject'
import { FaXmark } from 'react-icons/fa6'
import { FIGMA, ProjectDetails } from '../utils/constants'
import ProjectCart from './ProjectCart'
import { FaCss3, FaCss3Alt, FaFigma, FaHtml5, FaJs, FaJsSquare, FaReact } from 'react-icons/fa'

const Project = () => {
  const [language, setLanguage] = useState('figma')
  const [selected, isSlected] = useState('figma')
  const handleclick = (e, txt)=>{
    isSlected(txt)
    setLanguage(txt)
  }
  console.log(language);
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
            <div className='pt-3 font-fira text-xs border-t border-[#1E2D3D]'>
              <div className='max-w-[75%] flex flex-wrap mx-auto gap-5 w-full  2xl:mx-auto'>
              {
                language.toLocaleLowerCase() == "figma" && ProjectDetails.figma.map((item, idx)=> <ProjectCart key={idx} icon={<FaFigma />} data={item}/>)
              }
              {
                language.toLocaleLowerCase() == "html" && ProjectDetails.html.map((item, idx)=> <ProjectCart key={idx} icon={<FaHtml5 />} data={item}/>)
              }
              {
                language.toLocaleLowerCase() == "css" && ProjectDetails.css.map((item, idx)=> <ProjectCart key={idx} icon={<FaCss3Alt />} data={item}/>)
              }
              {
                language.toLocaleLowerCase() == "js" && ProjectDetails.js.map((item, idx)=> <ProjectCart key={idx} icon={<FaJsSquare />} data={item}/>)
              }
              {
                language.toLocaleLowerCase() == "react" && ProjectDetails.react.map((item, idx)=> <ProjectCart key={idx} icon={<FaReact />} data={item}/>)
              }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project