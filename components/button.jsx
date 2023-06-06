import { motion } from 'framer-motion'
import Link from 'next/link'

const Button = props => {
  return (
    <Link href={`${props.link ? props.link : '#'}`}>
      <motion.button
        href={`${props.link ? props.link : '#'}`}
        className={`btn${props.type === 'little' ? '-little' : ''} btn-${
          props.type ? props.type : 'primary'
        }`}
        {...props}
      >
        {props.children}
      </motion.button>
    </Link>
  )
}

export default Button
