import Link from "next/link";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about/" },
  { text: "Request", href: "/request/" },
  { text: "Gallery", href: "/gallery/" },
  { text: "Membership", href: "/membership/" },
  { text: "Our Panel", href: "/panel/" },
  { text: "Contact", href: "/contact/" },
];

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Script src="https://kit.fontawesome.com/e8cf12cfb9.js" crossOrigin="anonymous" />
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? "bg-neutral-900/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5" 
                    : "bg-transparent"
            }`}>
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-white/10 group-hover:ring-red-400/50 transition-all duration-300">
                            <Image src="/android-icon-192x192.png" height={192} width={192} alt="Sandhani Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-white font-semibold text-lg hidden sm:block tracking-tight">Sandhani</span>
                    </Link>

                    <button 
                        onClick={() => setNavActive(!navActive)} 
                        className="lg:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {navActive ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>
                        )}
                    </button>

                    <div className={`
                        lg:flex lg:items-center lg:gap-1
                        ${navActive ? "flex" : "hidden"}
                        flex-col lg:flex-row
                        absolute lg:relative
                        top-full lg:top-auto left-0 lg:left-auto
                        w-full lg:w-auto
                        bg-neutral-900/95 lg:bg-transparent
                        backdrop-blur-xl lg:backdrop-blur-none
                        border-b border-white/5 lg:border-none
                        p-4 lg:p-0
                        gap-1
                    `}>
                        {MENU_LIST.map((menu) => (
                            <Link
                                key={menu.text}
                                href={menu.href}
                                onClick={() => setNavActive(false)}
                                className="text-white/70 hover:text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-200 no-underline"
                            >
                                {menu.text}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setNavActive(false)}
                            className="ml-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full bg-red-500 hover:bg-red-400 transition-all duration-200 no-underline shadow-lg shadow-red-500/25 hover:shadow-red-400/30"
                        >
                            Donate
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;