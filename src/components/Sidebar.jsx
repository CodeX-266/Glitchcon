import React, { useState } from "react";
import styles from "../styles/sidebar.module.css"; // Adjust path if needed

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state (open or closed)

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div className={styles.hamburgerIcon} onClick={toggleSidebar}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* Sidebar */}
      <div className={`${styles.sidebarContainer} ${isOpen ? styles.expanded : styles.collapsed}`}>
        <div className={styles.sidebarHeader}>
          
        </div>
        

        {/* About Section */}
        <div className={styles.aboutSection}>
          <h3>About Us</h3>
          <p>
            Welcome to our platform, where cutting-edge technology meets real estate insights! We specialize in providing AI-powered solutions to help you navigate the real estate market with ease. Our platform aggregates and visualizes data on 2 BHK flat deals in OMR, giving you a comprehensive view of available properties. Whether you're buying or renting, our tools empower you to make informed decisions based on the latest trends and data. We aim to simplify your real estate journey, offering personalized insights to help you find your ideal home efficiently. Join us today and take the first step towards smarter home hunting!
          </p>
        </div>
        <div className={styles.sidebarMenu}>
          
          
          <div className={styles.sidebarMenuItem}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
