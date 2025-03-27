import React from "react";
import styles from "../styles/auth.module.css";

const SignUp = ({ closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={closeModal}>&times;</span>
        <h2>Sign Up</h2>
        <form className={styles.authForm}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className={styles.authButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
