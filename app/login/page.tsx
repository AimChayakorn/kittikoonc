import styles from './page.module.css'
import Link from 'next/link'
export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.loginpane}>
        <h1 className={styles.login}>Log in</h1>
        <p className={styles.username}>Username</p>
        <input className={styles.inputusername} />
        <p className={styles.password}>Password</p>
        <input type="password" className={styles.inputpassword} />
        <button className={styles.button}>Login</button>
        <Link href='/signup' className={styles.createaccount}>Don't have account? Create account here</Link>
      </div>
    </main>
  )
}