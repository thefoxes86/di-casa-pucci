import { AppProps } from 'next/app'
import '../styles/index.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const variants = {
  initialState: {
    clipPath: 'inset(0 0 100% 0)',
    opacity: 0,
  },
  animateState: {
    clipPath: 'inset(-100px)',
    opacity: 1,
  },
  exitState: {
    clipPath: 'inset(100% 0 100% 0)',
    opacity: 0,
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
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
