import Head from 'next/head';
import styles from '@/styles/request.module.css'
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
            <meta name='keywords' content="Blood bank, Blood Bank in Bangladesh, Blood bank Near Me, Shandhani Bangladesh Medical College"/>
            <meta name='description' content="Need blood? We're here, day and night, to support you! Our doors are open 24/7, and we're just a call away. Whether it's an emergency or a planned procedure, you can count on us for a timely and reliable supply of life-saving blood"/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Blood Stock and Donors - Sandhani" />
            <meta property="og:description" content="Need blood? We're here, day and night, to support you! Our doors are open 24/7, and we're just a call away. Whether it's an emergency or a planned procedure, you can count on us for a timely and reliable supply of life-saving blood" />
            <meta property="og:url" content="https://sbmcu.com/membership" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Blood Stock and Donors - Sandhani" />
            <meta name="twitter:description" content="Need blood? We're here, day and night, to support you! Our doors are open 24/7, and we're just a call away. Whether it's an emergency or a planned procedure, you can count on us for a timely and reliable supply of life-saving blood" />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>Blood Stock and Donors - Sandhani</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>

            <div className={styles.category}>
                <div className={`${styles.item} ${styles.bg_red}`}>
                    <h2>A (+ve)</h2>
                    <p>Available: 01<br/>Regular Donors: 62</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_purple}`}>
                    <h2>A (-ve)</h2>
                    <p>Available: 00<br/>Regular Donors: 05</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>

                <div className={`${styles.item} ${styles.bg_green}`}>
                    <h2>B (+ve)</h2>
                    <p>Available: 01<br/>Regular Donors: 38</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_brown}`}>
                    <h2>B (-ve)</h2>
                    <p>Available: 00<br/>Regular Donors: 08</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.item} ${styles.bg_orange}`}>
                    <h2>O (+ve)</h2>
                    <p>Available: 01<br/>Regular Donors: 77</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_paste}`}>
                    <h2>O (-ve)</h2>
                    <p>Available: 00<br/>Regular Donors: 04</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>

                <div className={`${styles.item} ${styles.bg_yellow}`}>
                    <h2>AB (+ve)</h2>
                    <p>Available: 00<br/>Regular Donors: 35</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_blue}`}>
                    <h2>AB (-ve)</h2>
                    <p>Available: 00<br/>Regular Donors: 02</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
            </div>





            {/* Bengali */}
            <div className={styles.category}>
                <div className={`${styles.item} ${styles.bg_red}`}>
                    <h2>এ পজেটিভ</h2>
                    <p>প্রাপ্তিসাধ্য: 01<br/>নিয়মিত দাতা: 62</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_purple}`}>
                    <h2>এ নেগেটিভ</h2>
                    <p>প্রাপ্তিসাধ্য: 00<br/>নিয়মিত দাতা: 05</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>

                <div className={`${styles.item} ${styles.bg_green}`}>
                    <h2>বি পজেটিভ</h2>
                    <p>প্রাপ্তিসাধ্য: 01<br/>নিয়মিত দাতা: 38</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_brown}`}>
                    <h2>বি নেগেটিভ</h2>
                    <p>প্রাপ্তিসাধ্য: 00<br/>নিয়মিত দাতা: 08</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.item} ${styles.bg_orange}`}>
                    <h2>ও পজেটিভ</h2>
                    <p>প্রাপ্তিসাধ্য: 01<br/>নিয়মিত দাতা: 77</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_paste}`}>
                    <h2>ও নেগেটিভ</h2>
                    <p>প্রাপ্তিসাধ্য: 00<br/>নিয়মিত দাতা: 04</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>

                <div className={`${styles.item} ${styles.bg_yellow}`}>
                    <h2>এবি পজেটিভ</h2>
                    <p>প্রাপ্তিসাধ্য: 00<br/>নিয়মিত দাতা: 35</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_blue}`}>
                    <h2>এবি নেগেটিভ</h2>
                    <p>প্রাপ্তিসাধ্য: 00<br/>নিয়মিত দাতা: 02</p>
                    <div className={styles.button_holder}>
                        <a href="tel:+8801716858723">Call Now</a>
                    </div>
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
