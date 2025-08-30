import React from "react";

const UpdateUser = ({ onUser, user, onSubmit }) => {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
      onSubmit={onSubmit}
    >
      <h1>Update User Profile</h1>
      <input
        type="text"
        placeholder="User Name"
        value={user.username}
        onChange={onUser}
        name="username"
      />
      <input
        type="text"
        placeholder="City"
        value={user.city}
        onChange={onUser}
        name="city"
      />

      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default UpdateUser;
