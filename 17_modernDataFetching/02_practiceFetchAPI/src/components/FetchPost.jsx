import React from "react";
import { useState, useEffect } from "react";

const FetchPost = () => {
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
          throw new Error("Error Occured");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "1200px" }}>
      {data.map((item) => (
        <div
          style={{
            padding: "1rem",
            margin: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid gray",
            width: "300px",
          }}
          key={item.id}
        >
          {" "}
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchPost;
