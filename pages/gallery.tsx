import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';
import Image from 'next/image';
import Image01 from "../public/gallery/gallery_001.webp";
import Image02 from "../public/gallery/gallery_002.webp";
import Image03 from "../public/gallery/gallery_003.webp";
import Image04 from "../public/gallery/gallery_004.webp";
import Image05 from "../public/gallery/gallery_005.webp";
import Image06 from "../public/gallery/gallery_006.webp";
import Image07 from "../public/gallery/gallery_007.webp";
import Image08 from "../public/gallery/gallery_008.webp";
import Image09 from "../public/gallery/gallery_009.webp";
import Image10 from "../public/gallery/gallery_010.webp";
import Image11 from "../public/gallery/gallery_011.webp";
import Image12 from "../public/gallery/gallery_012.webp";
import Image13 from "../public/gallery/gallery_013.webp";
import Image14 from "../public/gallery/gallery_014.webp";
import Image15 from "../public/gallery/gallery_015.webp";
import Image16 from "../public/gallery/gallery_016.webp";
import Image17 from "../public/gallery/gallery_017.webp";
import Image18 from "../public/gallery/gallery_018.webp";

const galleryItems = [
    { img: Image01, caption: "Iftar Mahfil and Quran Recitation organized with orphanage children." },
    { img: Image02, caption: "Voluntary Blood Donation Program at Amar Ekushe Book Fair 2023." },
    { img: Image03, caption: "Blood Donation Program at historic Battala premises, Dhaka University." },
    { img: Image04, caption: "Foundation anniversary celebration at Bangladesh Medical College Auditorium." },
    { img: Image05, caption: "Free medical camp at International Buddhist Vihar on Buddha Purnima." },
    { img: Image06, caption: "46th founding anniversary rally at Bangladesh Medical College." },
    { img: Image07, caption: "Amar Ekushey Book Fair 2023 - Final episode." },
    { img: Image08, caption: "Health camp in Ramganj, Laxmipur with Smart Academy." },
    { img: Image09, caption: "Seminar on Cervical Cancer & Prevention with Incepta Pharmaceutical." },
    { img: Image10, caption: "Blood donation and awareness program." },
    { img: Image11, caption: "Community outreach event." },
    { img: Image12, caption: "Volunteer gathering and team building." },
    { img: Image13, caption: "Blood grouping camp." },
    { img: Image14, caption: "Special event at Bangladesh Medical College." },
    { img: Image15, caption: "Blood donation drive." },
    { img: Image16, caption: "Community health awareness program." },
    { img: Image17, caption: "Team collaboration event." },
    { img: Image18, caption: "Sandhani activities and outreach." },
];

const GalleryPage = () => {
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
            <meta name='keywords' content="Sandhani Bangladesh Medical College, Gallery, Blood Donation events, Non Profit Organization in Dhaka"/>
            <meta name='description' content="Gallery of Sandhani Bangladesh Medical College Unit - Moments captured at various events and occasions."/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN,BN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Gallery - Sandhani Bangladesh Medical College Unit" />
            <meta property="og:description" content="Gallery of Sandhani Bangladesh Medical College Unit at various occasions." />
            <meta property="og:url" content="https://sbmcu.com/gallery" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Gallery - Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:description" content="Gallery of Sandhani Bangladesh Medical College Unit at various occasions." />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            <title>Gallery - Sandhani Bangladesh Medical College Unit</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Gallery</h1>
            <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">Moments captured at various events and occasions organized by Sandhani Bangladesh Medical College Unit.</p>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {galleryItems.map((item, idx) => (
                    <div key={idx} className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-neutral-800 border border-white/5 hover:border-white/10 transition-all">
                        <Image 
                            src={item.img} 
                            alt={item.caption} 
                            className="w-full h-auto object-cover"
                            placeholder="blur"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white text-sm p-4 leading-relaxed">{item.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default GalleryPage;
