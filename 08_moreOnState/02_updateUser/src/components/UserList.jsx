import React from "react";

const UserList = ({ user, city, onDelete, id, onEdit }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "300px",
        margin: "1rem 0",
        padding: "1rem",
      }}
    >
      <h3>{user}</h3>
      <p>{city}</p>

      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default UserList;
