import Head from 'next/head';
import styles from '@/styles/membership.module.css'
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
            <meta name="theme-color" content="#ffffff"/>
            
            <title>Sandhani - Blood Donation Organization</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>Membership of Sandhani Bangladesh Medical College Unit</h1>
                    <h2>Types of Membership</h2>
                    <p>
                        We offer 2 types of membership. Donor Club membership and Student membership (Active committee) composed of students of Bangladesh Medical College, Dhanmondi.
                    </p>
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.item} ${styles.bg_purple}`}>
                    <h2>Donor Club Member</h2>
                    <p>
                        You can join simply by donating a bag of blood at our unit and receiving a membership card. That card can be used to exchange with a bag of blood of any group (if available) from any Sandhani unit around Bangladesh. By signing up you allow us to contact you for bloods in case of emergency. You will still have the authority to decline the request. You can cancel your membership at any time by submitting an application to the issuing branch. Sandhani Bangladesh Medical College Unit will be responsible for responsible for removing and deleting your personal information in case of your mrmbership is revoked (This process will be activating at the start of next operation year). You may receive one bag of blood for every bag of blood you donate.
                    </p>
                </div>
                <div className={`${styles.item} ${styles.bg_brown}`}>
                    <h2>Student Volunteer Membership</h2>
                    <p>
                        To be eligible you must be a current student of Bangladesh Medical College. You can Join by filling up the attached form online and paying 100/= taka (non refundable) via bKash/Nagad or physically submitting your application form or you can receive a physical copy of the form from Sandhani Bangladesh Medical College Unit office and filling it up along with one copy of your passport size photograph and submitting it. You might have to wait a few workingg days to be approved. Sandhani Bangladesh Medical College holds the right to deny/cancel your request with or without any reasoning. By signing up you agree to abide by our membership terms and conditions. Your membership will be automatically denied if you&apos;re found to be frawd, misleading, toxic, and in any way harmful for both Sandhani bangladesh medical College or it&apos;s members.
                    </p>
                    <a href="https://forms.gle/xcCei9Pqq9rRJwTr6" target="_blank">
                        Apply Now
                    </a>
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
