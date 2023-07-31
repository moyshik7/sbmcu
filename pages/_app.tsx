import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
    return (
		<div>
      		<Script src="https://www.googletagmanager.com/gtag/js?id=G-BZ71381ERP" />
      		<Script id="google-analytics">
        		{`
          			window.dataLayer = window.dataLayer || [];
          			function gtag(){dataLayer.push(arguments);}
          			gtag('js', new Date());
 
          			gtag('config', 'G-BZ71381ERP');
        		`}
      		</Script>
			<Component {...pageProps} />
    	</div>
    )
}
