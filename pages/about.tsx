import Head from 'next/head';
import styles from '@/styles/blog.module.css'
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';
import Image from 'next/image';


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
            <meta property="og:url" content="https://sbmcu.com/about" />
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
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>History of Sandhani Bangladesh Medical College Unit</h1>
                    <br/>
                    <div className={styles.note} lang="bn">
                        বেসরকারী মেডিকেল কলেজগুলোর প্রতিনিধি বাংলাদেশ মেডিকেল কলেজের ছাত্র-ছাত্রীদের সন্ধানীর সাথে প্রথম পরিচয় ঘটে ১৯৯৫ সালে সন্ধানী জাতীয় চক্ষুদান সমিতির একটি জোনের আত্মপ্রকাশের মাধ্যমে। প্রফেসর হাসান শহীদ এবং প্রফেসর সি.এইচ. কবীরের দিকনির্দেশনার মাধ্যমে মরনোত্তর চক্ষুদানে জনগনকে উদ্ধুদ্ধকরণের পাশাপাশি হাসপাতালের রোগীদের রক্তের চাহিদা পূরণের জন্য ছাত্র-ছাত্রীদের মাধ্যমে রক্ত সংগ্রহে সচেষ্ট ছিলেন ইনু (বিএম-৫), সাগর ও অন্ত (বিএম-৭)।
                    </div>
                    <br/>
                    <br/>
                    <div className={styles.warn} lang="en">
                        Bangladesh Medical College students, representatives of private medical colleges, were first introduced to Sandhani in 1995 through the debut of a zone of Sandhani National Ophthalmology Association. Professor Hasan Shaheed and Professor CH. Inu (BM-5), Sagar and Anta (BM-7) were involved in blood collection through students to meet the blood demand of the hospital patients besides motivating the people for post-mortem eye donation under the guidance of Kabir.
                    </div>
                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/history/history_1.webp" />
                    
                    <br/>
                    <br/>
                    <div className={styles.note} lang="bn">
                        কিন্তু রাজধানীর ব্যস্ত নাগরিক সভ্যতার মাঝে অবস্থিত বাংলাদেশ মেডিকেল কলেজে শুধু ছাত্র-ছাত্রীদের দ্বারা রক্তের অভাব মেটানো ছিল কষ্টসাধ্য। সে সময় সন্ধানীর একটি ইউনিট স্থাপনের প্রয়োজনীয়তা উপলব্ধি করা হয়। সেই সাথে প্রফেসর সি. এইচ. কবীর ও প্রফেসর হাসান শহীদের সর্বাত্মক সহযোগীতায় বাংলাদশে মেডিকেল কলেজের ছাত্র-ছাত্রীদের নিয়ে প্রথম স্বেচ্ছায় রক্তদান কর্মসূচী আয়োজন করেন বি এম ১০ এর আলমগীর, ইশতিয়াক এবং বি এম ১১ এর মাহতাব, আমিন, গিয়াস কামরুজ্জামান, শাকিল প্রমুখ।
                    </div>
                    <br/>
                    <br/>
                    <div className={styles.warn} lang="en">
                        But in Bangladesh Medical College, located in the midst of the busy civil society of the capital, it was difficult to meet the shortage of blood by students alone. At that time the necessity of setting up a unit of seeker was realized. Along with Professor C. H. Alamgir, Ishtiaq of BM 10 and Mahtab, Amin, Gias Kamruzzaman, Shakeel etc. of BM 10 organized the first voluntary blood donation program with the students of Bangladesh Medical College with the full support of Kabir and Professor Hasan Shaheed.
                    </div>
                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/history/history_2.webp" />

                    <br/>
                    <br/>
                    <div className={styles.note} lang="bn">
                        ১৯৯৯ এর ১ লা বৈশাখ ঢাকা বিশ্ববিদ্যালয়ের টি এস সিতে সফলভাবে এই কর্মসূচী পালনের ডপর সন্ধানীর একটি ইউনিট স্থাপনের পরিকল্পনা আরো জোরদার হয়। এর ভিত্তিতে ১৯৯৯ সালে বগুড়া মেডিকেল কলেজে অনুষ্ঠত সন্ধানী কেন্দ্রীয় বার্ষিক সম্মেলনে একটি ইউনিটের জন্য আবেদন করেন। কিন্তু তখন বেসরকারী মেডিকেল কলেজে ইউনিট স্থাপনের কোন সিদ্ধান্ত না থাকার কারনে অনুমতি পাওয়া সম্ভব হয়নি। তবে সে কারনে থেমে থাকেনি ছাত্র-ছাত্রীদের রক্তদান কার্যক্রম। প্রতিটি বিশেষ জাতীয় দিবসে রক্তদান কর্মসূচী পালন ছাড়াও ছাত্র-ছাত্রীদের নিয়ে রক্তের অভাব মেটানো এবং সেই সাথে সন্ধানীর একটি ইউনিট স্থাপনের জন্য চেষ্টা চালিয়ে যায় মাসুদ, আহমেদ, রাজন (বিএম-১২), শোভন (বিএম-১৩), হৃদয়, নাইম, পুলক, বাপ্পী (বিএম -১৫) প্রমুখ।
                    </div>
                    <br/>
                    <br/>
                    <div className={styles.warn} lang="en">
                        On 1st Baisakh of 1999, the plan to set up a unit of dopar finder to carry out this program successfully at TSC of Dhaka University was further strengthened. Based on this, the seeker applied for a unit in the Central Annual Conference held at Bogra Medical College in 1999. But because there was no decision to set up a unit in a private medical college, it was not possible to get permission. However, the blood donation program of students did not stop because of that. Apart from conducting blood donation programs on every special national day, Masood, Ahmed, Rajan (BM-12), Shobhan (BM-13), Hridiya, Naeem, Pulak, have been making efforts to meet the shortage of blood with students and also to set up a tracing unit. Bappi (BM-15) etc.
                    </div>
                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/history/history_3.webp" />

                    <br/>
                    <br/>
                    <div className={styles.note} lang="bn">
                        অবশেষে আসে সেই প্রতিক্ষিত দিনটি। ২০০৩ সালে ফরিদপুর মেডিকেল কলেজ আয়োজিত সন্ধানী ২২তম কেন্দ্রীয় বার্ষিক সম্মেলনে বেসরকারী মেডিকেল কলেজে সন্ধানী ইউনিট স্থাপনের সিদ্ধান্ত হয়। আনন্দঘন সেই স্মরনীয় মুহুর্তে সম্মেলনে উপস্থিত ছিলেন মাহতাব, মাসুদ, রাজন, শোভন, হৃদয়, নাইম, বাপ্পী। সুদীর্ঘ প্রতিক্ষার পর শিক্ষক-শিক্ষিকাবৃন্দ এবং ছাত্র-ছাত্রীদের সহযোগীতায় প্রথম বেসরকারী মেডিকেল কলেজ হিসেবে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট আত্মপ্রকাশ করে ১২ এপ্রিল,২০০৪ইং তারিখে।
                    </div>
                    <br/>
                    <br/>
                    <div className={styles.warn} lang="en">
                        Finally the long awaited day comes. In the 22nd Central Annual Conference of Sandhani organized by Faridpur Medical College in 2003, it was decided to set up a Sandhani unit in a private medical college. Mahtab, Masud, Rajan, Sobhan, Hridoy, Naim, Bappi were present in the conference at that memorable moment of Anandghan. After a long wait, with the support of teachers and students, Thandhani Bangladesh Medical College Unit debuted as the first private medical college on April 12, 2004.
                    </div>
                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/history/history_4.webp" />

                    <br/>
                    <br/>
                    <div className={styles.note} lang="bn">
                        প্রতিষ্ঠার পর থেকে সকলের সহযোগীতা ও অংশগ্রহনে সন্ধানী বামেকই মানব সেবায় গুরুত্বপূর্ণ অবদান রাখছে এবং উজ্জ্বল করে তুলেছে সন্ধানীর নাম।
                    </div>
                    <br/>
                    <br/>
                    <div className={styles.warn} lang="en">
                        Since its inception, with the cooperation and participation of all, Sandhani BMCU has been making important contributions to human services and making Sandhani&apos;s name shine.
                    </div>
                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/history/history_5.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/history/history_6.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/history/history_7.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_001.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_002.webp" />
                    
                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_003.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_004.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_005.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_006.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_007.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_008.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_009.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_010.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_011.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_012.webp" />

                    <br/>
                    <br/>

                    <Image height={720} width={1080} alt="Early Days of Sandhani Bangladesh Medical College" src="/gallery/gallery_013.webp" />
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
