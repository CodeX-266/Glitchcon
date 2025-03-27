import React from "react";
import styles from "../styles/About.module.css";

const About = ({ setShowAbout }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={() => setShowAbout(false)}>×</button>
        <h2>About GharFind</h2>
        <p>
          GharFind is an AI-powered platform that simplifies real estate searches for 2 BHK flats in OMR.
          It aggregates deals from top developers, provides virtual tours, and ranks properties based on value.
        </p>
      </div>
    </div>
  );
};

export default About;
