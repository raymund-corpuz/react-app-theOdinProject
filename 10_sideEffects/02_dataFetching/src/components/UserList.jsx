import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "./Loader";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setIsLoading(false), 2000);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {!isLoading ? (
        <>
          {" "}
          <h1>UserList</h1>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid gray",
                padding: "1rem",
                margin: "1rem",
                borderRadius: "0.5rem",
                background: "lightGreen",
              }}
            >
              <h3>Name: {user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company.name}</p>
            </div>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserList;
