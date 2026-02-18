import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';


const MembershipPage = () => {
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
            <meta name='keywords' content="Sandhani, Sandhani Bangladesh Medical College Unit, Join Sandhani, Donate Blood, Donate Blood in Dhaka"/>
            <meta name='description' content="Want to be part of an amazing organization that saves lives with every heartbeat? Join Sandhani, where students like you come together to collect the gift of life: blood!"/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Join Sandhani Bangladesh Medical College Unit" />
            <meta property="og:description" content="Want to be part of an amazing organization that saves lives with every heartbeat? Join Sandhani, where students like you come together to collect the gift of life: blood!" />
            <meta property="og:url" content="https://sbmcu.com/membership" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Join Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:description" content="Want to be part of an amazing organization that saves lives with every heartbeat? Join Sandhani, where students like you come together to collect the gift of life: blood!" />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            <title>Join Sandhani</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Membership</h1>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                    We offer 2 types of membership: Donor Club membership and Student membership (Active committee) composed of students of Bangladesh Medical College, Dhanmondi.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Donor Club */}
                <div className="bg-gradient-to-br from-indigo-600/80 to-indigo-900/80 rounded-2xl border border-white/10 p-8 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                        </div>
                        <h2 className="text-white text-xl font-bold">Donor Club Member</h2>
                    </div>
                    <p className="text-white/80 leading-relaxed mb-6 flex-1">
                        Join by donating a bag of blood at our unit and receive a membership card. This card can be used to exchange with a bag of blood of any group (if available) from any Sandhani unit around Bangladesh. By signing up you allow us to contact you for blood in case of emergency. You can cancel your membership at any time.
                    </p>
                    <p className="text-white/80 leading-relaxed mb-4" lang="bn">
                        আপনি আমাদের ইউনিটে এক ব্যাগ রক্ত দান করে এবং সদস্যপদ কার্ড পেয়ে যোগ দিতে পারেন। সেই কার্ডটি বাংলাদেশের আশেপাশের যেকোনো সন্ধ্যানি ইউনিট থেকে যেকোনো গ্রুপের রক্তের ব্যাগের সাথে বিনিময় করতে ব্যবহার করা যেতে পারে।
                    </p>
                </div>

                {/* Student Volunteer */}
                <div className="bg-gradient-to-br from-amber-700/60 to-amber-900/60 rounded-2xl border border-white/10 p-8 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                        </div>
                        <h2 className="text-white text-xl font-bold">Student Volunteer</h2>
                    </div>
                    <div className="text-white/80 leading-relaxed mb-6 flex-1 space-y-3">
                        <p>You must be a current student of Bangladesh Medical College. How to join:</p>
                        <ol className="list-decimal list-inside space-y-2 text-white/70">
                            <li>Fill out the online form</li>
                            <li>Pay 100/= taka (non-refundable) via bKash/Nagad or in person</li>
                            <li>Visit the Sandhani office for a physical copy with passport-size photo</li>
                            <li>Wait a few working days for approval</li>
                        </ol>
                    </div>
                    <p className="text-white/80 leading-relaxed mb-6" lang="bn">
                        যোগ্য হতে হলে আপনাকে অবশ্যই বাংলাদেশ মেডিকেল কলেজের বর্তমান ছাত্র হতে হবে। আপনি অনলাইনে সংযুক্ত ফর্মটি পূরণ করে এবং বিকাশ/নগদ এর মাধ্যমে 100/= টাকা প্রদান করে যোগ দিতে পারেন।
                    </p>
                    <a 
                        href="https://forms.gle/xcCei9Pqq9rRJwTr6" 
                        target="_blank"
                        className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 no-underline border border-white/20 text-center"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default MembershipPage;
