import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "../Navbar/Navbar.module.css";

function Navbar({ searchData }) {
  const [feedback, setFeedback] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
       <Button text="Give Feedback" collapse={feedback} handleCollapse={setFeedback} />
    </nav>
  );
}

export default Navbar;
