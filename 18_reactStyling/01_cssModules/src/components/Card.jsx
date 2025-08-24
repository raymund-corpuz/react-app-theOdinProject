import React from "react";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Harry Potter</h3>
      <p className={styles.content}>This is just for the demo</p>
    </div>
  );
};

export default Card;
