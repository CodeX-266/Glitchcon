import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import styles from "./styles/App.module.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className={styles.app}>
      {/* Sidebar */}
      <Sidebar />

      {/* Navbar */}
      <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />

      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <h1>Tour Your Next Home Virtually</h1>
        <p>AI-Powered Real Estate Insights</p>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search for 2BHK in OMR..." 
            className={styles.searchInput} 
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>

      {/* Chatbox */}
      <ChatBox />

      {/* Modals for Login and SignUp */}
      {showLogin && <Login closeModal={() => setShowLogin(false)} />}
      {showSignUp && <SignUp closeModal={() => setShowSignUp(false)} />}
    </div>
  );
};

export default App;
