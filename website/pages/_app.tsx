import '../styles/globals.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 300,
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
