import '@/styles/globals.css'
import Footer from './footer'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
      <Footer />
    </>
    ) 
}
