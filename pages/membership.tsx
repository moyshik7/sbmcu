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
            
            <meta name="theme-color" content="#ff6f61"/>
            <meta name='keywords' content="Sandhani, Sandhani Bangladesh Medical College Unit, Sandhani Dhaka mEDICAL cOLLEGE uNIT, Bangladesh Medical College, Join Sandhani, Donate Blood, Donate Blood in Dhaka"/>
            <meta name='description' content="Want to be part of an amazing organization that saves lives with every heartbeat? Join Sandhani, where students like you come together to collect the gift of life: blood! Spread smiles, share compassion, and make a difference in the lives of those in need."/>
            <meta name='subject' content="Blood Donation Free"/>
            <meta name='copyright' content="Sandhani Bangladesh Medical College Unit"/>
            <meta name='language' content='EN'/>
            <meta name='robots' content='index,follow'/>
            <meta property="og:title" content="Join Sandhani Bangladesh Medical College Unit" />
            <meta property="og:description" content="Want to be part of an amazing organization that saves lives with every heartbeat? Join Sandhani, where students like you come together to collect the gift of life: blood! Spread smiles, share compassion, and make a difference in the lives of those in need." />
            <meta property="og:url" content="https://sbmcu.com/membership" />
            <meta property="og:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta property="og:site_name" content="Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:title" content="Join Sandhani Bangladesh Medical College Unit" />
            <meta name="twitter:description" content="Want to be part of an amazing organization that saves lives with every heartbeat? Join Sandhani, where students like you come together to collect the gift of life: blood! Spread smiles, share compassion, and make a difference in the lives of those in need." />
            <meta name="twitter:image" content="https://sbmcu.com/slide/slide_2.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Sandhani Bangladesh Medical College Unit Cover Photo"/>
            <meta name="twitter:site" content="@s_bmcu" />
            
            <title>Join Sandhani</title>
            <link rel="icon" href="/favicon.ico" />
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
                    <p>Hey there, amazing students of Bangladesh Medical College! 🎉 We&apos;ve got some fantastic opportunities waiting just for you. 🌈</p>
    <p>Guess what? You&apos;re now eligible to become a part of something truly special! 🎓📚 It&apos;s as easy as can be – just follow these simple steps to join in on the fun:</p>
    <p>1. Fill out the attached form online, and it&apos;s as quick as a snap! 📝</p>
    <p>2. Make a joyful payment of only 100/= taka (remember, it&apos;s non-refundable!) through bKash/Nagad, or you can even swing by to submit your form in person. 📱💰</p>
    <p>3. For an extra touch of personal connection, visit the Sandhani Bangladesh Medical College Unit office to grab a physical copy of the form. Fill it up with a big smile and attach a passport-size photo – because we can&apos;t wait to see your shining faces! 📸🏥</p>
    <p>4. Your excitement might have to wait just a tad as we process your application in a few working days. But hey, good things are worth the wait, right? ⏳😄</p>
    <p>Remember, at Sandhani Bangladesh Medical College, we value your wellbeing and community spirit above all. By signing up, you&apos;re not just joining a group – you&apos;re embracing a family of like-minded individuals. ❤️🤗</p>
    <p>Now, before you dive in, let&apos;s set some ground rules for our fantastic journey together:</p>
    <p>- We&apos;re all about honesty and positivity, so let&apos;s keep things real and cheerful! 🌈</p>
    <p>- Being a part of this amazing community means agreeing to our membership terms and conditions. Together, we&apos;ll make this journey incredible! ✨</p>
    <p>- We&apos;re in this for the long haul, so let&apos;s promise to uplift and support each other, creating an environment that&apos;s free from anything harmful. 🙌</p>
    <p>So, what are you waiting for? Let your enthusiasm shine, and let&apos;s make some unforgettable memories together! 🥳💖 Remember, your adventure with Sandhani Bangladesh Medical College begins here, and the possibilities are endless! 🌟👩‍⚕️👨‍⚕️</p>
                    <a href="https://forms.gle/xcCei9Pqq9rRJwTr6" target="_blank">
                        Apply Now
                    </a>
                </div>
            </div>



            {/* Bengali */}
            <div className={styles.category}>
                <div className={`${styles.item} ${styles.bg_purple}`}>
                    <h2>ডোনার ক্লাবের সদস্য</h2>
                    <p>
                        আপনি আমাদের ইউনিটে এক ব্যাগ রক্ত দান করে এবং সদস্যপদ কার্ড পেয়ে যোগ দিতে পারেন। সেই কার্ডটি বাংলাদেশের আশেপাশের যেকোনো সন্ধ্যানি ইউনিট থেকে যেকোনো গ্রুপের (যদি পাওয়া যায়) রক্তের ব্যাগের সাথে বিনিময় করতে ব্যবহার করা যেতে পারে। সাইন আপ করে আপনি জরুরী পরিস্থিতিতে রক্তের জন্য আপনার সাথে যোগাযোগ করার অনুমতি দেন। আপনার কাছে এখনও অনুরোধ প্রত্যাখ্যান করার ক্ষমতা থাকবে। আপনি ইস্যুকারী শাখায় একটি আবেদন জমা দিয়ে যেকোনো সময় আপনার সদস্যপদ বাতিল করতে পারেন। আপনার মিম্বারশিপ প্রত্যাহার করা হলে আপনার ব্যক্তিগত তথ্য অপসারণ এবং মুছে ফেলার জন্য সন্ধ্যানি বাংলাদেশ মেডিকেল কলেজ ইউনিট দায়ী থাকবে (এই প্রক্রিয়াটি পরবর্তী অপারেশন বছরের শুরুতে সক্রিয় করা হবে)। আপনি প্রতি ব্যাগ রক্তের জন্য এক ব্যাগ রক্ত পেতে পারেন।
                    </p>
                </div>
                <div className={`${styles.item} ${styles.bg_brown}`}>
                    <h2>Student Volunteer Membership</h2>
                    <p>
                    যোগ্য হতে হলে আপনাকে অবশ্যই বাংলাদেশ মেডিকেল কলেজের বর্তমান ছাত্র হতে হবে। আপনি অনলাইনে সংযুক্ত ফর্মটি পূরণ করে এবং বিকাশ/নগদ এর মাধ্যমে 100/= টাকা (অফেরতযোগ্য) প্রদান করে বা আপনার আবেদন ফর্মটি শারীরিকভাবে জমা দিয়ে যোগ দিতে পারেন অথবা আপনি সন্ধ্যানি বাংলাদেশ মেডিকেল কলেজ ইউনিট অফিস থেকে ফর্মটির একটি ফিজিক্যাল কপি পেতে পারেন এবং এটি পূরণ করতে পারেন। আপনার পাসপোর্ট সাইজের এক কপি ছবি সহ জমা দিন। অনুমোদন পেতে আপনাকে কয়েক কার্যদিবস অপেক্ষা করতে হতে পারে। সন্ধ্যানি বাংলাদেশ মেডিকেল কলেজ কোন যুক্তি সহ বা ছাড়াই আপনার অনুরোধ অস্বীকার/বাতিল করার অধিকার রাখে। সাইন আপ করে আপনি আমাদের সদস্যতার শর্তাবলী মেনে চলতে সম্মত হন। আপনার সদস্যপদ স্বয়ংক্রিয়ভাবে প্রত্যাখ্যান করা হবে যদি আপনি জালিয়াতি, বিভ্রান্তিকর, বিষাক্ত এবং সন্ধ্যানি বাংলাদেশ মেডিকেল কলেজ বা এর সদস্য উভয়ের জন্যই ক্ষতিকর বলে প্রমাণিত হন।
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
