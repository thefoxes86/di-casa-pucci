import { SplitText } from '@cyriacbr/react-split-text'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowDown from '../public/images/arrow-down.svg'
import Image from 'next/image'

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
          initial={{ backgroundSize: 'auto 100%' }}
          animate={{ backgroundSize: 'auto 120%' }}
          transition={{ type: 'spring', duration: 50 }}
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
                <span className="block w-100">L'ECCELLENZA</span>{' '}
                <span className="block w-100">DELLA RAZZA,</span>
                <span className="block w-100 font-bold">SI SENTE.</span>
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            animate="animate"
            variants={variants}
            className="hero_header_home__arrow"
          >
            <Image src={ArrowDown} alt="arrow" width={50} height={50} />
            <Image src={ArrowDown} alt="arrow" width={50} height={50} />
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </section>
  )
}
