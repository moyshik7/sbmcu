import Head from 'next/head';
import styles from '@/styles/gallery.module.css'
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
            <meta name='keywords' content="Sandhani bangladesh Medical College, Sandhani, Sandhani Dhaka Medical College, Sandhani Salimullah Medical College Unit, Works of Sandhani, Donation serviece in Dhaka, Charity Organization in Dhaka"/>
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
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
                    <img src="/gallery/gallery_001.webp" />
                    <p>সন্ধানী বাংলাদেশ মেডিকেল কলেজ কর্তৃক আয়োজিত &quot;হাসি ফুটুক প্রতিটি মুখে&quot; এর প্রথম পর্বে &quot;জামিয়া ইসলামিয়া মুহাম্মাদী আশরাফুল মাদারিস ও এতিমখানা&quot; তে ইফতার মাহফিল এবং এতিমখানার শিশুদের মাঝে কুরআন তিলাওয়াত এবং হামদ-নাত প্রতিযোগিতার আয়োজন করা হয়।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_002.webp" />
                    <p>একুশ মানে মাথা নত না করা, একুশ মানে এগিয়ে যাওয়া। একুশের চেতনাকে হৃদয়ে ধারণ করে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট &quot;অমর একুশে বইমেলা -২০২৩&quot; এ  আয়োজন করে &quot;স্বেচ্ছায় রক্তদান ও রক্তের গ্রুপ নির্ণয় কর্মসূচি&quot;। সকলের স্বতঃস্ফূর্ত অংশগ্রহণে সফল হয় এ আয়োজন।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_003.webp" />
                    <p>ঢাকা বিশ্ববিদ্যালয়ের ঐতিহাসিক বটতলা প্রাঙ্গনে আয়োজিত স্বেচ্ছায় রক্তদান কর্মসূচিতে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট অংশগ্রহণ করে। </p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_004.webp" />
                    <p>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের প্রতিষ্ঠাবার্ষিকী উপলক্ষে বাংলাদেশ মেডিকেল কলেজ অডিটোরিয়ামে একটি ইফতার ও দোয়া মাহফিলের আয়োজন করা হয়। </p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_005.webp" />
                    <p>পবিত্র বুদ্ধ পূর্ণিমা উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের সৌজন্যে আন্তর্জাতিক বৌদ্ধ বিহার,মেরুল বাড্ডা - তে ফ্রি মেডিকেল ক্যাম্পের আয়োজন করা হয়। উক্ত ক্যাম্পে স্বেচ্ছায় রক্তদান সহ বিনামূল্যে ব্লাড সুগার নির্ণয়,ব্লাড গ্রুপ নির্ণয় এবং ব্লাড প্রেসার পরিমাপ করা হয়।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_006.webp" />
                    <p>আজ সন্ধানীর ৪৬তম প্রতিষ্ঠাবার্ষিকী উপলক্ষে বাংলাদেশ মেডিকেল কলেজ প্রাঙ্গনে কেক কাটা কর্মসূচি সহ র‍্যালির আয়োজন করা হয়।</p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_007.webp" />
                    <p>অমর একুশে বইমেলা- ২০২৩ সমাপ্তি পর্ব।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_008.webp" />
                    <p>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর সহযোগিতায় ও স্মার্ট একাডেমির আয়োজনে লক্ষ্মীপুর জেলার রামগঞ্জে একটি  হেলথ ক্যাম্প অনুষ্ঠিত হয়। উক্ত অনুষ্ঠানে জেনারেল হেলথ চেক আপ, ব্লাড গ্রুপিং ও ডায়াবেটিস চেক আপ করা হয়।  সারাদিন ব্যাপী এই ক্যাম্পে প্রায় ৪০০ মানুষ বিভিন্ন ধরণের সেবা গ্রহণ করেন।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_009.webp" />
                    <p>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের আয়োজনে ও Incepta Pharmaceutical Limited এর সহযোগিতায় &quot;Cervical Cancer & It&quot;s Prevention&quot; শীর্ষক সেমিনারের আয়োজন করা হয়।</p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_010.webp" />
                    <p>জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান ও তার পরিবারের সদস্যদের এর ৪৭তম শাহাদাতবার্ষিকী ও জাতীয় শোক দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর পক্ষ থেকে কলেজ প্রাঙ্গণে  বিনামূল্যে রক্তের গ্রুপ নির্ণয়, রক্তচাপ নির্ণয় এবং রক্তদান কর্মসূচির আয়োজন করা হয়।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_011.webp" />
                    <p>ঈদ উল ফিতর উপলক্ষে সন্ধানী  বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে বাংলাদেশ মেডিকেল কলেজের শ্রদ্ধেয় শিক্ষক মন্ডলী এর সাথে অগ্রীম ঈদ শুভেচ্ছা বিনিময়...</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_012.webp" />
                    <p>মহান বিজয় দিবস উপলক্ষে Elite Force Bangladesh এর আয়োজনে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর সহযোগিতায় রক্তদান কর্মসূচি পালিত হয়। উক্ত অনুষ্ঠানে Elite Force এর সদস্যরা স্বতঃস্ফূর্তভাবে অংশগ্রহণ করেন।</p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_013.webp" />
                    <p>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক এক ইফতার মাহফিল আয়োজন করা হয়। উক্ত মাহফিলে উপস্থিত ছিলেন অধ্যাপক ডা: মিজানুর রহমান স্যার।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_014.webp" />
                    <p>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক বাংলাদেশ মেডিকেল কলেজের সম্মানিত অধ্যক্ষ,  বাংলাদেশ মেডিকেল কলেজ হাসপাতাল -এর সম্মানিত পরিচালক  এবং সম্মানিত চিকিৎসকবৃন্দের সাথে পবিত্র ঈদ-উল-ফিতর এর শুভেচ্ছা বিনিময় করা হয়।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_015.webp" />
                    <p>মহান বিজয় দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এর পক্ষ থেকে কলেজ প্রাঙ্গণে বিনামূল্যে রক্তের গ্রুপ, রক্তের গ্লুকোজের পরিমাণ ও রক্তচাপ নির্ণয় এবং স্বেচ্ছায় রক্তদান কর্মসূচির আয়োজন করা হয়। </p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_016.webp" />
                    <p>সন্ধানী, বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে কলেজের নবাগত শিক্ষার্থীদের বরণ করে নেয়া হয় এবং &quot;Training on Blood Grouping & Blood Screening&quot; শীর্ষক ওয়ার্কশপ ও ওয়ার্কশপ পরবর্তী কুইজ প্রতিযোগিতার আয়োজন করা হয়।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_017.webp" />
                    <p>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট কর্তৃক বাংলাদেশ মেডিকেল কলেজের সম্মানিত অধ্যক্ষ,  বাংলাদেশ মেডিকেল কলেজ হাসপাতাল -এর সম্মানিত পরিচালক  এবং সম্মানিত চিকিৎসকবৃন্দের সাথে পবিত্র ঈদ-উল-ফিতর এর শুভেচ্ছা বিনিময় করা হয়।</p>
                </div>
                <div className={styles.panel}>
                    <img src="/gallery/gallery_018.webp" />
                    <p>মহান স্বাধীনতা দিবস উপলক্ষে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিটের পক্ষ থেকে দুস্থ ও অসহায়দের মাঝে ইফতার প্রদান করা হয়।</p>
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
