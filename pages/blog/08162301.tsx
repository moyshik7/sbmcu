import Head from 'next/head';
import Navbar from "@/components/navbar"
import Script from 'next/script'
import FooterItem from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';


const BloodAvailabilityPage = () => {
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
            <meta name="theme-color" content="#ff6f61"/>
            <meta name='keywords' content="Sandhani Bangladesh Medical College Unit, রক্ত, Blood Bank"/>
            <meta name='description' content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে"/>
            <meta property="og:title" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" />
            <meta property="og:description" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" />
            <meta property="og:image" content="https://sbmcu.com/b/blog_008.webp" />
            <meta name="twitter:title" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" />
            <meta name="twitter:description" content="সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে" />
            <meta name="twitter:image" content="https://sbmcu.com/b/blog_008.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@s_bmcu" />
            <title>সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="h-16" />
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-white">
            <article className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold">সন্ধানী বাংলাদেশ মেডিকেল কলেজ ইউনিট এ পর্যাপ্ত রক্ত আছে</h1>

                <Image src="/b/blog_008.webp" width={1080} height={720} alt="Blood Availability" className="w-full h-auto rounded-2xl" />

                <p className="text-white/80 leading-relaxed text-lg">যেকোনো প্রয়োজনে যোগাযোগ করুনঃ</p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+8801792099666" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/10 transition">
                        <span className="text-red-400 text-xl">📞</span>
                        <span className="text-lg font-medium">+880 1792099666</span>
                    </a>
                    <a href="tel:+8801675173841" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/10 transition">
                        <span className="text-red-400 text-xl">📞</span>
                        <span className="text-lg font-medium">+880 1675173841</span>
                    </a>
                </div>

                <p className="text-white/80 leading-relaxed text-lg">অথবা আমাদের ইউনিটে সরাসরি চলে আসুনঃ বাংলাদেশ মেডিকেল কলেজ, ধানমন্ডি, ঢাকা।</p>

                <div className="rounded-xl border-l-4 border-emerald-400 bg-emerald-400/10 p-5">
                    <p className="text-emerald-300 font-semibold mb-1">আরো তথ্যের জন্য</p>
                    <p className="text-white/80">বিস্তারিত জানতে আমাদের{' '}
                        <Link href="/contact" className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition">যোগাযোগ পেজ</Link> দেখুন।
                    </p>
                </div>

                <div className="rounded-xl border-l-4 border-amber-400 bg-amber-400/10 p-5">
                    <p className="text-amber-300 font-semibold mb-1">⚠️ সতর্কতা</p>
                    <p className="text-white/80">কোনো প্রকার দালালচক্রের দ্বারা প্রতারিত হবেন না। সন্ধানী সম্পুর্ণ বিনামূল্যে রক্ত সংগ্রহ ও বিতরণ করে।</p>
                </div>
            </article>
        </main>
  
        <FooterItem/>
    </div>);
};
  
export default BloodAvailabilityPage;
