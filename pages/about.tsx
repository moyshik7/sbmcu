import Head from 'next/head';
import styles from '@/styles/membership.module.css'
import Navbar from "@/components/navbar"


const HomePage = () => {
    return (
    <div className={styles.main}>
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
            <meta name="theme-color" content="#ffffff"/>
            
            <title>Sandhani - Blood Donation Organization</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <section className={styles.over_image} id="about">
            <h2>About Sandhani</h2>
            <p>Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need.</p>
        </section>

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>Sandhani Bangladesh Medical College Unit</h1>
                    <br/>
                    <br/>
                    <h2>History:</h2>
                    <br/>
                    
                    <p>
                        বেসরকারী মেডিকেল কলেজগুলোর প্রতিনিধি বাংলাদেশ মেডিকেল কলেজের ছাত্র-ছাত্রীদের সন্ধানীর সাথে প্রথম পরিচয় ঘটে ১৯৯৫ সালে সন্ধানী জাতীয় চক্ষুদান সমিতির একটি জোনের আত্মপ্রকাশের মাধ্যমে। প্রফেসর হাসান শহীদ এবং প্রফেসর সি.এইচ. কবীরের দিকনির্দেশনার মাধ্যমে মরনোত্তর চক্ষুদানে জনগনকে উদ্ধুদ্ধকরণের পাশাপাশি হাসপাতালের রোগীদের রক্তের চাহিদা পূরণের জন্য ছাত্র-ছাত্রীদের মাধ্যমে রক্ত সংগ্রহে সচেষ্ট ছিলেন ইনু (বিএম-৫), সাগর ও অন্ত (বিএম-৭)। কিন্তু রাজধানীর ব্যস্ত নাগরিক সভ্যতার মাঝে অবস্থিত বাংলাদেশ মেডিকেল কলেজে শুধু ছাত্র-ছাত্রীদের দ্বারা রক্তের অভাব মেটানো ছিল কষ্টসাধ্য। সে সময় সন্ধানীর একটি ইউনিট স্থাপনের প্রয়োজনীয়তা উপলব্ধি করা হয়। সেই সাথে প্রফেসর সি. এইচ. কবীর ও প্রফেসর হাসান শহীদের সর্বাত্মক সহযোগীতায় বাংলাদশে মেডিকেল কলেজের ছাত্র-ছাত্রীদের নিয়ে প্রথম স্বেচ্ছায় রক্তদান কর্মসূচী আয়োজন করেন বি এম ১০ এর আলমগীর, ইশতিয়াক এবং বি এম ১১ এর মাহতাব, আমিন, গিয়াস কামরুজ্জামান, শাকিল প্রমুখ। ১৯৯৯ এর ১ লা বৈশাখ ঢাকা বিশ্ববিদ্যালয়ের টি এস সিতে সফলভাবে এই কর্মসূচী পালনের ডপর সন্ধানীর একটি ইউনিট স্থাপনের পরিকল্পনা আরো জোরদার হয়। এর ভিত্তিতে ১৯৯৯ সালে বগুড়া মেডিকেল কলেজে অনুষ্ঠত সন্ধানী কেন্দ্রীয় বার্ষিক সম্মেলনে একটি ইউনিটের জন্য আবেদন করেন। কিন্তু তখন বেসরকারী মেডিকেল কলেজে ইউনিট স্থাপনের কোন সিদ্ধান্ত না থাকার কারনে অনুমতি পাওয়া সম্ভব হয়নি। তবে সে কারনে থেমে থাকেনি ছাত্র-ছাত্রীদের রক্তদান কার্যক্রম। প্রতিটি বিশেষ জাতীয় দিবসে রক্তদান কর্মসূচী পালন ছাড়াও ছাত্র-ছাত্রীদের নিয়ে রক্তের অভাব মেটানো এবং সেই সাথে সন্ধানীর একটি ইউনিট স্থাপনের জন্য চেষ্টা চালিয়ে যায় মাসুদ, আহমেদ, রাজন (বিএম-১২), শোভন (বিএম-১৩), হৃদয়, নাইম, পুলক, বাপ্পী (বিএম -১৫) প্রমুখ।
                    </p>
                    <br/>
                    <p>
                        অবশেষে আসে সেই প্রতিক্ষিত দিনটি। ২০০৩ সালে ফরিদপুর মেডিকেল কলেজ আয়োজিত সন্ধানী ২২তম কেন্দ্রীয় বার্ষিক সম্মেলনে বেসরকারী মেডিকেল কলেজে সন্ধানী ইউনিট স্থাপনের সিদ্ধান্ত হয়। আনন্দঘন সেই স্মরনীয় মুহুর্তে সম্মেলনে উপস্থিত ছিলেন মাহতাব, মাসুদ, রাজন, শোভন, হৃদয়, নাইম, বাপ্পী। সুদীর্ঘ প্রতিক্ষার পর শিক্ষক-শিক্ষিকাবৃন্দ এবং ছাত্র-ছাত্রীদের সহযোগীতায় প্রথম বেসরকারী মেডিকেল কলেজ হিসেবে সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট আত্মপ্রকাশ করে ১২ এপ্রিল,২০০৪ইং তারিখে। প্রতিষ্ঠার পর থেকে সকলের সহযোগীতা ও অংশগ্রহনে সন্ধানী বামেকই মানব সেবায় গুরুত্বপূর্ণ অবদান রাখছে এবং উজ্জ্বল করে তুলেছে সন্ধানীর নাম। 
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    
                </div>
            </div>
        </main>
  
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/people/Sandhani-Bangladesh-Medical-College-Unit/" target='_blank'>
                    Facebook
                </a>
                <a href="https://linkedin.com/company/sandhani-bangladesh-medical-college-unit" target='_blank'>
                    Linkedin
                </a>
                <a href="mailto:example@example.com" target='_blank'>
                    Mail
                </a>
                <a href="tel:+8801716858723" target='_blank'>
                    Call
                </a>
                <a href="https://twitter.com/s_bmcu" target='_blank'>
                    Twitter
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Sandhani - Bangladesh Medical College - Made bu Sayurio</p>
        </footer>
    </div>);
};
  
export default HomePage;
