import React from "react";

const Profile = ({ bio = "This user hasn’t written a bio yet.", username }) => {
  const status = bio === "This user hasn’t written a bio yet.";
  return (
    <div>
      <h3>Username: {username} </h3>
      <p
        style={{
          color: status ? "red" : "green",
        }}
      >
        Bio: {bio}{" "}
      </p>
    </div>
  );
};

export default Profile;
