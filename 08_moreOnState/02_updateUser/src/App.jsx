import React from "react";
import UpdateUser from "./components/UpdateUser";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";

const App = () => {
  const [user, setUser] = useState({
    username: "",
    city: "",
  });
  const [userCollection, setUserCollection] = useState([]);
  const [isEdit, setIsEdit] = useState("Submit");

  function handleUser(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { ...user, id: Date.now() };
    setUserCollection([...userCollection, newUser]);
    setUser({ username: "", city: "" });
  }

  useEffect(() => {
    console.log(userCollection);
  }, [userCollection]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  function handleDelete(id) {
    setUserCollection((prevCollection) =>
      prevCollection.filter((user) => user.id !== id)
    );
  }

  function handleEdit(id) {
    const selectedUser = userCollection.find((user) => user.id === id);
    if (selectedUser) {
      setUser({ username: selectedUser.username, city: selectedUser.city });
      setIsEdit((prevStatus) => !prevStatus);
    }
    handleDelete(id);
  }

  function handleSave() {}

  return (
    <div>
      <UpdateUser
        user={user}
        setUser={setUser}
        userCollection={userCollection}
        onUser={handleUser}
        onSubmit={handleSubmit}
        isEdit={isEdit}
        onSave={handleSave}
        setIsEdit={setIsEdit}
      />
      {userCollection.map((user) => (
        <UserList
          key={user.id}
          id={user.id}
          user={user.username}
          city={user.city}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default App;
