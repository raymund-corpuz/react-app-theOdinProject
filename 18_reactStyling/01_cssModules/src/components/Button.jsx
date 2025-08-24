import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, label }) => {
  return <button className={styles[type]}>{label}</button>;
};

export default Button;
