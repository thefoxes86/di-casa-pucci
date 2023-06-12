import { AppProps } from 'next/app'
import '../styles/index.css'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import PageLoader from '../components/pageLoader'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Used for page transition
    const start = () => {
      console.log('Animate Start')
      setLoading(true)
    }
    const end = () => {
      console.log('Animate End')
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
