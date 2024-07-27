import React from 'react';
import { useState } from 'react';
import styles from '../PageStyles/auth.module.css'
import Login from '../components/auth/LoginComponent';
import Register from '../components/auth/RegisterComponent';

const AuthPage = () => {

  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={styles.authContainer}>
      <div className={styles.authLeft}>
        <div className={styles.authContent}>
          <h1 className={styles.logo}>JobLoop</h1>
          <h3>Welcome Back!</h3>
          <p className={styles.authSubText}>Create an account to continue to JobLoop</p>
          <div className={styles.authSeparator}></div>
          {isRegistering ? <Register /> : <Login />}
        </div>
      </div>
      <div className={styles.authRight}>
        <div className={styles.authContent}>
          
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
