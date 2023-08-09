import Head from 'next/head';
import styles from '@/styles/gallery.module.css'
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


const HomePage = () => {
    return (
    <div className={styles.main}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BZ71381ERP" strategy="afterInteractive" />
      	<Script id="google-analytics" strategy="afterInteractive">
        	{`
          		window.dataLayer = window.dataLayer || [];
          		function gtag(){dataLayer.push(arguments);}
          		gtag('js', new Date());
 
          		gtag('config', 'G-BZ71381ERP');
        	`}
      	</Script>
        <Script id="jsonld" type="application/ld+json" suppressHydrationWarning>{`
        {
            "@context": "https://schema.org",
            "@type": ["ItemList"],
     		"name": "Gallery of Sandhani Bangladesh Medical COllege Unit",
            "url": "https://sbmcu.com/gallery",
  			"description": "Gallery of Sandhani Bangladesh Medical COllege Unit at Various Occations",
            "numberOfItems": "18",
            "itemListElement": [{
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_001},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "In the first phase of 'Hasi Futuk Every Face' organized by Sandhani Bangladesh Medical College & 'Jamia Islamia Muhammadi Ashraful Madarasa & Orphanage', Iftar Mahfil and Quran Recitation and Hamd-Naat competition was organized among Orphanage children.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_002},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "Twenty-one means not bowing down, twenty-one means moving forward. Keeping the spirit of Ekush in heart, Thanthani Bangladesh Medical College Unit organized 'Voluntary Blood Donation and Blood Grouping Program' in 'Amar Ekushe Book Fair-2023'. The event was successful with everyone's spontaneous participation.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_003},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "Bangladesh Medical College unit participated in the Voluntary Blood Donation Program organized at the historic Battala premises of Dhaka University.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_004},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "An Iftar and Doa Mahfil was organized at the Bangladesh Medical College Auditorium on the occasion of the foundation anniversary of Sandhani Bangladesh Medical College Unit.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_005},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "On the occasion of Holy Buddha Purnima, a free medical camp was organized at International Buddhist Vihar, Merul Badda, courtesy of Sandhani Bangladesh Medical College Unit. Free blood sugar testing, blood group testing and blood pressure measurement are conducted in the camp along with voluntary blood donation.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_006},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "On the occasion of Thandi's 46th founding anniversary, a rally was organized with a cake-cutting program at Bangladesh Medical College premises.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_007},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "Amar Ekushey Book Fair- 2023 final episode.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_008},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "A health camp was held in Ramganj of Laxmipur district in collaboration with Sandhani Bangladesh Medical College Unit and organized by Smart Academy. General health check up, blood grouping and diabetes check up were done on the occasion. Around 400 people receive various services in this camp throughout the day.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_009},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "A seminar titled 'Cervical Cancer & It's Prevention' was organized by Sandhani Bangladesh Medical College Unit and in collaboration with Incepta Pharmaceutical Limited.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_010},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "On the occasion of the 47th martyrdom anniversary and National Mourning Day of the Father of the Nation Bangabandhu Sheikh Mujibur Rahman and his family members, Sandhani Bangladesh Medical College Unit organized free blood group testing, blood pressure testing and blood donation program in the college premises.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_011},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "On the occasion of Eid-ul-Fitr, Sandhani Bangladesh Medical College Unit exchanged advance Eid greetings with the respected teaching staff of Bangladesh Medical College.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_012},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "On the occasion of Great Victory Day, Blood Donation Program was organized by Elite Force Bangladesh in collaboration with Sandhani Bangladesh Medical College Unit. Members of Elite Force spontaneously participated in the event.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_013},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "An Iftar Mahfil was organized by Sandhani Bangladesh Medical College Unit. Professor Dr. Mizanur Rahman Sir was present in the ceremony.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_014},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "Sandhani Bangladesh Medical College Unit exchanged Eid-ul-Fitr greetings with Honorable Principal of Bangladesh Medical College, Honorable Director of Bangladesh Medical College Hospital and Honorable Doctors.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_015},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "On the occasion of Great Victory Day, Sandhani Bangladesh Medical College Unit organized free blood group, blood glucose level and blood pressure testing and voluntary blood donation program in the college premises.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_016},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "Sandhani, Bangladesh Medical College Unit welcomes new college students (BM-36) and 'Training on Blood Grouping & Blood Screening' Workshops on topics and post-workshop quiz competitions are organized.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_017},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "Sandhani Bangladesh Medical College Unit exchanged Eid-ul-Fitr greetings with Honorable Principal of Bangladesh Medical College, Honorable Director of Bangladesh Medical College Hospital and Honorable Doctors.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }, {
                "@type": ["ListItem", "ImageObject"],
                "contentUrl": "https://sbmcu.com/gallery/gallery_018},
                "license": "https://sbmcu.com/tos",
                "acquireLicensePage": "https://sbmcu.com/tos#copy",
                "creditText": "On the occasion of the Great Independence Day, Sandhani Bangladesh Medical College Unit provided Iftar to the poor and helpless.",
                "creator": {
                    "@type": "Person",
                    "name": "Mahmud Oyshik"
                },
                "copyrightNotice": "Mahmud Oyshik"
            }]
        }`}
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
            <meta name='keywords' content="Sandhani bangladesh Medical College, সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট, Sandhani, Sandhani Dhaka Medical College, Sandhani Salimullah Medical College Unit, Works of Sandhani, Donation serviece in Dhaka, Charity Organization in Dhaka"/>
            <meta name='description' content="Sandhani bangladesh medical college unit collescts and distributes hundreads of bags of blood each year and distribute them among people in need. It is currently run by students of Bangladesh Medical College helping people in distress."/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Our Works and Achievements - Sandhani" />
            <meta property="og:description" content="Sandhani bangladesh medical college unit collescts and distributes hundreads of bags of blood each year and distribute them among people in need. It is currently run by students of Bangladesh Medical College helping people in distress." />
            <meta property="og:url" content="https://sbmcu.com/membership" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Our Works and Achievements - Sandhani" />
            <meta name="twitter:description" content="Sandhani bangladesh medical college unit collescts and distributes hundreads of bags of blood each year and distribute them among people in need. It is currently run by students of Bangladesh Medical College helping people in distress." />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>Our Works and Achievements - Sandhani</title>
            <link rel="icon" href="/favicon.ico" />

            <link rel="preload" href="/gallery/gallery_001.webp" as="image" /> 
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>Gallery</h1>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image01} alt="সন্ধানী বাংলাদেশ মেডিকেল কলেজ কর্তৃক আয়োজিত 'হাসি ফুটুক প্রতিটি মুখে' এর প্রথম পর্বে 'জামিয়া ইসলামিয়া মুহাম্মাদী আশরাফুল মাদারিস ও এতিমখানা' তে ইফতার মাহফিল এবং এতিমখানার শিশুদের মাঝে কুরআন তিলাওয়াত এবং হামদ-নাত প্রতিযোগিতার আয়োজন করা হয়।" rel="preload"/>
                    <p lang="bn">সন্ধানী বাংলাদেশ মেডিকেল কলেজ কর্তৃক আয়োজিত &quot;হাসি ফুটুক প্রতিটি মুখে&quot; এর প্রথম পর্বে &quot;জামিয়া ইসলামিয়া মুহাম্মাদী আশরাফুল মাদারিস ও এতিমখানা&quot; তে ইফতার মাহফিল এবং এতিমখানার শিশুদের মাঝে কুরআন তিলাওয়াত এবং হামদ-নাত প্রতিযোগিতার আয়োজন করা হয়।</p>
                    <br/>
                    <p lang="en">&quot;Smile on every face&quot; organized by Sandhani Bangladesh Medical College. In its first phase &quot;Jamia Islamia Muhammadi Ashraful Madaris & Orphanage&quot; Iftar party and Quran recitation and Hamd-naat competitions are organized among orphanage children.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image02} alt="একুশ মানে মাথা নত না করা, একুশ মানে এগিয়ে যাওয়া। একুশের চেতনাকে হৃদয়ে ধারণ করে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট 'অমর একুশে বইমেলা -২০২৩' এ  আয়োজন করে 'স্বেচ্ছায় রক্তদান ও রক্তের গ্রুপ নির্ণয় কর্মসূচি'। সকলের স্বতঃস্ফূর্ত অংশগ্রহণে সফল হয় এ আয়োজন।"  rel="preload"/>
                    <p lang="bn">একুশ মানে মাথা নত না করা, একুশ মানে এগিয়ে যাওয়া। একুশের চেতনাকে হৃদয়ে ধারণ করে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট &quot;অমর একুশে বইমেলা -২০২৩&quot; এ  আয়োজন করে &quot;স্বেচ্ছায় রক্তদান ও রক্তের গ্রুপ নির্ণয় কর্মসূচি&quot;। সকলের স্বতঃস্ফূর্ত অংশগ্রহণে সফল হয় এ আয়োজন।</p>
                    <br/>
                    <p lang="en">Twenty-first means not bowing down, twenty-one means moving forward. Keeping the spirit of Ekush in heart, Sandhani Bangladesh Medical College Unit organized &quot;Voluntary Blood Donation and Blood Grouping Program&quot; in &quot;Amar Ekushe Book Fair-2023&quot;. The event was successful with everyone&quot;s spontaneous participation.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image03} alt="ঢাকা বিশ্ববিদ্যালয়ের ঐতিহাসিক বটতলা প্রাঙ্গনে আয়োজিত স্বেচ্ছায় রক্তদান কর্মসূচিতে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট অংশগ্রহণ করে।"  rel="preload"/>
                    <p lang="bn">ঢাকা বিশ্ববিদ্যালয়ের ঐতিহাসিক বটতলা প্রাঙ্গনে আয়োজিত স্বেচ্ছায় রক্তদান কর্মসূচিতে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট অংশগ্রহণ করে। </p>
                    <br/>
                    <p lang="en">Sandhani Bangladesh Medical College unit participated in the Voluntary Blood Donation Program organized at the historic Battala premises of Dhaka University.</p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image04} alt="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের প্রতিষ্ঠাবার্ষিকী উপলক্ষে বাংলাদেশ মেডিকেল কলেজ অডিটোরিয়ামে একটি ইফতার ও দোয়া মাহফিলের আয়োজন করা হয়।"  loading="lazy"/>
                    <p lang="bn">সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের প্রতিষ্ঠাবার্ষিকী উপলক্ষে বাংলাদেশ মেডিকেল কলেজ অডিটোরিয়ামে একটি ইফতার ও দোয়া মাহফিলের আয়োজন করা হয়। </p>
                    <br/>
                    <p lang="en">An Iftar and Doa Mahfil was organized at the Bangladesh Medical College Auditorium on the occasion of the foundation anniversary of Sandhani Bangladesh Medical College Unit.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image05} alt="পবিত্র বুদ্ধ পূর্ণিমা উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের সৌজন্যে আন্তর্জাতিক বৌদ্ধ বিহার,মেরুল বাড্ডা - তে ফ্রি মেডিকেল ক্যাম্পের আয়োজন করা হয়। উক্ত ক্যাম্পে স্বেচ্ছায় রক্তদান সহ বিনামূল্যে ব্লাড সুগার নির্ণয়,ব্লাড গ্রুপ নির্ণয় এবং ব্লাড প্রেসার পরিমাপ করা হয়।"  loading="lazy"/>
                    <p lang="bn">পবিত্র বুদ্ধ পূর্ণিমা উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের সৌজন্যে আন্তর্জাতিক বৌদ্ধ বিহার,মেরুল বাড্ডা - তে ফ্রি মেডিকেল ক্যাম্পের আয়োজন করা হয়। উক্ত ক্যাম্পে স্বেচ্ছায় রক্তদান সহ বিনামূল্যে ব্লাড সুগার নির্ণয়,ব্লাড গ্রুপ নির্ণয় এবং ব্লাড প্রেসার পরিমাপ করা হয়।</p>
                    <br/>
                    <p lang="en">On the occasion of Holy Buddha Purnima, a free medical camp was organized at International Buddhist Vihar, Merul Badda, courtesy of Sandhani Bangladesh Medical College Unit. Free blood sugar testing, blood group testing and blood pressure measurement are conducted in the camp along with voluntary blood donation.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image06} alt="আজ সন্ধানীর ৪৬তম প্রতিষ্ঠাবার্ষিকী উপলক্ষে বাংলাদেশ মেডিকেল কলেজ প্রাঙ্গনে কেক কাটা কর্মসূচি সহ র‍্যালির আয়োজন করা হয়।"  loading="lazy"/>
                    <p lang="bn">সন্ধানীর ৪৬তম প্রতিষ্ঠাবার্ষিকী উপলক্ষে বাংলাদেশ মেডিকেল কলেজ প্রাঙ্গনে কেক কাটা কর্মসূচি সহ র‍্যালির আয়োজন করা হয়।</p>
                    <br/>
                    <p lang="en">On the occasion of Thandi&quot;s 46th founding anniversary, a rally was organized with a cake-cutting program at Bangladesh Medical College premises.</p>
                </div>
            </div>
            <div className={styles.category} >
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image07} alt="অমর একুশে বইমেলা- ২০২৩ সমাপ্তি পর্ব।" loading="lazy"/>
                    <p lang="bn">অমর একুশে বইমেলা- ২০২৩ সমাপ্তি পর্ব।</p>
                    <br/>
                    <p lang="en">Amar Ekushey Book Fair- 2023 final episode.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image08} alt="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর সহযোগিতায় ও স্মার্ট একাডেমির আয়োজনে লক্ষ্মীপুর জেলার রামগঞ্জে একটি  হেলথ ক্যাম্প অনুষ্ঠিত হয়। উক্ত অনুষ্ঠানে জেনারেল হেলথ চেক আপ, ব্লাড গ্রুপিং ও ডায়াবেটিস চেক আপ করা হয়।  সারাদিন ব্যাপী এই ক্যাম্পে প্রায় 400 মানুষ বিভিন্ন ধরণের সেবা গ্রহণ করেন।"  loading="lazy"/>
                    <p lang="bn">সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর সহযোগিতায় ও স্মার্ট একাডেমির আয়োজনে লক্ষ্মীপুর জেলার রামগঞ্জে একটি  হেলথ ক্যাম্প অনুষ্ঠিত হয়। উক্ত অনুষ্ঠানে জেনারেল হেলথ চেক আপ, ব্লাড গ্রুপিং ও ডায়াবেটিস চেক আপ করা হয়।  সারাদিন ব্যাপী এই ক্যাম্পে প্রায় 400 মানুষ বিভিন্ন ধরণের সেবা গ্রহণ করেন।</p>
                    <br/>
                    <p lang="en">A health camp was held in Ramganj of Laxmipur district in collaboration with Sandhani Bangladesh Medical College Unit and organized by Smart Academy. General health check up, blood grouping and diabetes check up were done on the occasion. Around 400 people receive various services in this camp throughout the day.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image09} alt="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের আয়োজনে ও Incepta Pharmaceutical Limited এর সহযোগিতায় 'Cervical Cancer & It's Prevention' শীর্ষক সেমিনারের আয়োজন করা হয়।"  loading="lazy"/>
                    <p lang="bn">সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের আয়োজনে ও Incepta Pharmaceutical Limited এর সহযোগিতায় &quot;Cervical Cancer & It&quot;s Prevention&quot; শীর্ষক সেমিনারের আয়োজন করা হয়।</p>
                    <br/>
                    <p lang="en">&quot;Cervical Cancer & It&quot;s Prevention&quot; organized by Sandhani Bangladesh Medical College Unit and in collaboration with Incepta Pharmaceutical Limited. The seminar was organized.</p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image10} alt="জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান ও তার পরিবারের সদস্যদের এর ৪৭তম শাহাদাতবার্ষিকী ও জাতীয় শোক দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর পক্ষ থেকে কলেজ প্রাঙ্গণে  বিনামূল্যে রক্তের গ্রুপ নির্ণয়, রক্তচাপ নির্ণয় এবং রক্তদান কর্মসূচির আয়োজন করা হয়।"  loading="lazy"/>
                    <p lang="bn">জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান ও তার পরিবারের সদস্যদের এর ৪৭তম শাহাদাতবার্ষিকী ও জাতীয় শোক দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর পক্ষ থেকে কলেজ প্রাঙ্গণে  বিনামূল্যে রক্তের গ্রুপ নির্ণয়, রক্তচাপ নির্ণয় এবং রক্তদান কর্মসূচির আয়োজন করা হয়।</p>
                    <br/>
                    <p lang="en">On the occasion of the 47th martyrdom anniversary and National Mourning Day of the Father of the Nation Bangabandhu Sheikh Mujibur Rahman and his family members, Sandhani Bangladesh Medical College Unit organized free blood group testing, blood pressure testing and blood donation program in the college premises.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image11} alt="ঈদ উল ফিতর উপলক্ষে সন্ধানী  বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে বাংলাদেশ মেডিকেল কলেজের শ্রদ্ধেয় শিক্ষক মন্ডলী এর সাথে অগ্রীম ঈদ শুভেচ্ছা বিনিময়..."  loading="lazy"/>
                    <p lang="bn">ঈদ উল ফিতর উপলক্ষে সন্ধানী  বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে বাংলাদেশ মেডিকেল কলেজের শ্রদ্ধেয় শিক্ষক মন্ডলী এর সাথে অগ্রীম ঈদ শুভেচ্ছা বিনিময়</p>
                    <br/>
                    <p lang="en">On the occasion of Eid-ul-Fitr, Sandhani Bangladesh Medical College Unit exchanged advance Eid greetings with the respected teaching staff of Bangladesh Medical College.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image12} alt="মহান বিজয় দিবস উপলক্ষে Elite Force Bangladesh এর আয়োজনে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর সহযোগিতায় রক্তদান কর্মসূচি পালিত হয়। উক্ত অনুষ্ঠানে Elite Force এর সদস্যরা স্বতঃস্ফূর্তভাবে অংশগ্রহণ করেন।"  loading="lazy"/>
                    <p lang="bn">মহান বিজয় দিবস উপলক্ষে Elite Force Bangladesh এর আয়োজনে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর সহযোগিতায় রক্তদান কর্মসূচি পালিত হয়। উক্ত অনুষ্ঠানে Elite Force এর সদস্যরা স্বতঃস্ফূর্তভাবে অংশগ্রহণ করেন।</p>
                    <br/>
                    <p lang="en">On the occasion of Great Victory Day, Blood Donation Program was organized by Elite Force Bangladesh in collaboration with Sandhani Bangladesh Medical College Unit. Members of Elite Force spontaneously participated in the event.</p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image13} alt="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক এক ইফতার মাহফিল আয়োজন করা হয়। উক্ত মাহফিলে উপস্থিত ছিলেন অধ্যাপক ডা: মিজানুর রহমান স্যার।"  loading="lazy"/>
                    <p lang="bn">সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক এক ইফতার মাহফিল আয়োজন করা হয়। উক্ত মাহফিলে উপস্থিত ছিলেন অধ্যাপক ডা: মিজানুর রহমান স্যার।</p>
                    <br/>
                    <p lang="en">An Iftar Mahfil was organized by Sandhani Bangladesh Medical College Unit. Professor Dr. Mizanur Rahman Sir was present in the ceremony.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image14} alt="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক বাংলাদেশ মেডিকেল কলেজের সম্মানিত অধ্যক্ষ,  বাংলাদেশ মেডিকেল কলেজ হাসপাতাল -এর সম্মানিত পরিচালক  এবং সম্মানিত চিকিৎসকবৃন্দের সাথে পবিত্র ঈদ-উল-ফিতর এর শুভেচ্ছা বিনিময় করা হয়।"  loading="lazy"/>
                    <p lang="bn">সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক বাংলাদেশ মেডিকেল কলেজের সম্মানিত অধ্যক্ষ,  বাংলাদেশ মেডিকেল কলেজ হাসপাতাল -এর সম্মানিত পরিচালক  এবং সম্মানিত চিকিৎসকবৃন্দের সাথে পবিত্র ঈদ-উল-ফিতর এর শুভেচ্ছা বিনিময় করা হয়।</p>
                    <br/>
                    <p lang="en">Sandhani Bangladesh Medical College Unit exchanged Eid-ul-Fitr greetings with Honorable Principal of Bangladesh Medical College, Honorable Director of Bangladesh Medical College Hospital and Honorable Doctors.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image15} alt="মহান বিজয় দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর পক্ষ থেকে কলেজ প্রাঙ্গণে বিনামূল্যে রক্তের গ্রুপ, রক্তের গ্লুকোজের পরিমাণ ও রক্তচাপ নির্ণয় এবং স্বেচ্ছায় রক্তদান কর্মসূচির আয়োজন করা হয়।"  loading="lazy"/>
                    <p lang="bn">মহান বিজয় দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর পক্ষ থেকে কলেজ প্রাঙ্গণে বিনামূল্যে রক্তের গ্রুপ, রক্তের গ্লুকোজের পরিমাণ ও রক্তচাপ নির্ণয় এবং স্বেচ্ছায় রক্তদান কর্মসূচির আয়োজন করা হয়।</p>
                    <br/>
                    <p lang="en">On the occasion of Great Victory Day, Sandhani Bangladesh Medical College Unit organized free blood group, blood glucose level and blood pressure testing and voluntary blood donation program in the college premises.</p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image16} alt="সন্ধানী, বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে কলেজের নবাগত শিক্ষার্থীদের (BM-36) বরণ করে নেয়া হয় এবং 'Training on Blood Grouping & Blood Screening' শীর্ষক ওয়ার্কশপ ও ওয়ার্কশপ পরবর্তী কুইজ প্রতিযোগিতার আয়োজন করা হয়।"  loading="lazy"/>
                    <p lang="bn">সন্ধানী, বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে কলেজের নবাগত শিক্ষার্থীদের (BM-36) বরণ করে নেয়া হয় এবং &quot;Training on Blood Grouping & Blood Screening&quot; শীর্ষক ওয়ার্কশপ ও ওয়ার্কশপ পরবর্তী কুইজ প্রতিযোগিতার আয়োজন করা হয়।</p>
                    <br/>
                    <p lang="en">Sandhani, Bangladesh Medical College Unit welcomes new college students (BM-36) and &quot;Training on Blood Grouping & Blood Screening&quot; Workshops on topics and post-workshop quiz competitions are organized.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image17} alt="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক বাংলাদেশ মেডিকেল কলেজের সম্মানিত অধ্যক্ষ,  বাংলাদেশ মেডিকেল কলেজ হাসপাতাল -এর সম্মানিত পরিচালক  এবং সম্মানিত চিকিৎসকবৃন্দের সাথে পবিত্র ঈদ-উল-ফিতর এর শুভেচ্ছা বিনিময় করা হয়।"  loading="lazy"/>
                    <p lang="bn">সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক বাংলাদেশ মেডিকেল কলেজের সম্মানিত অধ্যক্ষ,  বাংলাদেশ মেডিকেল কলেজ হাসপাতাল -এর সম্মানিত পরিচালক  এবং সম্মানিত চিকিৎসকবৃন্দের সাথে পবিত্র ঈদ-উল-ফিতর এর শুভেচ্ছা বিনিময় করা হয়।</p>
                    <br/>
                    <p lang="en">Sandhani Bangladesh Medical College Unit exchanged Eid-ul-Fitr greetings with Honorable Principal of Bangladesh Medical College, Honorable Director of Bangladesh Medical College Hospital and Honorable Doctors.</p>
                </div>
                <div className={styles.panel}>
                     <Image placeholder="blur" width={1080} height={720} src={Image18} alt="মহান স্বাধীনতা দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে দুস্থ ও অসহায়দের মাঝে ইফতার প্রদান করা হয়।"  loading="lazy"/>
                    <p lang="bn">মহান স্বাধীনতা দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে দুস্থ ও অসহায়দের মাঝে ইফতার প্রদান করা হয়।</p>
                    <br/>
                    <p lang="en">On the occasion of the Great Independence Day, Sandhani Bangladesh Medical College Unit provided Iftar to the poor and helpless.</p>
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
