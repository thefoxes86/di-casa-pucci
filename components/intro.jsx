import { SplitText } from '@cyriacbr/react-split-text'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowDown from '../public/images/arrow-down.svg'
import Image from 'next/image'
import Link from 'next/link'

const variants = {
  animate: {
    bottom: '30px',
    transition: {
      repeat: 'infinite',
      duration: 1,
      delayChildren: 0.5,
      type: 'spring',
    },
  },
}

export default function Intro() {
  return (
    <section className="hero_header_home_container">
      <AnimatePresence>
        <motion.section
          className="hero_header_home"
          initial={{ transform: 'scale(1.2)', opacity: 0 }}
          whileInView={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ type: 'spring', duration: 5 }}
        >
          <motion.div className="hero_header_home__content">
            <motion.div className="wrapper_line">
              <motion.span
                className="inline-block"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  duration: 2.5,
                }}
              >
                <Link href="/pastori">
                  <span className="block w-100">I NOSTRI</span>{' '}
                  <span className="block w-100 font-bold">PASTORI</span>
                </Link>
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="hero_header_home"
          initial={{ transform: 'scale(1.2)', opacity: 0 }}
          whileInView={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ type: 'spring', duration: 5 }}
        >
          <motion.div className="hero_header_home__content">
            <motion.div className="wrapper_line">
              <motion.span
                className="inline-block"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  duration: 2.5,
                }}
              >
                <Link href="/dobermann">
                  <span className="block w-100">I NOSTRI</span>{' '}
                  <span className="block w-100 font-bold">DOBERMANN</span>
                </Link>
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </section>
  )
}
