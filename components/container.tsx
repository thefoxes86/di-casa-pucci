import { motion } from 'framer-motion'

export default function Container({ children }) {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 70, opacity: 0 }}
      transition={{
        type: 'spring',
      }}
    >
      <div className=" mx-auto page-content">{children}</div>
    </motion.div>
  )
}
