import Head from 'next/head';
import Slideshow from '@/components/slide';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import Link from 'next/link';
import FooterItem from '@/components/footer';
import Image from 'next/image';
import ReactAdsense from '@pkasila/react-adsense';

import ImageCR from "../public/pfp/pfp_central.webp";
import ImagePR from "../public/pfp/pfp_president.webp";
import ImageSR from "../public/pfp/pfp_secretary.webp";
import ImageVP from "../public/pfp/pfp_vp.webp";


const HomePage = () => {
    return (
    <div className="min-h-screen bg-neutral-900">
        <Head>
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ff6f61"/>
            <meta name='keywords' content="Sandhani Bangladesh Medical College, Sandhani Dhaka Medical College, Blood Donation Near Me, Blood Donation in Dhaka Bangladesh, Blood Bank Near Me, Sandhani Blood Bank, Blood Grouping in Bangladesh, Sandhani"/>
            <meta name='description' content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need."/>
            <meta name='subject' content="Blood Donation Free, Blood Bank"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN,BN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Sandhani - Blood Bank" />
            <meta property="og:description" content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need." />
            <meta property="og:url" content="https://sbmcu.com/" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Sandhani - Blood Bank" />
            <meta name="twitter:description" content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need." />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>Sandhani - Blood Bank</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BZ71381ERP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BZ71381ERP');
            `}
        </Script>
        
        <div className="h-16" />

        <Navbar />

        <Slideshow />

        {/* About Section */}
        <section className="relative -mt-20 mb-16 max-w-4xl mx-auto px-6 text-center" id="about">
            <div className="bg-neutral-800/80 backdrop-blur-lg rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">About Sandhani</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                    Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need.
                </p>
            </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-red-500 to-red-700 p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    <h2 className="text-white text-2xl font-bold mb-4 relative">Donate Blood</h2>
                    <p className="text-white/90 leading-relaxed mb-6 relative">
                        Brighten someone&apos;s day with the gift of life! Donate blood and spread happiness through your generosity. Every drop you give can save a life and make a positive impact on the world.
                    </p>
                    <Link href="/contact" className="relative inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 no-underline border border-white/20">
                        Donate Now
                    </Link>
                </div>
                <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-indigo-500 to-indigo-800 p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    <h2 className="text-white text-2xl font-bold mb-4 relative">Receive Blood</h2>
                    <p className="text-white/90 leading-relaxed mb-6 relative">
                        Need blood? We&apos;re here, day and night, to support you! Our doors are open 24/7, and we&apos;re just a call away. Whether it&apos;s an emergency or a planned procedure, you can count on us.
                    </p>
                    <Link href="/request" className="relative inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 no-underline border border-white/20">
                        Receive Now
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    <h2 className="text-white text-2xl font-bold mb-4 relative">Contact Us</h2>
                    <p className="text-white/90 leading-relaxed mb-6 relative">
                        Need a helping hand? We&apos;ve got you covered! Whether it&apos;s a question, a concern, or a friendly chat, don&apos;t hesitate to reach out. Our team is here and eager to assist you.
                    </p>
                    <Link href="/contact" className="relative inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 no-underline border border-white/20">
                        Contact Us
                    </Link>
                </div>
                <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-blue-700 p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    <h2 className="text-white text-2xl font-bold mb-4 relative">Join Us</h2>
                    <p className="text-white/90 leading-relaxed mb-6 relative">
                        Want to be part of an amazing organization that saves lives with every heartbeat? Join Sandhani, where students like you come together to collect the gift of life!
                    </p>
                    <Link href="/membership" className="relative inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 no-underline border border-white/20">
                        Become a Member
                    </Link>
                </div>
            </div>

            {/* Panel Members */}
            <div className="mb-16">
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">Our Leadership</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { img: ImageCR, name: "লাজিম ইমাম চৌধুরী", title: "Central Committee Rep.", quote: "Be a lifeline, donate blood; your small act, their second chance." },
                        { img: ImagePR, name: "শাদমান কাদির", title: "President", quote: "Share the gift of life, donate blood, and inspire a chain of kindness. Be a hero." },
                        { img: ImageVP, name: "ছাদেকুল ইসলাম স্বজন", title: "Vice President", quote: "Give life, give love. Donate blood today. Your precious gift saves lives." },
                        { img: ImageSR, name: "শাহরিয়ার হাসান আসিফ", title: "General Secretary", quote: "Be a lifeline: Donate blood, ignite hope, save lives." },
                    ].map((member, idx) => (
                        <div key={idx} className="group bg-neutral-800/60 backdrop-blur-sm rounded-2xl border border-white/5 p-6 text-center hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-red-400/30 transition-all">
                                <Image src={member.img} alt={member.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-white font-semibold text-base mb-1">{member.name}</h3>
                            <p className="text-red-400/80 text-sm font-medium mb-3">{member.title}</p>
                            <p className="text-white/50 text-sm italic leading-relaxed">&ldquo;{member.quote}&rdquo;</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ad */}
            <div className="mb-12">
                <ReactAdsense 
                    client={'ca-pub-9901731849909509'}
                    slot={'7369293591'}
                    layout={'in-article'}
                    format={'auto'} 
                />
            </div>
            
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/5">
                <iframe 
                    className="w-full h-100 md:h-125 border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6141.811254317321!2d90.37159805896201!3d23.749418326539278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfc2c95b283f%3A0x535a457573961885!2sSandhani%20Bangladesh%20Medical%20College%20Unit!5e0!3m2!1sen!2sbd!4v1692199261476!5m2!1sen!2sbd" 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                />
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
