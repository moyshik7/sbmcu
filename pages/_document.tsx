import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
    <Html lang="en">
        <Head>
            <Script 
                async={true}
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9901731849909509"
                crossOrigin="anonymous"
                onError={ (e) => { console.error('Script failed to load', e) }}
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
    )
}
