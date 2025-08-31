import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const arrayUser = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

const UserData = () => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const filteredUser = useMemo(() => {
    console.log("Filtering users...");
    // return arrayUser.filter((user) =>
    //   user.name.toLowerCase().includes(query.toLowerCase())
    //   );
    return arrayUser.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
  return (
    <div>
      <h2>UserData</h2>

      <input
        type="text"
        placeholder="Search User"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>

      <p>
        Showing <b>{filteredUser.length}</b>
      </p>
      <ul>
        {filteredUser.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
