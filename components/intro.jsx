import { SplitText } from '@cyriacbr/react-split-text'
import { AnimatePresence, motion } from 'framer-motion'

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
              <SplitText
                LetterWrapper={({ letterIndex, countIndex, children }) => (
                  <motion.span
                    className="inline-block"
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 50,
                      duration: 2.5,
                      delay: countIndex * 0.02,
                    }}
                  >
                    {children}
                  </motion.span>
                )}
              >
                L'ECCELLENZA DELLA RAZZA,SI SENTE.
              </SplitText>
            </motion.div>
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </section>
  )
}
