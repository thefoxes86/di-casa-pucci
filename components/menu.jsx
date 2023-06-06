import { motion } from 'framer-motion'
import MenuToggle from './menu-toggle'
import MenuItem from './menu-item'
import { useCycle } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
}

const Menu = () => {
  const containerRef = useRef(null)
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.div className="menu_container" animate={isOpen ? 'open' : 'closed'}>
      <span className="logo">
        <Link href="/">
          <Image
            src="https://www.dicasapucci.com/wp-content/uploads/2023/05/LOGO-DCP_Esteso@2x.png"
            width={210}
            height={100}
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
        <MenuItem />
      </motion.div>
    </motion.div>
  )
}

export default Menu
