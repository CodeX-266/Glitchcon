import React from "react";
import styles from "../styles/auth.module.css";

const Login = ({ closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={closeModal}>&times;</span>
        <h2>Login</h2>
        <form className={styles.authForm}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className={styles.authButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
