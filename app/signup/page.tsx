import styles from './page.module.css'
import Link from 'next/link'
export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.signuppane}>
        <h1 className={styles.signup}>Create an account</h1>
        <p className={styles.username}>Username</p>
        <input className={styles.inputusername} />
        <p className={styles.email}>Email</p>
        <input className={styles.inputemail} />
        <p className={styles.password}>Password</p>
        <input className={styles.inputpassword} />
        <button className={styles.button}>Create an account</button>
        <Link href='/login' className={styles.backtologin}>Back to Login</Link>
      </div>
    </main>
  )
}