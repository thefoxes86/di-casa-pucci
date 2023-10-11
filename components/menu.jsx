import { motion } from 'framer-motion'
import MenuToggle from './menu-toggle'
import MenuItem from './menu-item'
import { useCycle } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './container'

const navbar = {
  open: () => ({
    height: 'auto',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    height: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  openBlur: {
    filter: 'blur(60px) grayscale(100%)',

    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 40,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closedBlur: {
    filter: 'blur(0px) grayscale(0)',
    backgroundColor: 'transparent',
    zIndex: -1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  useEffect(() => {
    const body = document.querySelector('body')

    if (isOpen) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
  }, [isOpen])
  return (
    <>
      <motion.div
        animate={isOpen ? 'openBlur' : 'closedBlur'}
        variants={navbar}
        className="overlay_menu"
      ></motion.div>
      <motion.div className="menu_wrapper">
        <motion.div
          className="menu_container container"
          animate={isOpen ? 'open' : 'closed'}
        >
          <span className="logo">
            <Link href="/">
              <Image
                loading="lazy"
                src="http://backend.dicasapucci.com/wp-content/uploads/2023/05/LOGO-DCP_Esteso@2x.png"
                width={210}
                height={100}
                alt="logo"
              />
            </Link>
          </span>

          <MenuToggle toggle={() => toggleOpen()} />
          <motion.div
            className={`menu`}
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={navbar}
          >
            <div className="container">
              <MenuItem toggleOpen={toggleOpen} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Menu
