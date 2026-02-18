import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import Link from 'next/link';
import FooterItem from '@/components/footer';


const ContactPage = () => {
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
            <meta name='keywords' content="Sandhani Bangladesh Medical College, Sandhani Phone Number, Sandhani President, Blood Donor Number, Blood Donor in bangladesh, Blood Donor in Dhaka"/>
            <meta name='description' content="Need a helping hand? We've got you covered! Whether it's a question, a concern, or a friendly chat, don't hesitate to reach out to us. Our team is here and eager to assist you 24/7"/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN,BN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Get in Touch with Us - Sandhani" />
            <meta property="og:description" content="Need a helping hand? We've got you covered! Whether it's a question, a concern, or a friendly chat, don't hesitate to reach out to us. Our team is here and eager to assist you 24/7" />
            <meta property="og:url" content="https://sbmcu.com/" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Get in Touch with Us - Sandhani" />
            <meta name="twitter:description" content="Need a helping hand? We've got you covered! Whether it's a question, a concern, or a friendly chat, don't hesitate to reach out to us. Our team is here and eager to assist you 24/7" />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            <title>Get in Touch - Sandhani</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Contact Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address Card */}
                <div className="md:col-span-2 bg-neutral-800/60 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                            <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold text-lg mb-2">Address</h2>
                            <Link href="https://goo.gl/maps/Q32WXNKLENYxqFhj7" target="_blank" className="text-white/60 hover:text-white transition-colors no-underline leading-relaxed">
                                Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Phone Card */}
                <div className="bg-neutral-800/60 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0 mt-1">
                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold text-lg mb-3">Mobile</h2>
                            <div className="space-y-2">
                                <p className="text-white/60 text-sm">Tanjil Mahmud Shikdar (Senior Technician)<br/><Link href="tel:+8801716858723" className="text-red-400 hover:text-red-300 no-underline font-medium">+88 01716-858723</Link></p>
                                <p className="text-white/60 text-sm">Shadman Kadir (President)<br/><Link href="tel:+8801531191682" className="text-red-400 hover:text-red-300 no-underline font-medium">+88 01531-191682</Link></p>
                                <p className="text-white/60 text-sm">Shahriar Hasan Asif (General Secretary)<br/><Link href="tel:+8801600196600" className="text-red-400 hover:text-red-300 no-underline font-medium">+88 01600-196600</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email Card */}
                <div className="bg-neutral-800/60 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold text-lg mb-3">Email</h2>
                            <Link href="mailto:admin@sbmcu.com" className="text-red-400 hover:text-red-300 no-underline font-medium">admin@sbmcu.com</Link>
                        </div>
                    </div>
                </div>

                {/* Social Cards */}
                <div className="bg-neutral-800/60 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold text-lg mb-2">Facebook</h2>
                            <Link href="https://www.facebook.com/profile.php?id=100081879352166" target="_blank" className="text-white/60 hover:text-white no-underline transition-colors text-sm">Sandhani Bangladesh Medical College Unit</Link>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-800/60 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center shrink-0 mt-1">
                            <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold text-lg mb-2">Twitter</h2>
                            <Link href="https://twitter.com/s_bmcu" target="_blank" className="text-white/60 hover:text-white no-underline transition-colors text-sm">@s_bmcu</Link>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 bg-neutral-800/60 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0 mt-1">
                            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold text-lg mb-2">LinkedIn</h2>
                            <Link href="https://bd.linkedin.com/company/sandhani-bangladesh-medical-college-unit" target="_blank" className="text-white/60 hover:text-white no-underline transition-colors text-sm">Sandhani Bangladesh Medical College Unit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default ContactPage;
