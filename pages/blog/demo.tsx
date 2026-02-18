import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';
import Image from 'next/image';


const DemoPage = () => {
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
            <meta name="theme-color" content="#ff6f61"/>
            <title>Sandhani Demo Blog</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-white">
            <article className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold">Command response methods</h1>
                <p className="text-white/80 leading-relaxed text-lg">
                    There are multiple ways of responding to a slash command; each of these are covered in the following segments. Using an interaction response method confirms to Discord that your bot successfully received the interaction, and has responded to the user.
                </p>
                <p className="text-white/80 leading-relaxed text-lg">
                    The most common way of sending a response is by using the ChatInputCommandInteraction#reply() method, as you have done in earlier examples.
                </p>
                <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/10 p-5">
                    <p className="text-white/90">pp</p>
                </div>
                <div className="rounded-xl border-l-4 border-amber-400 bg-amber-400/10 p-5">
                    <p className="text-white/90 leading-relaxed">Initially an interaction token is only valid for three seconds, so that&apos;s the timeframe in which you are able to use the ChatInputCommandInteraction#reply() method. Responses that require more time (&apos;Deferred Responses&apos;) are explained later in this page.</p>
                </div>
                <Image height={720} width={1080} alt="Sandhani Bangladesh Medical College" src="/gallery/gallery_004.webp" className="w-full h-auto rounded-2xl" />
            </article>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default DemoPage;
