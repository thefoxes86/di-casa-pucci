import Footer from './footer'
import Meta from './meta'
import { motion } from 'framer-motion'
import Menu from './menu'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />

      <div className="min-h-screen">
        <Menu />

        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
