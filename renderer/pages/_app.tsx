// import '../styles/globals.css'
import '../pages/globals.css'
import HomeIN from '.'
import type { AppProps } from 'next/app'
// import FooterEN from '../components/footerEN'
// import '../pages/globals.css'
// import FooterEN from 'https://github.com/GDSimpson3/Git-global-components/blob/main/footer.jsx'
export default function App({ Component, pageProps }: AppProps) {
// export default function App({ Component, pageProps }) {
  return(
    <>
    <HomeIN/>
    {/* <br /><br /> */}
   <Component {...pageProps} />
   {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}

   {/* <FooterEN/> */}
   </>
  )
}
