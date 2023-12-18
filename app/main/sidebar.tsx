import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function SideBar() {
    return (
        <div className={styles.sidebar}>
        <div className={styles.profilecon}>
        <Image
            src="/profilepic.png"
            width={107}
            height={107}
            className={styles.profilepic}
            alt="Your profile picture"
        />
        </div>
        <div className={styles.menu}>
            <Link href='' className={styles.link}>📕 Your Designs</Link>
            <Link href='' className={styles.link}>🌟 Favourite</Link>
            <Link href='' className={styles.link}>📝 Tasks</Link>
        </div>
        <Link href='/login' className={styles.logout}>Log out</Link>
        </div>
    );
}