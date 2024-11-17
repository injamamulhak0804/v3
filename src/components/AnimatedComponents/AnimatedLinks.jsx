import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

import React from 'react'

const AnimatedLinks = ({time, text, path}) => {
    const duration = typeof time === 'number' ? time : 1;
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration}}
  >
    <NavLink 
              to={path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                padding: '5px 10px',
                borderBottom: isActive ? '2px solid yellow' : 'none', // Yellow border for active link
                color: isActive ? 'white' : 'inherit',  // Optional: Adjust text color for active state
                transition: 'border 0.3s ease',  // Smooth transition for border
              })}
    >
      {text}
    </NavLink>
  </motion.div>
  )
}

export default AnimatedLinks