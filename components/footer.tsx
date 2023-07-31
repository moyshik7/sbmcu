import styles from '@/styles/footer.module.css'
import Link from "next/link";

const FooterItem = () => {
    return (<div>
    <div className={styles.footer}>
        <div className={styles.sub}>
            <table>
                <tr>
                    <td>
                        <img src="/logo/logo_facebook.webp" alt="facebook Logo" />
                    </td>
                    <td>
                        <Link href="#">Facebook</Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="/logo/logo_twitter_old.webp" alt="Twitter Logo" />
                    </td>
                    <td>
                        <Link href="#">Twitter</Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="/logo/logo_linked.webp" alt="Linkedin Logo" />
                    </td>
                    <td>
                        <Link href="#">Linkedin</Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="/logo/logo_call.webp" alt="Phone Logo" />
                    </td>
                    <td>
                        <Link href="#">Phone</Link>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.sub}>
            <ul>
                <li><Link href="#">About Sandhani</Link></li>
                <li><Link href="#">Our Works</Link></li>
                <li><Link href="#">Our Panel Members</Link></li>
                <li><Link href="#">Stock of Blood</Link></li>
            </ul>
        </div>
        <div className={styles.sub}>
            <ul>
                <li><Link href="#">Terms and Condition</Link></li>
                <li><Link href="#">User Policy</Link></li>
                <li><Link href="#">Data Collection</Link></li>
                <li><Link href="#">Membership Form</Link></li>
            </ul>
        </div>
    </div>
    <div className={styles.bottom}>
        Sandhani BMC Session 2022-2023; Made By <Link target="_blank" href="https://www.facebook.com/mahmud.oyshik">Sayuri</Link>
    </div>
</div>);
};

export default FooterItem;