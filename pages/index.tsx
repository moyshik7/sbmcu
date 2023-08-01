import Head from 'next/head';
import styles from '@/styles/Home.module.css'
import Slideshow from '@/components/slide';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import Link from 'next/link';
import FooterItem from '@/components/footer';


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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BZ71381ERP" strategy="afterInteractive" />
      	<Script id="google-analytics" strategy="afterInteractive">
        	{`
          		window.dataLayer = window.dataLayer || [];
          		function gtag(){dataLayer.push(arguments);}
          		gtag('js', new Date());

          		gtag('config', 'G-BZ71381ERP');
        	`}
      	</Script>
        
        <div className={styles.spacer}></div>

        <Navbar />

        <Slideshow />


        <section className={styles.over_image} id="about">
            <h2>About Sandhani</h2>
            <p>Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need.</p>
        </section>

        <main className={styles.content}>

            <div className={styles.category}>
                <div className={`${styles.item} ${styles.bg_red}`}>
                    <h2>Donate Blood</h2>
                    <p>
                        Brighten someone's day with the gift of life! 🩸 Donate blood and spread happiness through your generosity. Every drop you give can save a life and make a positive impact on the world. Join the lifesaving party, and let your kindness flow as we celebrate the joy of giving together! 
                    </p>
                    <div className={styles.button_holder}>
                        <Link href="/contact">Donate Now</Link>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_purple}`}>
                    <h2>Receive Blood</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className={styles.button_holder}>
                        <Link href="/request">Receive Now</Link>
                    </div>
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.item} ${styles.bg_yellow}`}>
                    <h2>Contact Us</h2>
                    <p>
                        🤝 Need a helping hand? We've got you covered! 🌟 Whether it's a question, a concern, or a friendly chat, don't hesitate to reach out to us. Our team is here and eager to assist you. Together, we can overcome any obstacle and find the perfect solution tailored to your needs. So, drop us a message or give us a call, and let's embark on this journey together! 
                    </p>
                    <div className={styles.button_holder}>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.bg_blue}`}>
                    <h2>Join Us</h2>
                    <p>
                        Want to be part of an amazing organization that saves lives with every heartbeat? Join Sandhani, where students like you come together to collect the gift of life: blood! 🎈🩸 Spread smiles, share compassion, and make a difference in the lives of those in need. Together, we'll pump joy into the world by giving back and making every drop count. Be a lifesaver, join Sandhani, and let's create a happier, healthier tomorrow! 
                    </p>
                    <div className={styles.button_holder}>
                        <Link href="/membership">Become a Member</Link>
                    </div>
                </div>
            </div>


            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp_central.webp" alt="picture of central comittee representative" />
                    <h2>লাজিম ইমাম চৌধুরী</h2>
                    <p>Central Comittee Rep.</p>
                    <br />
                    <p>Be a lifeline, donate blood; your small act, their second chance.</p>
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp_president.webp" alt="picture of president" />
                    <h2>শাদমান কাদির</h2>
                    <p>President</p>
                    <br />
                    <p>Share the gift of life, donate blood, and inspire a chain of kindness. Be a hero. Donate today!</p>
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp_vp.webp" alt="picture of vice president" />
                    <h2>ছাদেকুল ইসলাম স্বজন</h2>
                    <p>Vice President</p>
                    <br />
                    <p>Give life, give love. Donate blood today. Your precious gift saves lives.</p>
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp_secretary.webp" alt="picture of general secretary" />
                    <h2>শাহরিয়ার হাসান আসিফ</h2>
                    <p>General Secretary</p>
                    <br />
                    <p>Be a lifeline: Donate blood, ignite hope, save lives.</p>
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
