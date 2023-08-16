import Head from 'next/head';
import styles from '@/styles/blog.module.css'
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';


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
            <meta name='keywords' content="সন্ধানী, বাংলাদেশ মেডিকেল কলেজ, রক্ত আছে, সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট, সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে, A+ A- O+ O- AB+ AB= B+ B- রক্ত,  A+ A- O+ O- AB+ AB= B+ B- Blood Available"/>
            <meta name='description' content=""/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='BN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" />
            <meta property="og:description" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" />
            <meta property="og:url" content="https://sbmcu.com/blog/08162301/" />
            <meta property="og:image" content="https://sbmcu.com/b/blog_008.webp" />
            <meta property="og:site_name" content="সন্ধানী" />
            <meta name="twitter:title" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" />
            <meta name="twitter:description" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" />
            <meta name="twitter:image" content="https://sbmcu.com/b/blog_008.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে</h1>
                    <br/>
                    <p>
                        সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত সংখ্যক A(+ve), B(+ve), AB (+ve), O(+ ve) রক্ত আছে ।<br/>
                        <a href={"/contact"}>আপনাদের রক্তের প্রয়োজনে যোগাযোগ করতে পারেন।</a><br/>
                        যোগাযোগঃ<br/>
                        <a href={"tel:+8801792099666"}>+880 1792099666</a><br/>
                        <a href={"tel:+8801675173841"}>+880 1675173841</a><br/>
                        <br/>
                        <a href="https://goo.gl/maps/MJfktxyVG8mpTdhn9" target="_blank">ঠিকানা: রোড ১৪/এ, বাংলাদেশ মেডিকেল কলেজ হাসপাতালের প্রধান ভবনের বিপরীতে, BMSRI ভবনের নিচ তলা</a><br/>
                        <br/>
                        জয় হোক মানবতার<br/>
                        জয় হোক সন্ধানীর❤️<br/>
                    </p>
                    <div className={styles.note}>
                        <Link href="/contact" >রক্তের প্রয়োজনে সরাসরি সন্ধানি বাংলাদেশ মেডিকেল কলেজ ইউনিটে যোগাযোগ করুন</Link>
                    </div>
                    <br/>
                    <br/>
                    <div className={styles.warn}>
                        <b>কোনো প্রকার দালালচক্রের দ্বারা প্রতারিত হবেন না</b>
                    </div>
                    <br/>
                    <br/>
                    <Image height={720} width={1080} alt="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" src="/b/blog_008.webp" />
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
