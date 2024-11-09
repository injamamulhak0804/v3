import React from 'react'
import { FaSortDown, FaPhoneAlt  } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { IoIosFolder, IoMdMail  } from "react-icons/io";

const SideBarContact = () => {
    return (
        <div>

            <div className='flex p-2 border-t border-b border-[#1E2D3D] text-xs'>
                <FaSortDown className='text-white'/> 
                <span className='font-fira text-white ps-1'>contacts</span>
            </div>
            <div className='flex px-2 py-2 text-white items-center font-fira text-[10px] gap-x-1'>
                <IoMdMail className='text-gray-400' />
                <p>injamamulhak080404@gmail.com</p>
            </div>
            <div className='flex px-2 text-white items-center font-fira text-[10px] gap-x-1'>
                <FaPhoneAlt  className='text-gray-400' />
                <p>+91 63698325**</p>
            </div>
        </div>
      )
}

export default SideBarContact