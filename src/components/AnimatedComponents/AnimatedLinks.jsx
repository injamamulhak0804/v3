import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <Link to={path}>
      {text}
    </Link>
  </motion.div>
  )
}

export default AnimatedLinks