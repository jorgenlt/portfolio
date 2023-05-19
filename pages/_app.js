import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Script from 'next/script';
import '@/styles/app.scss';


export default function App({ Component, pageProps }) {  
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y3C5HBGP1R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y3C5HBGP1R);
        `}
      </Script>

      <Component {...pageProps} />
    </>
    ) 
}
