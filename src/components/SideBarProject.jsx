import React from 'react'
import {FaCss3, FaDatabase, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact, FaSortDown, FaVuejs } from 'react-icons/fa'
import { Checkbox, PorjectSideBar } from '../utils/constants'

const SideBarProject = ({handleclick, selected, language, isSlected}) => {
  return (
    <div>
        <div className='flex p-2 border-b border-[#1E2D3D] text-xs'>
            <FaSortDown className='text-white'/> 
            <span className='font-fira text-white ps-1'>projects</span>
        </div>
        <div className='flex flex-col'>
          {
            PorjectSideBar.map((item)=> <Checkbox key={item.lanName} language={language} selected={selected} isSlected={isSlected} handleclick={handleclick} text={item.lanName} icon={item.icon}/>)
          }
        </div>
    </div>
  )
}

export default SideBarProject