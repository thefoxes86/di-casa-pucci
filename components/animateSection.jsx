import { motion } from 'framer-motion'
const AnimateSection = props => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: props.delay ? props.delay : 0 }}
      viewport={{ amount: 0.3 }}
      {...props}
    >
      {props.children}
    </motion.div>
  )
}

export default AnimateSection
