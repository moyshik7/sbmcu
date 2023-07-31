import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
    return (
		<div>
			<Component {...pageProps} />
    	</div>
    )
}
