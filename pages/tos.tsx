import Head from 'next/head';
import styles from '@/styles/about.module.css'
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
            <meta name='keywords' content="Sandhani Bangladesh Medical College, History of Sandhani Bangladesh Medical College Unit, Blood Donation Near Me, Non Profit Organization in Dhaka, Where to Donate in Dhaka, Places to Visit in Dhanmondi"/>
            <meta name='description' content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need."/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN,BN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="History of Sandhani Bangladesh Medical College Unit" />
            <meta property="og:description" content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need." />
            <meta property="og:url" content="https://sbmcu.com/" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="History of Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:description" content="Sandhani is a voluntary blood donation organization run by students of Bangladesh Medical College. We aim to encourage people to donate blood and provide free blood supplies to those in need." />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_1.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>Terms of Service - Sandhani Bangladesh Medical College Unit</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.spacer}></div>

        <Navbar />

        <main className={styles.content}>
            <div className={styles.category}>
                <div className={styles.textbox}>
                    <h1>Terms of Service</h1>
                    <br/>
                    <p  id={"user"}>By accessing this website, we assume you accept these terms and conditions.</p>
                    <br id={"liability"}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Limitation of Liability</h2>
                    <br/>
                    <br/>
                    <p>While we strive to provide accurate and up-to-date information on our website, we want to make it clear that we are not legally liable for any damages, losses, or inconveniences that may arise from using our website. This includes any issues related to technical glitches, errors in content, or interruptions in service. By using our website, you agree that any reliance you place on the information provided is at your own risk.</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Disclaimer Regarding Moving Objects</h2>
                    <br/>
                    <br/>
                    <p>Our website might include interactive elements or moving objects for enhanced user experience. We want to emphasize that we are not responsible for any discomfort, seizures, or adverse reactions that may result from viewing such content. If you experience any negative effects, we recommend discontinuing use and seeking medical attention if necessary.</p>
                    <br id={"copy"}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Copyright and Usage Restrictions</h2>
                    <br/>
                    <br/>
                    <p>The content presented on our website, including text, images, videos, and other multimedia elements, is protected under copyright law. While we encourage the sharing of information and knowledge, we want to clarify the terms of use:</p>
                    <ul>
                        <li>
                            <p><b>Fair Use:</b> You may use excerpts of our content for purposes such as criticism, commentary, news reporting, teaching, scholarship, or research. However, this usage must adhere to the principles of &apos;fair use&apos; as defined by copyright law.</p>
                        </li>
                        <li>
                            <p><b>Non-Commercial Use:</b> Our content may not be used for commercial purposes without explicit permission. This means you cannot use our materials for profit, advertising, or any other form of commercial gain without obtaining proper authorization.</p>
                        </li>
                    </ul>
                    <p>We appreciate your respect for intellectual property rights and encourage responsible use of our content. If you have questions about using our materials or seek permission for specific use cases, please contact us for further guidance.Your understanding of these terms is crucial as it helps maintain a fair and respectful online environment for all users. We value your presence on our website and want to ensure that everyone can benefit from the information we provide while adhering to legal and ethical standards.</p>
                    <br id={"data"}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Cookies and Data Collection</h2>
                    <br/>
                    <br/>
                    <p>When you visit our website, we use cookies to enhance your browsing experience. Cookies are small text files that are placed on your device (such as your computer or mobile phone) by websites you visit. They serve various purposes, including improving website functionality, analyzing user behavior, and providing personalized content.</p>
                    <br/>
                    <p>Cookies allow us to better understand how you interact with our website. They help us remember your preferences, such as your language settings, and enable certain features to make your experience smoother. For example, cookies might remember items you&apos;ve added to your shopping cart or keep you logged in as you navigate different pages.</p>
                    <br/>
                    <p>In addition to our own cookies, we also use third-party services like Google Analytics. These services use cookies to collect data about your usage patterns on our website. The information gathered includes your IP address, browser type, device information, and pages visited. This data is aggregated and anonymized, meaning it&apos;s grouped together and doesn&apos;t identify you personally. It provides us with valuable insights into how our website is being used, which pages are popular, and where we can make improvements.</p>
                    <br/>
                    <p>It&apos;s important to note that you have control over your cookie settings. Most web browsers allow you to manage your cookie preferences. You can choose to accept or decline cookies, and you can usually delete cookies from your device at any time. Keep in mind that by disabling certain cookies, you might impact your experience on our website and limit some features.</p>
                    <br/>
                    <p>By using our website, you&apos;re consenting to the use of cookies and data collection, both by us and by third-party services. We want to assure you that your privacy is important to us. We handle your data with care and take measures to protect it. For a more comprehensive understanding of how we handle your personal information, please refer to our Privacy Policy.</p>
                    <br/>
                    <p>In summary, cookies play a crucial role in enhancing your online experience, and data collection helps us improve our services. Your privacy is a priority, and we&apos;re committed to transparency in how we use cookies and handle your data. If you have any questions or concerns, please don&apos;t hesitate to reach out to us. Your trust matters, and we&apos;re here to provide clarity and support.</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default HomePage;
