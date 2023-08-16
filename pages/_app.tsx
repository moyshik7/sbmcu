import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
    return (<>
        <Script 
            async={true}
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9901731849909509"
            crossOrigin="anonymous"
            onError={ (e) => { console.error('Script failed to load', e) }}
        />
        <Component {...pageProps} />
    </>)
}
