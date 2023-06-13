import { AnimatePresence, motion } from 'framer-motion'
import PageLoader from './pageLoader'
import { useEffect } from 'react'

export default function Container({ children }) {
  useEffect(() => {
    console.log('MOUNT ANIMATE CONATINER')
    return () => console.log('UNMOUNT ANIMATE CONATINER')
  }, [])
  return (
    <AnimatePresence>
      <motion.div
        key={Math.random() * 100}
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 70, opacity: 0 }}
        transition={{
          type: 'spring',
        }}
      >
        <div className=" mx-auto page-content">{children}</div>
      </motion.div>
    </AnimatePresence>
  )
}
