import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';
import Image from 'next/image';

const panelMembers = [
    // Top leadership
    { img: "/pfp/pfp_central.webp", name: "লাজিম ইমাম চৌধুরী", title: "Central Committee Rep.", id: "cr" },
    { img: "/pfp/pfp_president.webp", name: "শাদমান কাদির", title: "President", id: "pr" },
    { img: "/pfp/pfp_secretary.webp", name: "শাহরিয়ার হাসান আসিফ", title: "General Secretary", id: "sr" },
    // Second tier
    { img: "/pfp/pfp_vp.webp", name: "ছাদেকুল ইসলাম স্বজন", title: "Vice President" },
    { img: "/pfp/pfp-005.webp", name: "নাফিসা আমিন নিঝুম", title: "Joint General Secretary" },
    { img: "/pfp/pfp-010.webp", name: "সাজিদুর রহমান পাটোয়ারী", title: "Organizing Secretary" },
    // Finance
    { img: "/pfp/pfp-009.webp", name: "সালমান ইবনে সেলিম", title: "Finance Secretary" },
    { img: "/pfp/pfp-011.webp", name: "মোস্তাফিজুর রহমান ফাহিম", title: "Joint Finance Secretary - 1" },
    { img: "/pfp/pfp-004.webp", name: "রিজওয়ান আহম্মদ", title: "Joint Finance Secretary - 2" },
    // Student welfare
    { img: "/pfp/pfp-008.webp", name: "সুদীপ্ত বিশ্বাস", title: "Student Welfare Secretary" },
    { img: "/pfp/pfp-007.webp", name: "লাবীবা বিনতে খালিদ", title: "Joint Student Welfare Secretary - 1" },
    { img: "/pfp/pfp-012.webp", name: "সায়েদিত সালেহিন আদিত্য", title: "Joint Student Welfare Secretary - 2" },
    // Patient welfare
    { img: "/pfp/pfp-017.webp", name: "তৈয়বা ইসলাম অনন্যা", title: "Patient Welfare Secretary" },
    { img: "/pfp/pfp-013.webp", name: "খন্দকার আবদুল্লাহীল মীম", title: "Joint Patient Welfare Secretary - 1" },
    { img: "/pfp/pfp-016.webp", name: "স্নেহাশীষ রয়", title: "Joint Patient Welfare Secretary - 2" },
    // Press
    { img: "/pfp/pfp-019.webp", name: "আনজুম নাফি", title: "Press and Publications Secretary" },
    { img: "/pfp/pfp-006.webp", name: "বিরল দে অর্ঘ্য", title: "Joint Press and Publications Secretary - 1" },
    { img: "/pfp/pfp-015.webp", name: "আনিকা আদিবা", title: "Joint Press and Publications Secretary - 2" },
    // Office
    { img: "/pfp/pfp-014.webp", name: "সিনথিয়া চৌধুরী", title: "Office Secretary" },
    { img: "/pfp/pfp-018.webp", name: "আবদুল্লাহ আল শাহরিয়া", title: "Joint Office Secretary" },
    // Others
    { img: "/pfp/pfp-024.webp", name: "ফারিহা রউফ ঋতু", title: "Donor Club and Social Welfare Secretary" },
    { img: "/pfp/pfp-020.webp", name: "নুসরাত তাবাসসুম সর্ণা", title: "Education Research and Statistics Secretary" },
    { img: "/pfp/pfp-021.webp", name: "রাকিবুল ইসলাম মুরাদ", title: "Joint Education Research and Statistics Secretary" },
    // Executive
    { img: "/pfp/pfp-026.webp", name: "মাহফুজা আনান", title: "Executive Committee Member - 1" },
    { img: "/pfp/pfp-023.webp", name: "ফয়সাল খান", title: "Executive Committee Member - 2" },
    { img: "/pfp/pfp-027.webp", name: "জিনিয়া আলম", title: "Executive Committee Member - 3" },
    // Drug bank
    { img: "/pfp/pfp-025.webp", name: "সিদরাতুল মুনতাহা", title: "Drug Bank Secretary" },
    { img: "/pfp/pfp-022.webp", name: "আয়েশা বিনতে কামাল নোভা", title: "Joint Drug Bank Secretary" },
];


const PanelPage = () => {
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
            <meta name='keywords' content="Sandhani, Sandhani Bangladesh Medical College Unit, Bangladesh Medical College, Panel Members"/>
            <meta name='description' content="Executive Committee Panel of Sandhani Bangladesh Medical College Unit Session 2022-2023"/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Executive Committee Panel of Sandhani" />
            <meta property="og:description" content="Executive Committee Panel of Sandhani Bangladesh Medical College Unit Session 2022-2023" />
            <meta property="og:url" content="https://sbmcu.com/panel" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Executive Committee Panel of Sandhani" />
            <meta name="twitter:description" content="Executive Committee Panel of Sandhani Bangladesh Medical College Unit Session 2022-2023" />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            <title>Executive Committee Panel of Sandhani</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preload" href="/pfp/pfp_central.webp" as="image" /> 
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10" id="main">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Executive Committee</h1>
            <p className="text-white/50 text-center mb-12">Session 2022-2023</p>

            {/* Top 3 leadership - larger cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {panelMembers.slice(0, 3).map((member, idx) => (
                    <div key={idx} id={member.id} className="group bg-neutral-800/60 backdrop-blur-sm rounded-2xl border border-white/5 p-8 text-center hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-red-400/30 transition-all">
                            <Image width={512} height={512} src={member.img} alt={member.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                        <p className="text-red-400/80 text-sm font-medium">{member.title}</p>
                    </div>
                ))}
            </div>

            {/* Remaining members */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {panelMembers.slice(3).map((member, idx) => (
                    <div key={idx} className="group bg-neutral-800/40 rounded-2xl border border-white/5 p-5 text-center hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-white/5 group-hover:ring-white/15 transition-all">
                            <Image width={512} height={512} src={member.img} alt={member.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-white font-medium text-sm mb-0.5">{member.name}</h3>
                        <p className="text-white/40 text-xs">{member.title}</p>
                    </div>
                ))}
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default PanelPage;
