import Link from 'next/link'
import { motion } from 'framer-motion'

const itemsMenu = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'I Cuccioli',
    link: '/cuccioli',
  },

  {
    name: "L'Allevamento",
    link: '/allevamento',
  },
  {
    name: "L'Addestramento",
    link: '/addestramento',
  },
  {
    name: "L'Accoppiamento",
    link: '/accoppiamento',
  },

  {
    name: 'Di Casa Pucci',
    link: '/chi-siamo',
  },
  {
    name: 'Le News',
    link: '/news',
  },
  {
    name: 'Contatti',
    link: '/contatti',
  },
]

const variantsContainer = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const variantsItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
const MenuItem = ({ children, ...props }) => {
  return (
    <motion.div variants={variantsContainer}>
      {itemsMenu.map((item, index) => (
        <motion.div
          variants={variantsItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={index}
          onClick={props.toggleOpen}
        >
          <Link
            className="menu-item"
            href={item.link}
            dangerouslySetInnerHTML={{ __html: item.name }}
          ></Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default MenuItem
