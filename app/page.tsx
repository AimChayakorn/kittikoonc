'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
export default function Main() {
  const [haveToken, setHave] = useState<boolean>(false);
  const handleToken=(e: any)=> {
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken){
      setHave(true);
    }
    else{
      setHave(false);
    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.design}>
      <Link href='/login' className={styles.createaccount}>Login</Link>
      {haveToken && <p style={{ color: 'green' }}>Have token</p>}
      {!haveToken && <p style={{ color: 'red' }}>Don't have token</p>}
      </div>
      <button onClick={handleToken}>Check token</button>
    </main>
  )
}
