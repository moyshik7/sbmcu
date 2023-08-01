import Head from 'next/head';
import styles from '@/styles/about.module.css'
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';


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
            <meta name='keywords' content="Sandhani Bangladesh Medical College, History of Sandhani Bangladesh Medical College Unit, Blood Donation Near Me, Non Profit Organization in Dhaka, Where to Donate in Dhaka, Places to Visit in Dhanmondi"/>
            <meta name='description' content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need."/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN,BN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="History of Sandhani Bangladesh Medical College Unit" />
            <meta property="og:description" content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need." />
            <meta property="og:url" content="https://sbmcu.com/" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="History of Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:description" content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need." />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>History of Sandhani Bangladesh Medical College Unit</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>Sandhani Bangladesh Medical College Unit</h1>
                    <br/>
                    <br/>
                    <h2>History:</h2>
                    <br/>
                    
                    <p>
                        বেসরকারী মেডিকেল কলেজগুলোর প্রতিনিধি বাংলাদেশ মেডিকেল কলেজের ছাত্র-ছাত্রীদের সন্ধানীর সাথে প্রথম পরিচয় ঘটে ১৯৯৫ সালে সন্ধানী জাতীয় চক্ষুদান সমিতির একটি জোনের আত্মপ্রকাশের মাধ্যমে। প্রফেসর হাসান শহীদ এবং প্রফেসর সি.এইচ. কবীরের দিকনির্দেশনার মাধ্যমে মরনোত্তর চক্ষুদানে জনগনকে উদ্ধুদ্ধকরণের পাশাপাশি হাসপাতালের রোগীদের রক্তের চাহিদা পূরণের জন্য ছাত্র-ছাত্রীদের মাধ্যমে রক্ত সংগ্রহে সচেষ্ট ছিলেন ইনু (বিএম-৫), সাগর ও অন্ত (বিএম-৭)।
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/history/history_1.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        কিন্তু রাজধানীর ব্যস্ত নাগরিক সভ্যতার মাঝে অবস্থিত বাংলাদেশ মেডিকেল কলেজে শুধু ছাত্র-ছাত্রীদের দ্বারা রক্তের অভাব মেটানো ছিল কষ্টসাধ্য। সে সময় সন্ধানীর একটি ইউনিট স্থাপনের প্রয়োজনীয়তা উপলব্ধি করা হয়। সেই সাথে প্রফেসর সি. এইচ. কবীর ও প্রফেসর হাসান শহীদের সর্বাত্মক সহযোগীতায় বাংলাদশে মেডিকেল কলেজের ছাত্র-ছাত্রীদের নিয়ে প্রথম স্বেচ্ছায় রক্তদান কর্মসূচী আয়োজন করেন বি এম ১০ এর আলমগীর, ইশতিয়াক এবং বি এম ১১ এর মাহতাব, আমিন, গিয়াস কামরুজ্জামান, শাকিল প্রমুখ।
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/history/history_2.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        ১৯৯৯ এর ১ লা বৈশাখ ঢাকা বিশ্ববিদ্যালয়ের টি এস সিতে সফলভাবে এই কর্মসূচী পালনের ডপর সন্ধানীর একটি ইউনিট স্থাপনের পরিকল্পনা আরো জোরদার হয়। এর ভিত্তিতে ১৯৯৯ সালে বগুড়া মেডিকেল কলেজে অনুষ্ঠত সন্ধানী কেন্দ্রীয় বার্ষিক সম্মেলনে একটি ইউনিটের জন্য আবেদন করেন। কিন্তু তখন বেসরকারী মেডিকেল কলেজে ইউনিট স্থাপনের কোন সিদ্ধান্ত না থাকার কারনে অনুমতি পাওয়া সম্ভব হয়নি। তবে সে কারনে থেমে থাকেনি ছাত্র-ছাত্রীদের রক্তদান কার্যক্রম। প্রতিটি বিশেষ জাতীয় দিবসে রক্তদান কর্মসূচী পালন ছাড়াও ছাত্র-ছাত্রীদের নিয়ে রক্তের অভাব মেটানো এবং সেই সাথে সন্ধানীর একটি ইউনিট স্থাপনের জন্য চেষ্টা চালিয়ে যায় মাসুদ, আহমেদ, রাজন (বিএম-১২), শোভন (বিএম-১৩), হৃদয়, নাইম, পুলক, বাপ্পী (বিএম -১৫) প্রমুখ।
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/history/history_3.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        অবশেষে আসে সেই প্রতিক্ষিত দিনটি। ২০০৩ সালে ফরিদপুর মেডিকেল কলেজ আয়োজিত সন্ধানী ২২তম কেন্দ্রীয় বার্ষিক সম্মেলনে বেসরকারী মেডিকেল কলেজে সন্ধানী ইউনিট স্থাপনের সিদ্ধান্ত হয়। আনন্দঘন সেই স্মরনীয় মুহুর্তে সম্মেলনে উপস্থিত ছিলেন মাহতাব, মাসুদ, রাজন, শোভন, হৃদয়, নাইম, বাপ্পী। সুদীর্ঘ প্রতিক্ষার পর শিক্ষক-শিক্ষিকাবৃন্দ এবং ছাত্র-ছাত্রীদের সহযোগীতায় প্রথম বেসরকারী মেডিকেল কলেজ হিসেবে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট আত্মপ্রকাশ করে ১২ এপ্রিল,২০০৪ইং তারিখে।
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/history/history_4.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        প্রতিষ্ঠার পর থেকে সকলের সহযোগীতা ও অংশগ্রহনে সন্ধানী বামেকই মানব সেবায় গুরুত্বপূর্ণ অবদান রাখছে এবং উজ্জ্বল করে তুলেছে সন্ধানীর নাম। 
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/history/history_5.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/history/history_6.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/history/history_7.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Current Status:</h2>
                    <br/>
                    <br/>
                    <p>
                        Currently Sandhani bangladesh medical college unit collescts and distributes hundreads of bags of blood each year and distribute them among people in need. It is currently run by students of Bangladesh Medical College helping people in distress.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/gallery/gallery_001.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/gallery/gallery_002.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/gallery/gallery_003.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/gallery/gallery_004.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/gallery/gallery_005.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/gallery/gallery_006.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/gallery/gallery_007.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/gallery/gallery_008.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/gallery/gallery_009.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/gallery/gallery_010.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/gallery/gallery_011.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.left} + ${styles.img}`}>
                        <img src="/gallery/gallery_012.webp" />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className={`${styles.right} + ${styles.img}`}>
                        <img src="/gallery/gallery_013.webp" />
                    </div>
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
