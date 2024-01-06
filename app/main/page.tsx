'use client'

import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Main() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if(!token) {
      router.push('/login');
    }
  },[]);
  return (
    <main className={styles.main}>
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
