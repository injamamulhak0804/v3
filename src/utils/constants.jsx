import Typewriter from 'typewriter-effect';
import {FaCss3, FaDatabase, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact, FaSortDown } from 'react-icons/fa'
import { motion } from 'framer-motion';

export const CODE1 = "img/code-snippet 1.png"
export const CODE2 = "img/code-snippet 2.png"
export const CODE3 = "img/code-snippet 3.png"
export const CODE4 = "img/code-snippet 4.png"
export const GREEN = "img/Green.png"
export const BLUE = "img/Blue.png"
export const CODEGIT = "img/code.png"
export const CODEGIT1 = "img/codegit.png"
export const FIGMA = "img/figma.png"


export const ProjectDetails = {
  figma: [
    {
      name: "Glowdent",
      link:"https://www.figma.com/proto/XdqeSxsfu6P7hMwTgpTmJM/Day-5__Dental?t=ntKjlMEt4eBHahTL-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
      img:"img/glowdent_figma.png",
      desc: "Multi page Application (MPA) Dynamic website"
    },
    {
      name: "Plant peace",
      link:"https://www.figma.com/proto/S5mVzMMu6nYwxxGxjmFUbD/Day_10_Garden?node-id=1-1889&node-type=frame&t=zXS4bmH9Kgh0m7IA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1889",
      img:"img/plant_peace_figma.png",
      desc: "Multi page Application (MPA) Dynamic website"
    },
    {
      name: "Shopping website",
      link:"https://www.figma.com/proto/TfNFBIyJeiJtYs1fIFka5f/Day---13_Shopping?node-id=3-1437&node-type=frame&t=gVixstDCz5G0HoKd-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A1437",
      img:"img/shopping_figma.png",
      desc: "Multi page Application (MPA) Dynamic website"
    },
    {
      name: "Hotel Booking",
      link:"https://www.figma.com/proto/mAz7LJHo2B7OtlT3T3far9/Day-04__Booking_Hotel?t=ntKjlMEt4eBHahTL-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=68-1207&starting-point-node-id=1%3A2",
      img:"img/Hotel_booking_figma.png",
      desc: "Multi page Application (MPA) Dynamic website"
    },
    {
      name: "Travel Website",
      link:"https://www.figma.com/proto/Sm2HfBjQuRmcSc9s5pOm84/Day-06__Travel_webstie?node-id=1-2&node-type=frame&t=ntKjlMEt4eBHahTL-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      img:"img/tarvel_figma.png",
      desc: "Multi page Application (MPA) Dynamic website"
    },
    {
      name: "pharmacy Website",
      link:"https://www.figma.com/proto/F6rIiYN4kZmYj7n5zSMT9c/Day-03%F0%9F%9A%80?node-id=1-2&node-type=frame&t=gVixstDCz5G0HoKd-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      img:"img/pharmacy_figma.png",
      desc: "Single page Application (SPA) Stactic website"
    },
  ],
  html:[

  ]
}

export const PorjectSideBar = [
  {
    lanName: "Figma",
    icon: <FaFigma />
  },
  {
    lanName: "HTML",
    icon: <FaHtml5 />
  },
  {
    lanName: "CSS",
    icon: <FaCss3 />
  },
  {
    lanName: "Js",
    icon: <FaJs />
  },
  {
    lanName: "React",
    icon: <FaReact />
  },
  {
    lanName: "Node js",
    icon: <FaNodeJs />
  },
  {
    lanName: "MongoDB",
    icon: <FaDatabase />
  }, 
]


export const TypeWriter = () =>{
    return <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration:3 }}
    className='text-3xl text-[#4D5BCE] flex gap-1 pb-10'>&gt; 
    <Typewriter
      options={{
        strings: ['Front-end developer', 'Reactjs developer', "FullStack developer", "MERN developer"],
        autoStart: true,
        loop: true,
        
      }}
    />
  </motion.h2>
}

export const Checkbox = ({ text, icon, handleclick, selected, isSlected, language }) => {
  return (
    <div className="inline-flex mt-4 items-center ml-3.5">
      <label className="flex items-center cursor-pointer relative" htmlFor={text}>
        <input 
          type="radio" 
          name="languages" // Ensure that all radio buttons share the same name
          checked={selected.toLowerCase() == text.toLowerCase() ? true : false} // Manage selected stat{true}  
          onChange={(e) => handleclick(e, text)} // Pass the text for identification
          className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" 
          id={text} 
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" strokeWidth="1">
            <circle cx="10" cy="10" r="5" />
          </svg>
        </span>
      </label>
      <label className="cursor-pointer justify-center items-center gap-1 flex font-fira ml-3 text-slate-600 text-sm" htmlFor={text}>
        <span>{icon}</span>
        <span>{text}</span>
      </label>
    </div>
  );
};
