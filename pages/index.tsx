import Head from 'next/head';
import styles from '@/styles/Home.module.css'
import Slideshow from '@/components/slide';
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

        <Slideshow />


        <section className={styles.over_image} id="about">
            <h2>About Sandhani</h2>
            <p>Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need.</p>
        </section>

        <main className={styles.content}>
  
            <section className={styles.section} id="donate">
                <h2>Donate Blood</h2>
                <p>Help save lives by donating blood. Your contribution can make a difference.</p>
                <button>Donate Now</button>
            </section>
  
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            <section className={styles.section} id="request">
                <h2>Request Blood</h2>
                <p>If you or someone you know requires blood, please fill out the request form, and we will do our best to assist you.</p>
                <button>Request Blood</button>
                <p>Address: Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</p>
                <p>Phone: +8801716858723</p>
                <p>We are open 24/7 for picking up blood for free. We do not charge extra for the blood we provide.</p>
            </section>
            
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