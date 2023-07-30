import Head from 'next/head';
import styles from '@/styles/Home.module.css'
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
            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp_central.webp" alt="picture of central comittee representative" />
                    <h2>লাজিম ইমাম চৌধুরী</h2>
                    <p>Central Comittee Rep.</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp_president.webp" alt="picture of president" />
                    <h2>শাদমান কাদির</h2>
                    <p>President</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp_secretary.webp" alt="picture of general secretary" />
                    <h2>শাহরিয়ার হাসান আসিফ</h2>
                    <p>General Secretary</p>
                    <br />
                </div>
            </div>

            <div className={styles.category}>
            <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp_vp.webp" alt="picture of vice president" />
                    <h2>ছাদেকুল ইসলাম স্বজন</h2>
                    <p>Vice President</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-005.webp" alt="picture of " />
                    <h2>নাফিসা আমিন নিঝুম</h2>
                    <p>Joint General Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-010.webp" alt="picture of " />
                    <h2>সাজিদুর রহমান পাটোয়ারী</h2>
                    <p>Organizing Secretary</p>
                    <br />
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-009.webp" alt="picture of " />
                    <h2>সালমান ইবনে সেলিম</h2>
                    <p>Finance Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-011.webp" alt="picture of " />
                    <h2>মোস্তাফিজুর রহমান ফাহিম</h2>
                    <p>Joint Finance Secretary - 1</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-004.webp" alt="picture of vice president" />
                    <h2>রিজওয়ান আহম্মদ</h2>
                    <p>Joint Finance Secretary - 2</p>
                    <br />
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-008.webp" alt="picture of " />
                    <h2>সুদীপ্ত বিশ্বাস</h2>
                    <p>Student Welfare Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-007.webp" alt="picture of " />
                    <h2>লাবীবা বিনতে খালিদ</h2>
                    <p>Joint Student Welfare Secretary - 1</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-012.webp" alt="picture of vice president" />
                    <h2>সায়েদিত সালেহিন আদিত্য</h2>
                    <p>Joint Student Welfare Secretary - 2</p>
                    <br />
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-017.webp" alt="picture of " />
                    <h2>তৈয়বা ইসলাম অনন্যা</h2>
                    <p>Patient Welfare Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-013.webp" alt="picture of " />
                    <h2>খন্দকার আবদুল্লাহীল মীম</h2>
                    <p>Joint Patient Welfare Secretary - 1</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-016.webp" alt="picture of vice president" />
                    <h2>স্নেহাশীষ রয়</h2>
                    <p>Joint Patient Welfare Secretary - 2</p>
                    <br />
                </div>
            </div> 

            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-019.webp" alt="picture of " />
                    <h2>আনজুম নাফি</h2>
                    <p>Press and Publications Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-006.webp" alt="picture of " />
                    <h2>বিরল দে অর্ঘ্য</h2>
                    <p>Joint Press and Publications Secretary - 1</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-015.webp" alt="picture of vice president" />
                    <h2>আনিকা আদিবা</h2>
                    <p>Joint Press and Publications Secretary - 2</p>
                    <br />
                </div>
            </div>
            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-014.webp" alt="picture of " />
                    <h2>সিনথিয়া চৌধুরী</h2>
                    <p>Office Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-018.webp" alt="picture of " />
                    <h2>আবদুল্লাহ আল শাহরিয়া</h2>
                    <p>Joint Office Secretary</p>
                    <br />
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-024.webp" alt="picture of " />
                    <h2>ফারিহা রউফ ঋতু</h2>
                    <p>Donor Club and Social Welfare Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-020.webp" alt="picture of " />
                    <h2>নুসরাত তাবাসসুম সর্ণা</h2>
                    <p>Education Research and Statistics Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-021.webp" alt="picture of vice president" />
                    <h2>রাকিবুল ইসলাম মুরাদ</h2>
                    <p>Joint Education Research and Statistics Secretary</p>
                    <br />
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-026.webp" alt="picture of " />
                    <h2>মাহফুজা আনান</h2>
                    <p>Executive Committee Member - 1</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-023.webp" alt="picture of " />
                    <h2>ফয়সাল খান</h2>
                    <p>Executive Committee Member - 2</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-027.webp" alt="picture of vice president" />
                    <h2>জিনিয়া আলম</h2>
                    <p>Executive Committee Member - 3</p>
                    <br />
                </div>
            </div>

            <div className={styles.category}>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-025.webp" alt="picture of " />
                    <h2>সিদরাতুল মুনতাহা</h2>
                    <p>Drug Bank Secretary</p>
                    <br />
                </div>
                <div className={`${styles.panel} ${styles.bg_gray}`}>
                    <img src="/pfp/pfp-022.webp" alt="picture of " />
                    <h2>আয়েশা বিনতে কামাল নোভা</h2>
                    <p>Joint Drug Bank Secretary</p>
                    <br />
                </div>
            </div>
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
