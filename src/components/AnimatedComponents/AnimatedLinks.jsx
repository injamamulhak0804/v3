import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

import React from 'react'

const AnimatedLinks = ({time, text, path}) => {
    const duration = typeof time === 'number' ? time : 1;
    // console.log(isActive)
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration}}
  >
    <NavLink to={path}>
      {text}
    </NavLink>
  </motion.div>
  )
}

export default AnimatedLinks