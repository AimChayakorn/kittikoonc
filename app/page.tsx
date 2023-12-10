import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
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
        <Link href='' className={styles.logout}>Log out</Link>
      </div>
      <div className={styles.design}>
        <p className={styles.head1}>Your Designs</p>
        <p className={styles.head2}>Continue your work</p>
        <div className={styles.cont}>
          <div className={styles.card}></div>
        </div>
        <p className={styles.head2}>All Designs</p>
        <div className={styles.alldesigns}>

        </div>
      </div>
    </main>
  )
}
