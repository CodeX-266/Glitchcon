import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar = ({ setShowLogin, setShowSignUp }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Ashiyana</div>

      {/* Navigation Links */}
      <div className={styles.navLinks}>
        <a href="#">Home</a>
        <a href="#">Listings</a>
        <a href="#">Services</a>
        <a href="#">Contacts</a>
      </div>

      {/* Login & Sign-Up Buttons */}
      <div className={styles.authButtons}>
        <button onClick={() => setShowLogin(true)} className={styles.authButton}>Login</button>
        <button onClick={() => setShowSignUp(true)} className={styles.authButton}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
