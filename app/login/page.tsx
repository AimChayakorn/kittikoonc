'use client'

import axios from 'axios';
import styles from './page.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Login() {
  interface PostData {
    username: string;
    password: string;
  }
  const [postData, setPostData] = useState<PostData>({
    username: "",
    password: "",
  });
  const [showError, setError] = useState<Boolean>(false);
  const [showLogin, setLogin] = useState<Boolean>(false);
  const handlePasswordChange = (e: any) => {
    setPostData({ ...postData, password: e.target.value });
  };
  const handleUsernameChange = (e: any) => {
    setPostData({ ...postData, username: e.target.value });
  };
  const handleError = (e: any) => {
    setError(true);
  }
  const handleShowLogin = (e: boolean) => {
    setLogin(e);
  }
  const handleLogin = async () => {
    try {
      const res = await axios.post('https://www.aimaimngai.men/auth/login', postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log('Response: ',res.status);
      const { accessToken } = res.data;

      localStorage.setItem('accessToken', accessToken);
      window.location.href = '/main'; // Adjust the path as needed
    } catch (error) {
      handleError(error);
      console.error('Error login unsuccessful', error);
    }
  }
  useEffect (() => {
    const login = localStorage.getItem('loginState');
    if(login && login == 'true') {
      handleShowLogin(true);
    }
    else {
      handleShowLogin(false);
    }
  },[]);
  return (
    <main className={styles.main}>
      <div className={styles.loginpane}>
        <h1 className={styles.login}>Log in</h1>
        <p className={styles.username}>Username</p>
        <input value={postData.username} onChange={handleUsernameChange }className={styles.inputusername} />
        <p className={styles.password}>Password</p>
        <input type="password" value={postData.password} onChange={handlePasswordChange} className={styles.inputpassword} />
        {showError && <p style={{ color: 'red' }}>Username and password don't match</p>}
        {showLogin && <p style={{color: 'red' }}>You need to login first</p>}
        <button onClick={handleLogin} className={styles.button}>Login</button>
        <Link href='/signup' className={styles.createaccount}>Don't have account? Create account here</Link>
      </div>
    </main>
  )
}