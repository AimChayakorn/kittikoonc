'use client';
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Main() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <main className={styles.main}>
      <div
        className={!isMenuActive ? styles.design : styles.inactiveDesign}
      >
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
      <div 
        className={!isMenuActive ? styles.menuicon : styles.inactive}
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <Link href=''>
        <Image
            src="/menu.png"
            width={58}
            height={58}
            alt="Menu icon"
        />
        </Link>
      </div>
      <div
        className={isMenuActive ? styles.sidebarActive : styles.sidebar}
      >
        <div
          className={isMenuActive ? styles.cross : styles.inactive}
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <Image src="/cross.png" width={18} height={18} className={styles.cross} alt="Close side bar"/>
        </div>
        <div className={styles.menues}>
          <Link className={styles.project} href="/project">
            Personal Project
          </Link>
          <Link className={styles.resume} href="/resume">
            Resume
          </Link>
        </div>
      </div>
    </main>
  )
}
