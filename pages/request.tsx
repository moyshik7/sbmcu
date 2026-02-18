import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';

const bloodGroups = [
    { type: "A+", typeBn: "এ পজেটিভ", available: 0, donors: 62, color: "from-red-500 to-red-700" },
    { type: "A-", typeBn: "এ নেগেটিভ", available: 0, donors: 5, color: "from-indigo-500 to-indigo-700" },
    { type: "B+", typeBn: "বি পজেটিভ", available: 0, donors: 38, color: "from-emerald-500 to-emerald-700" },
    { type: "B-", typeBn: "বি নেগেটিভ", available: 0, donors: 8, color: "from-amber-600 to-amber-800" },
    { type: "O+", typeBn: "ও পজেটিভ", available: 0, donors: 77, color: "from-orange-500 to-orange-700" },
    { type: "O-", typeBn: "ও নেগেটিভ", available: 0, donors: 4, color: "from-teal-500 to-teal-700" },
    { type: "AB+", typeBn: "এবি পজেটিভ", available: 0, donors: 35, color: "from-yellow-500 to-yellow-700" },
    { type: "AB-", typeBn: "এবি নেগেটিভ", available: 0, donors: 2, color: "from-blue-500 to-blue-700" },
];

const RequestPage = () => {
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
            <meta name='keywords' content="Blood bank, Blood Bank in Bangladesh, Blood bank Near Me, Shandhani Bangladesh Medical College"/>
            <meta name='description' content="Need blood? We're here, day and night, to support you! Our doors are open 24/7, and we're just a call away."/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Blood Stock and Donors - Sandhani" />
            <meta property="og:description" content="Need blood? We're here, day and night, to support you! Our doors are open 24/7." />
            <meta property="og:url" content="https://sbmcu.com/request" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Blood Stock and Donors - Sandhani" />
            <meta name="twitter:description" content="Need blood? We're here, day and night, to support you! Our doors are open 24/7." />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            <title>Blood Stock and Donors - Sandhani</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Blood Stock & Donors</h1>
                <p className="text-white/50 max-w-xl mx-auto">Need blood? We&apos;re available 24/7. Call us for any blood type.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {bloodGroups.map((group) => (
                    <div key={group.type} className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${group.color} p-6 text-center group hover:-translate-y-1 transition-transform duration-300`}>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-1">{group.type}</h2>
                        <p className="text-white/60 text-xs mb-4" lang="bn">{group.typeBn}</p>
                        <div className="space-y-1 mb-5">
                            <p className="text-white/80 text-sm">Available: <span className="font-semibold text-white">{group.available}</span></p>
                            <p className="text-white/80 text-sm">Donors: <span className="font-semibold text-white">{group.donors}</span></p>
                        </div>
                        <a 
                            href="tel:+8801716858723" 
                            className="inline-block bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 no-underline border border-white/20"
                        >
                            Call Now
                        </a>
                    </div>
                ))}
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default RequestPage;
