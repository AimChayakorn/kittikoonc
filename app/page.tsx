import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.design}>
        <div className={styles.intro}>
          <h1 className={styles.welcome}>Welcome,</h1>
          <p className={styles.description}>I’m Chayakorn. This is my personal site.</p>
          <p className={styles.description}>Feel free to visit my other Social media platform.</p>
          <div className={styles.link}>
            <Link href='https://www.instagram.com/aimck_'>
            <Image src="/ig.png" width={46} height={46} className={styles.ig} alt="Link to my IG"/>
            </Link>
            <Link href='https://www.facebook.com/aim.chayakorn'>
            <Image src="/fb.png" width={46} height={46} className={styles.fb} alt="Link to my Facebook"/>
            </Link>
            <Link href='https://twitter.com/AimChayakorn'>
            <Image src="/x.png" width={46} height={46} className={styles.x} alt="Link to my X"/>
            </Link>
            <Link href='https://github.com/AimChayakorn'>
            <Image src="/github.png" width={46} height={46} className={styles.github} alt="Link to my Github"/>
            </Link>
          </div>
        </div>
        <div className={styles.pic}>
          <Image
              src="/NAim.png"
              width={417}
              height={417}
              className={styles.profilepic}
              alt="Picture of Nong Aim"
          />
        </div>
      </div>
      <div className={styles.topbar}>
        <Link href='/login' className={styles.project}>Personal Project</Link>
      </div>
    </main>
  )
}
