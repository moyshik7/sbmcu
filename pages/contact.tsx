import Head from 'next/head';
import styles from '@/styles/contact.module.css'
import Navbar from "@/components/navbar"
import Script from 'next/script'
import Link from 'next/link';
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
            <meta name='keywords' content="Sandhani Bangladesh Medical College, Sandhani Phone Number, Sandhani President, Blood Donor Number, Blood Donor in bangladesh, Blood Donor in Dhaka"/>
            <meta name='description' content="Need a helping hand? We've got you covered! 🌟 Whether it's a question, a concern, or a friendly chat, don't hesitate to reach out to us. Our team is here and eager to assist you 24/7"/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN,BN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Get in Touch with Us - Sandhani" />
            <meta property="og:description" content="Need a helping hand? We've got you covered! 🌟 Whether it's a question, a concern, or a friendly chat, don't hesitate to reach out to us. Our team is here and eager to assist you 24/7" />
            <meta property="og:url" content="https://sbmcu.com/" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Get in Touch with Us - Sandhani" />
            <meta name="twitter:description" content="Need a helping hand? We've got you covered! 🌟 Whether it's a question, a concern, or a friendly chat, don't hesitate to reach out to us. Our team is here and eager to assist you 24/7" />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>Get in Touch - Sandhani</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h2>Address:</h2>
                    <p><Link href="https://goo.gl/maps/Q32WXNKLENYxqFhj7" target="_blank"> Ground floor, BMSRI Office (opposite to main hospital building), Bangladesh Medical College Hospital, Dhanmondi 14/A, Dhaka-1209, Dhaka, Bangladesh</Link></p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h2>Mobile:</h2>
                    <p>Tanjil Mahmud Shikdar (Senior Technitian) <Link href="tel:+8801716858723">+88 01716-858723</Link> </p>
                    <p>Shadman Kadir (President) <Link href="tel:+8801531191682">+88 01531-191682</Link> </p>
                    <p>Shahriar Hasan Asif (General Secretary) <Link href="tel:+8801600196600">+88 01600-196600</Link> </p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h2>Facebook:</h2>
                    <p><Link href="https://www.facebook.com/profile.php?id=100081879352166" target="_blank">Sandhani Bangladesh Medical College Unit</Link> </p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h2>Twitter:</h2>
                    <p><Link href="https://twitter.com/s_bmcu" target="_blank">Sandhani Bangladesh Medical College Unit</Link> </p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h2>Mail:</h2>
                    <p><Link href="mailto:admin@sbmcu.com">admin@sbmcu.com</Link> </p>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h2>Linkedin:</h2>
                    <p><Link href="https://bd.linkedin.com/company/sandhani-bangladesh-medical-college-unit" target="_blank">Sandhani Bangladesh Medical College Unit</Link> </p>
                </div>
            </div>
            <map className={styles.map}></map>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;