import { AnimatePresence, motion } from 'framer-motion'
import PageLoader from './pageLoader'
import React, { useEffect } from 'react'

export default function Container({ children }) {
  return <div className="container page">{children}</div>
}
