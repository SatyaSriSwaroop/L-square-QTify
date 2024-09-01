import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, collapse, handleCollapse }) => {
    return (
      <button className={styles.button} onClick={() => {
        handleCollapse(!collapse);
      }}>{text}</button>
    );
  }
  
  export default Button;
  