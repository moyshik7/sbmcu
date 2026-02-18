import Link from "next/link";
import Script from 'next/script';

const FooterItem = () => {
    return (
        <>
            <Script src="https://kit.fontawesome.com/e8cf12cfb9.js" crossOrigin="anonymous" />
            <footer className="mt-32 bg-gradient-to-t from-neutral-950 to-neutral-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        {/* Social Links */}
                        <div>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Connect With Us</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="https://www.facebook.com/profile.php?id=100081879352166" className="text-white/60 hover:text-white flex items-center gap-3 transition-colors no-underline group">
                                    <span className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors">
                                        <i className='fab fa-facebook text-sm' />
                                    </span>
                                    Facebook
                                </Link>
                                <Link href="https://twitter.com/s_bmcu" className="text-white/60 hover:text-white flex items-center gap-3 transition-colors no-underline group">
                                    <span className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-sky-500/20 flex items-center justify-center transition-colors">
                                        <i className='fab fa-twitter text-sm' />
                                    </span>
                                    Twitter
                                </Link>
                                <Link href="https://bd.linkedin.com/company/sandhani-bangladesh-medical-college-unit" className="text-white/60 hover:text-white flex items-center gap-3 transition-colors no-underline group">
                                    <span className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-blue-600/20 flex items-center justify-center transition-colors">
                                        <i className='fab fa-linkedin text-sm' />
                                    </span>
                                    LinkedIn
                                </Link>
                                <Link href="tel:+8801716858723" className="text-white/60 hover:text-white flex items-center gap-3 transition-colors no-underline group">
                                    <span className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-green-500/20 flex items-center justify-center transition-colors">
                                        <i className='fas fa-phone-alt text-sm' />
                                    </span>
                                    Call Us
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Quick Links</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/about/" className="text-white/60 hover:text-white transition-colors no-underline text-sm">About Sandhani</Link>
                                <Link href="/gallery/" className="text-white/60 hover:text-white transition-colors no-underline text-sm">Our Works</Link>
                                <Link href="/panel/" className="text-white/60 hover:text-white transition-colors no-underline text-sm">Our Panel Members</Link>
                                <Link href="/request/" className="text-white/60 hover:text-white transition-colors no-underline text-sm">Stock of Blood</Link>
                            </div>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Legal</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/tos/" className="text-white/60 hover:text-white transition-colors no-underline text-sm">Terms and Conditions</Link>
                                <Link href="/tosuser#" className="text-white/60 hover:text-white transition-colors no-underline text-sm">User Policy</Link>
                                <Link href="/tos#data" className="text-white/60 hover:text-white transition-colors no-underline text-sm">Data Collection</Link>
                                <Link href="/membership/" className="text-white/60 hover:text-white transition-colors no-underline text-sm">Membership Form</Link>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 text-center">
                        <p className="text-white/40 text-sm">
                            Sandhani BMC Session 2022-2023 &middot; Made by{' '}
                            <Link target="_blank" href="https://www.facebook.com/mahmud.oyshik" className="text-white/60 hover:text-white transition-colors underline decoration-white/20 hover:decoration-white/60">
                                Oyshik
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterItem;