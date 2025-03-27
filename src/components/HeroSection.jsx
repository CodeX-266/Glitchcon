import React from "react";
import SearchBar from "./SearchBar";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div> {/* Dark overlay for readability */}
      <div className={styles.content}>
        <h1>Tour Your Next Home Virtually – AI-Powered Real Estate Insights!</h1>
        <p>Find the best deals on 2 BHK flats in OMR with AI-powered insights.</p>
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
