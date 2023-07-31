import Head from 'next/head';
import styles from '@/styles/rick.module.css'
import Navbar from "@/components/navbar"


const HomePage = () => {
    return (
    <div className={styles.main}>
        <Head>
            <title>You Have Been RickRolled</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
