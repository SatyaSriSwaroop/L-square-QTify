import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
    return (
      <button class={styles.button}>{text}</button>
    );
  }
  
  export default Button;
  