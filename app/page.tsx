'use client';
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import designStyles from './styles/design.module.css'
import sidebarStyles from './styles/sidebar.module.css'
import Link from 'next/link'
export default function Main() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <main className={styles.main}>
      <div
        className={!isMenuActive ? designStyles.design : designStyles.inactiveDesign}
      >
        <div className={designStyles.intro}>
          <h1 className={designStyles.welcome}>Welcome,</h1>
          <p className={designStyles.description}>I’m Chayakorn. This is my personal site.</p>
          <p className={designStyles.description}>Feel free to visit my other Social media platform.</p>
          <div className={designStyles.link}>
            <div className={designStyles.igCon}>
              <Link href='https://www.instagram.com/aimck_'>
              <Image src="/ig.png" fill className={designStyles.ig} alt="Link to my IG"/>
              </Link>
            </div> 
            <div className={designStyles.fbCon}>
              <Link href='https://www.facebook.com/aim.chayakorn'>
              <Image src="/fb.png" fill className={designStyles.fb} alt="Link to my Facebook"/>
              </Link>
            </div>
            <div className={designStyles.xCon}>
              <Link href='https://twitter.com/AimChayakorn'>
              <Image src="/x.png" fill className={designStyles.x} alt="Link to my X"/>
              </Link>
            </div>
            <div className={designStyles.ghCon}>
              <Link href='https://github.com/AimChayakorn'>
              <Image src="/github.png" fill className={designStyles.github} alt="Link to my Github"/>
              </Link>
            </div>
          </div>
        </div>
        <div className={designStyles.pic}>
          <Image
              src="/NAim.png"
              fill
              className={designStyles.profilepic}
              alt="Picture of Nong Aim"
          />
        </div>
      </div>
      <div 
        className={!isMenuActive ? styles.menuicon : styles.inactive}
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <div className={styles.menuPicCon}>
          <Link href=''>
          <Image
              src="/menu.png"
              fill
              className={styles.menuPic}
              alt="Menu icon"
          />
          </Link>
        </div>
      </div>
      <div className={isMenuActive ? sidebarStyles.sidebarActive : sidebarStyles.sidebar}>
        <div
          className={isMenuActive ? sidebarStyles.cross : styles.inactive}
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <Image src="/cross.png" width={18} height={18} className={sidebarStyles.cross} alt="Close side bar"/>
        </div>
        <div className={sidebarStyles.menues}>
          <Link className={sidebarStyles.project} href="">
            Personal Project
          </Link>
          <Link className={sidebarStyles.resume} href="">
            Resume
          </Link>
        </div>
      </div>
    </main>
  )
}
