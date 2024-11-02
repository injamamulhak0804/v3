import { motion } from 'framer-motion';

const AnimatedText = ({text, time}) => {
    const duration = typeof time === 'number' ? time : 1;
  return(
    <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration }}
    // className="text-white"
  >
    {text}
  </motion.p>
  )
};

export default AnimatedText;
