import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';
import Image from 'next/image';


const SpotlightPage = () => {
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
            <meta name='keywords' content="Step into The Spotlight, Freshers 23, Orientation Bangladesh Medical College, Bangladesh Medical College, Sandhani Blood Bank, Sandhani"/>
            <meta name='description' content="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit"/>
            <meta property="og:title" content="Step into The Spotlight- 2023" />
            <meta property="og:description" content="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta name="twitter:title" content="Step into The Spotlight- 2023" />
            <meta name="twitter:description" content="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:image" content="https://sbmcu.com/b/blog_006.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@s_bmcu" />
            <title>Step into The Spotlight- 2023</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-white">
            <article className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold">Step into The Spotlight- 2023</h1>
                <p className="text-white/80 leading-relaxed text-lg">Welcome, freshers of BM-37</p>
                <p className="text-white/80 leading-relaxed text-lg">We are excited to have you on board and look forward to supporting you on your journey.</p>
                <p className="text-white/80 leading-relaxed text-lg">We tried our best to enlighten your journey by unlocking the secrets of &quot;Blood Grouping and Screening&quot; and we hope you all will make the best use of these experiences.</p>
                <p className="text-white/80 leading-relaxed text-lg">We also want to extend our heartfelt gratitude to Dr.Mizanur Rahman sir, Dr. Md. Alamgir sir and Dr. Panna sir for gracing our program with your presence.</p>
                
                <div className="rounded-2xl overflow-hidden border border-white/5">
                    <iframe className="w-full aspect-video border-0" src="https://www.youtube.com/embed/69Ab78NVa5A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["blog_006", "blog_001", "blog_002", "blog_003", "blog_004", "blog_005"].map((name, idx) => (
                        <Image key={idx} src={`/b/${name}.webp`} width={1080} height={720} alt="Step into The Spotlight- 2023" className="w-full h-auto rounded-2xl" />
                    ))}
                </div>
            </article>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default SpotlightPage;
