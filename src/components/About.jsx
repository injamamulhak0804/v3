import React from 'react'
import SidebarAbout from './SidebarAbout'
import { FaXmark } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CODE2, CODEGIT, CODEGIT1 } from '../utils/constants';

const About = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className='overflow-hidden h-[89%] flex 2xl:h-[93%]'>
        <div className='w-[16%] border-e h-[100%] border-[#1E2D3D]'>
            <SidebarAbout/>
        </div>
        <div className='w-[40%] font-fira text-[#607B96] border-e border-b h-[100%] border-[#1E2D3D]'>
            <div className='flex px-2 h-[6%] w-fit text-white items-center font-fira border-e text-xs  border-[#1E2D3D] gap-x-1'>
                <p className='text-[#607B96]'>personal-info</p>
                <FaXmark className='text-gray-400' />
            </div>
            <div className='flex font-fira text-xs border-t border-[#1E2D3D]'>
                <ol className='text-sm text- ps-2'>
                {items.map(item => (
                    <li className='leading-6' key={item}>{item}.</li>
                ))}
                </ol>
                <div className='leading-6 ps-6'>
                    <p>/**</p>
                    <p>* About me</p>
                    <p>* Hello! just call</p>
                    <p>* me Zamam (Injamamul Hak) love❤️</p>
                    <p>* to Build things for web When I</p>
                    <p>* decided to try editing in Photoshop</p>
                    <p>* </p>
                    <p>* learning some OOPs programming </p>
                    <p>* languages like C++, Python, and  </p>
                    <p>* Java during my university study  </p>
                    <p>* From there, I made the decision to </p>
                    <p>* begin my career in web development✨</p>
                    <p>**/</p>
                </div>
            </div>
        </div>

        <div className='w-[44%] px-[20px] font-fira text-[#607B96] border-e border-b h-[100%] border-[#1E2D3D]'>
            <div className='flex h-[6%] w-fit text-white items-center font-fira text-xs  border-[#1E2D3D] gap-x-1'>
                <p></p>
            </div>
            <div className='font-fira text-xs border-t border-[#1E2D3D]'>
                <p className='py-5'>// Code Snippet Show case: </p>

                <div className='pb-5'>
                    <div className='flex pb-2 justify-between items-start'>
                        <a href='https://github.com/injamamulhak0804' className='flex gap-2'>
                            <div className='w-7 rounded'>
                                    <img className='rounded-full object-cover' src="https://avatars.githubusercontent.com/u/113300160?s=400&u=71f55529fa8de2147fefeb799dbf09f3afd493c6&v=4" alt="" />
                            </div>
                            <div>
                                <p className='text-[#5565E8]'>@zamam</p>
                                <p className='text-[10px]'>Created 1 months ago</p>
                            </div>
                        </a>
                        <div>
                            <a target='_blank' href="https://github.com/injamamulhak0804/DevTinder/blob/master/src/models/user.js" className='text-lg items-center gap-1 flex'>
                                <span className='text-xs font-fira'>Live</span>
                                <HiOutlineExternalLink/>
                            </a>
                        </div>
                    </div>
                    <img src={CODEGIT} alt="" />
                </div>

                <div >
                    <div className='flex pb-2 justify-between items-start'>
                        <a href='https://github.com/injamamulhak0804' className='flex gap-2'>
                            <div className='w-7 rounded'>
                                    <img className='rounded-full object-cover' src="https://avatars.githubusercontent.com/u/113300160?s=400&u=71f55529fa8de2147fefeb799dbf09f3afd493c6&v=4" alt="" />
                            </div>
                            <div>
                                <p className='text-[#5565E8]'>@zamam</p>
                                <p className='text-[10px]'>Created 2 months ago</p>
                            </div>
                        </a>
                        <div>
                            <a target='_blank' href="https://github.com/injamamulhak0804/DevTinder/blob/master/src/models/user.js" className='text-lg items-center gap-1 flex'>
                                <span className='text-xs font-fira'>Live</span>
                                <HiOutlineExternalLink/>
                            </a>
                        </div>
                    </div>
                    <img src={CODEGIT1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About