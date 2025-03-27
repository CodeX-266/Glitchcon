import React from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search for a property..." />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
