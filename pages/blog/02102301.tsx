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
            <meta name='keywords' content="Step into The Spotlight, Freshers 23, Orientation Bangladesh Medical College, Bangladesh Medical College, Sandhani Blood Bank, Sandhani, Sandhani Bangladesh Medical College Unit"/>
            <meta name='description' content="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit"/>
            <meta name='subject' content="Step into The Spotlight- 2023"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Step into The Spotlight- 2023" />
            <meta property="og:description" content="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
            <meta property="og:url" content="https://sbmcu.com/" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College" />
            <meta name="twitter:title" content="Step into The Spotlight- 2023" />
            <meta name="twitter:description" content="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:image" content="https://sbmcu.com/b/blog_006.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>Step into The Spotlight- 2023</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>Step into The Spotlight- 2023</h1>
                    <br/>
                    <p>
                        Welcome, freshers of BM-37
                    </p>
                    <br />
                    <p>
                        We are excited to have you on board and look forward to supporting you on your journey.
                    </p>
                    <br />
                    <p>
                        We tried our best to enlighten your journey by unlocking the secrets of “ Blood Grouping and Screening “ and we hope you all will make the best use of these experiences.
                    </p>
                    <br />
                    <p>
                        We also want to extend our heartfelt gratitude to Dr.Mizanur Rahman sir , Dr. Md. Alamgir sir and Dr. Panna sir for gracing our program with your presence.
                    </p>
                    <br/>
                    <iframe src="https://www.youtube.com/embed/69Ab78NVa5A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    <br/>
                    <br/>
                    <Image src="/b/blog_006.webp" width={1080} height={720} alt="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
                    <br/>
                    <br/>
                    <Image src="/b/blog_001.webp" width={1080} height={720} alt="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
                    <br/>
                    <br/>
                    <Image src="/b/blog_002.webp" width={1080} height={720} alt="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
                    <br/>
                    <br/>
                    <Image src="/b/blog_003.webp" width={1080} height={720} alt="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
                    <br/>
                    <br/>
                    <Image src="/b/blog_004.webp" width={1080} height={720} alt="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
                    <br/>
                    <br/>
                    <Image src="/b/blog_005.webp" width={1080} height={720} alt="Step into The Spotlight- 2023 arranged by Sandhani Bangladesh Medical College Unit" />
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
