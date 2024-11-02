import React from 'react'
import { FIGMA } from '../utils/constants'
import { FaFigma } from 'react-icons/fa'

const ProjectCart = ({data}) => {
    const {name, img, link, desc} = data
  return (
            <div  className='w-[250px] relative border flex-col justify-between flex rounded-lg border-[#1E2D3D] h-[230px]'>
                <FaFigma className='bg-[#86E1F9] text-2xl p-[0.25rem] rounded-sm top-2 right-2 absolute text-black'/>
                    <img src={img} className='object-cover rounded-t-xl w-[100%]' alt="" />
                    <div className='px-3'>
                      <p className='pb-3'>{desc}</p>
                      <button className='px-3 py-2 bg-[#1C2B3A] mb-2 text-white font-fira  rounded-md'>
                        <a href={link} target='_blank'>view-project</a>
                      </button>
                    </div>  
              </div>
  )
}

export default ProjectCart