import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';


const TosPage = () => {
    return (
    <div className="min-h-screen bg-neutral-900">
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
            <meta name='robots' content='index,follow'/>
            <title>Terms of Service - Sandhani Bangladesh Medical College Unit</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Terms of Service</h1>

            <div className="space-y-8">
                <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/10 p-5" id="user">
                    <p className="text-white/90 leading-relaxed">By accessing this website, we assume you accept these terms and conditions.</p>
                </div>

                <section>
                    <h2 className="text-xl font-semibold mb-3" id="liability">Limitation of Liability</h2>
                    <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/10 p-5">
                        <p className="text-white/90 leading-relaxed">While we strive to provide accurate and up-to-date information on our website, we want to make it clear that we are not legally liable for any damages, losses, or inconveniences that may arise from using our website. This includes any issues related to technical glitches, errors in content, or interruptions in service. By using our website, you agree that any reliance you place on the information provided is at your own risk.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3" id="epilepsy">Disclaimer Regarding Moving Objects</h2>
                    <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/10 p-5">
                        <p className="text-white/90 leading-relaxed">Our website might include interactive elements or moving objects for enhanced user experience. We want to emphasize that we are not responsible for any discomfort, seizures, or adverse reactions that may result from viewing such content. If you experience any negative effects, we recommend discontinuing use and seeking medical attention if necessary.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3" id="copy">Copyright and Usage Restrictions</h2>
                    <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/10 p-5 mb-4">
                        <p className="text-white/90 leading-relaxed">The content presented on our website, including text, images, videos, and other multimedia elements, is protected under copyright law. While we encourage the sharing of information and knowledge, we want to clarify the terms of use:</p>
                    </div>
                    <div className="space-y-3">
                        <div className="rounded-xl border-l-4 border-amber-400 bg-amber-400/10 p-5">
                            <p className="text-white/90 leading-relaxed"><strong>Fair Use:</strong> You may use excerpts of our content for purposes such as criticism, commentary, news reporting, teaching, scholarship, or research. However, this usage must adhere to the principles of &apos;fair use&apos; as defined by copyright law.</p>
                        </div>
                        <div className="rounded-xl border-l-4 border-amber-400 bg-amber-400/10 p-5">
                            <p className="text-white/90 leading-relaxed"><strong>Non-Commercial Use:</strong> Our content may not be used for commercial purposes without explicit permission. This means you cannot use our materials for profit, advertising, or any other form of commercial gain without obtaining proper authorization.</p>
                        </div>
                    </div>
                    <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/10 p-5 mt-4">
                        <p className="text-white/90 leading-relaxed">We appreciate your respect for intellectual property rights and encourage responsible use of our content. If you have questions about using our materials or seek permission for specific use cases, please contact us for further guidance.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3" id="cookies">Cookies and Data Collection</h2>
                    <div className="space-y-3">
                        {[
                            "When you visit our website, we use cookies to enhance your browsing experience. Cookies are small text files that are placed on your device by websites you visit. They serve various purposes, including improving website functionality, analyzing user behavior, and providing personalized content.",
                            "Cookies allow us to better understand how you interact with our website. They help us remember your preferences, such as your language settings, and enable certain features to make your experience smoother.",
                            "In addition to our own cookies, we also use third-party services like Google Analytics. These services use cookies to collect data about your usage patterns on our website. The information gathered includes your IP address, browser type, device information, and pages visited. This data is aggregated and anonymized.",
                            "It's important to note that you have control over your cookie settings. Most web browsers allow you to manage your cookie preferences. You can choose to accept or decline cookies, and you can usually delete cookies from your device at any time.",
                            "By using our website, you're consenting to the use of cookies and data collection, both by us and by third-party services. We handle your data with care and take measures to protect it.",
                            "In summary, cookies play a crucial role in enhancing your online experience, and data collection helps us improve our services. Your privacy is a priority, and we're committed to transparency in how we use cookies and handle your data."
                        ].map((text, idx) => (
                            <div key={idx} className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/10 p-5">
                                <p className="text-white/90 leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default TosPage;
