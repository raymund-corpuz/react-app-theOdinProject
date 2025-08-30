import React from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h3>Hello from profile page</h3>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
