import styles from '@/styles/footer.module.css'
import Link from "next/link";
import Script from 'next/script';

const FooterItem = () => {
    return (<div>
    <Script src="https://kit.fontawesome.com/e8cf12cfb9.js" crossOrigin="anonymous" />
    <div className={styles.footer}>
        <div className={styles.sub}>
            <ul>
                <li>
                    <Link href="https://www.facebook.com/profile.php?id=100081879352166"><i className='fab fa-facebook' /> Facebook</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="https://twitter.com/s_bmcu"><i className='fab fa-twitter' /> Twitter</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="https://bd.linkedin.com/company/sandhani-bangladesh-medical-college-unit"><i className='fab fa-linkedin' /> LinkedIn</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="tel:+8801716858723"><i className='fas fa-phone-alt' /> Call</Link>
                </li>
            </ul>
        </div>
        <div className={styles.sub}>
            <ul>
                <li><Link href="/about/">About Sandhani</Link></li>
                <li><Link href="/gallery/">Our Works</Link></li>
                <li><Link href="/panel/">Our Panel Members</Link></li>
                <li><Link href="/request/">Stock of Blood</Link></li>
            </ul>
        </div>
        <div className={styles.sub}>
            <ul>
                <li><Link href="/tos/">Terms and Condition</Link></li>
                <li><Link href="/tosuser#">User Policy</Link></li>
                <li><Link href="/tos#data">Data Collection</Link></li>
                <li><Link href="/membership/">Membership Form</Link></li>
            </ul>
        </div>
    </div>
    <div className={styles.bottom}>
        Sandhani BMC Session 2022-2023; Made By <Link target="_blank" href="https://www.facebook.com/mahmud.oyshik">Sayuri</Link>
    </div>
</div>);
};

export default FooterItem;