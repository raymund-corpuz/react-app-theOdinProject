import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ type, circle }) => {
  return (
    <div>
      <img
        src="https://placehold.co/50x50"
        alt="img"
        className={`${styles.type} ${styles.circle}`}
      />
    </div>
  );
};

export default Profile;
