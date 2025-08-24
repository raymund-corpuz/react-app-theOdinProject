import React, { useEffect, useState } from "react";

const FetchPosts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const dataJSON = await response.json();
        setData(dataJSON);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3> <span>{item.body}</span>
        </li>
      ))}
    </ul>
  );
};

export default FetchPosts;
