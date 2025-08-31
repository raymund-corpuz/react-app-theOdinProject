import { useState, useMemo } from "react";

const users = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const filteredUser = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <h2>User Search (1000 + Users)</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>

      <p>
        Showing <b>{filteredUser.length}</b> results
      </p>

      <ul>
        {filteredUser.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
