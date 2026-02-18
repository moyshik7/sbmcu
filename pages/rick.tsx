import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'


const RickPage = () => {
    return (
    <div className="min-h-screen bg-neutral-900">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BZ71381ERP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BZ71381ERP');
            `}
        </Script>
        <Head>
            <title>You Have Been RickRolled</title>
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
            <div className="rounded-2xl overflow-hidden border border-white/5">
                <iframe 
                    className="w-full aspect-video border-0"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&mute=0&loop=1" 
                    title="Never Gonna Give You Up" 
                    allow="autoplay" 
                    allowFullScreen 
                />
            </div>
        </main>
    </div>);
};
  
export default RickPage;
