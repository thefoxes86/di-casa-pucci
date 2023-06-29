import { motion } from 'framer-motion'
const AnimateSection = props => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ amount: 0.5 }}
      {...props}
    >
      {props.children}
    </motion.div>
  )
}

export default AnimateSection
