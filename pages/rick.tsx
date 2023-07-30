import Head from 'next/head';
import styles from '@/styles/rick.module.css'
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

        <main className={styles.content}>
            <div className={`${styles.item} ${styles.bg_orange}`}>
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&mute=0&loop=1" title="Never Gonna Give You Up" frameBorder="0" allow="autoplay" allowFullScreen ></iframe>
            </div>
            
            <div className={`${styles.item} ${styles.bg_orange}`}>
                <iframe src="https://www.youtube.com/embed/Tb6xGDiSscc?controls=0&autoplay=1&mute=0&loop=1" title="Never Gonna Give You Up" frameBorder="0" allow="autoplay" allowFullScreen ></iframe>
            </div>
        </main>
    </div>);
};
  
export default HomePage;
