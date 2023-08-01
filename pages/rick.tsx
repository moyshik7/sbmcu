import Head from 'next/head';
import styles from '@/styles/rick.module.css'
import Navbar from "@/components/navbar"
import Script from 'next/script'


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
            <title>You Have Been RickRolled</title>
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={`${styles.item} ${styles.bg_orange}`}>
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&mute=0&loop=1" title="Never Gonna Give You Up" frameBorder="0" allow="autoplay" allowFullScreen ></iframe>
            </div>
        </main>
    </div>);
};
  
export default HomePage;
