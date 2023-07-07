import { AppProps } from 'next/app'
import '../styles/index.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const variants = {
  initialState: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    opacity: 0,
  },
  animateState: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    opacity: 1,
  },
  exitState: {
    clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
    opacity: 0,
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])
  return (
    <AnimatePresence
      mode="wait"
      // onExitComplete={() => setTimeout(() => window.scrollTo(0, 0), 1000)}
    >
      <motion.div
        key={Math.random() * 100}
        initial="initialState"
        animate="animateState"
        className="mx-auto page-content"
        exit="exitState"
        variants={variants}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
