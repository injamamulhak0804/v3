import React from 'react'
import SideBarContact from './SideBarContact'
import { FaXmark } from 'react-icons/fa6'

const Contact = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className='overflow-hidden h-[89%] flex 2xl:h-[93%]'>
        <div className='w-[16%] border-e h-[100%] border-[#1E2D3D]'>
            <SideBarContact/>
        </div>
        <div className='w-[50%] font-fira text-[#607B96] border-e h-[100%] border-[#1E2D3D]'>
            <div className='flex px-2 h-[6%] w-fit text-white items-center font-fira border-e text-xs  border-[#1E2D3D] gap-x-1'>
                <p className='text-[#607B96]'>contacts</p>
                <FaXmark className='text-gray-400' />
            </div>
            <div className='flex font-fira flex-col items-center pt-20 gap-4 text-xs border-t border-[#1E2D3D]'>
                <div className='flex flex-col gap-2 w-[50%]'>
                    <label htmlFor="name">-name:</label>
                    <input type="text" placeholder='' className='bg-transparent text-[#344f6d] p-3 rounded-lg border border-[#1E2D3D]' />
                </div>
                <div className='flex flex-col gap-2 w-[50%]'>
                    <label htmlFor="name">-email:</label>
                    <input type="email" placeholder='' className='bg-transparent text-[#344f6d] p-3 rounded-lg border border-[#1E2D3D]' />
                </div>
                <div className='flex flex-col gap-2 w-[50%]'>
                    <label htmlFor="name">-message:</label>
                    <textarea type="text" placeholder='' className='w-full h-32 bg-transparent text-[#344f6d] p-3 rounded-lg border border-[#1E2D3D]' />
                </div>
                <button className='bg-[#1C2B3A] p-3 text-white rounded-md'>submit-message</button>
            </div>
        </div>
        <div className='w-[34%] font-fira text-[#607B96] border-e border-b h-[100%] border-[#1E2D3D]'>
            <div className='flex h-[6%] w-fit text-white items-center font-fira text-xs  border-[#1E2D3D] gap-x-1'>
                <p></p>
            </div>
            <div className='flex font-fira pt-5 text-xs border-t border-[#1E2D3D]'>
                <ol className='text-sm text- ps-2'>
                {items.map(item => (
                    <li className='leading-6' key={item}>{item}.</li>
                ))}
                </ol>
                <div className='2xl:leading-8 2xl:ps-6 leading-6 ps-6 2xl:text-[1rem] '>
                    <p>const button = document.querySelector('#sendBtn')</p>
                    <br/>
                    <p>const message = &#123;</p>
                    <p className='ps-5'>	name: "Jonathan Davis",
                    </p>
                    <p className='ps-5'>email: "",
                    </p>
                    <p className='ps-5'>message: "",
                    </p>
                    <p className='ps-5'>date: "Thu 21 Apr"</p>
                    <p>&#125;</p>
                    <br/>
                    <p>button.addEventListener('click', ()=&gt; &#123;</p>
                    <p className='ps-5'>form.send(message);</p>
                    <p>&#125;</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact