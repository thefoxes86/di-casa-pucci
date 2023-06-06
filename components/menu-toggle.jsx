import * as React from 'react'
import { motion } from 'framer-motion'

const Path = props => <motion.span className="menu_line" {...props} />

const MenuToggle = ({ toggle }) => (
  <button className="menu_box_line" onClick={toggle}>
    <Path
      variants={{
        closed: { rotate: 0 },
        open: { rotate: -45, y: 8 },
      }}
    />
    <Path
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.1 }}
    />
    <Path
      variants={{
        closed: { rotate: 0 },
        open: { rotate: 45, y: -8 },
      }}
    />
  </button>
)

export default MenuToggle
