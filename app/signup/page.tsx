'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link'
import axios from 'axios';
export default function Login() {
  interface PostData {
    username: string;
    email: string;
    password: string;
  }
  const [postData, setPostData] = useState<PostData>({
    username: "",
    email: "",
    password: "",
  });
  const [showError, setError] = useState<Boolean>(false);
  const [showSuccess, setSuccess] = useState<Boolean>(false);
  const handleSuccess = (e: any) => {
    setSuccess(true);
  }
  const handleUsernameChange = (e: any) => {
    setPostData({ ...postData, username: e.target.value });
  };
  const handlePasswordChange = (e: any) => {
    setPostData({ ...postData, password: e.target.value });
  };
  const handleEmailChange = (e: any) => {
    setPostData({ ...postData, email: e.target.value });
  };
  const handleError = (e: any) => {
    setError(true);
  }
  const handleReset = () => {
    setPostData({username:'',password:'',email:''}); 
  }
  const handleSignUp = async () => {
    try {
      const res = await axios.post('https://www.aimaimngai.men/auth/signup', postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      handleReset();
      handleSuccess(0);
      const { ret } = res.data;
      console.log('Response: ',res.status);
      console.log(ret);
    }
    catch (error) {
      handleError(error);
      console.error('Error signing up', error);
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.signuppane}>
        <h1 className={styles.signup}>Create an account</h1>
        <p className={styles.username}>Username</p>
        <input value={postData.username} onChange={handleUsernameChange} className={styles.inputusername} />
        <p className={styles.email}>Email</p>
        <input value={postData.email} onChange={handleEmailChange}className={styles.inputemail} />
        <p className={styles.password}>Password</p>
        <input value={postData.password} onChange={handlePasswordChange}className={styles.inputpassword} />
        {showError && <p style={{ color: 'red' }}>Create account unsuccessful</p>}
        {showSuccess && <p style={{ color: 'green' }}>Create account successfully</p>}
        <button onClick={handleSignUp} className={styles.button}>Create an account</button>
        <Link href='/login' className={styles.backtologin}>Back to Login</Link>
      </div>
    </main>
  )
}