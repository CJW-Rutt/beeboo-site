import '../styles/globals.css'
import { Truculenta } from 'next/font/google'

const truculenta = Truculenta({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
