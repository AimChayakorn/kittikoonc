import styles from './page.module.css'
import Link from 'next/link'
export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.design}>
      <Link href='/login' className={styles.createaccount}>Login</Link>
      </div>
    </main>
  )
}
