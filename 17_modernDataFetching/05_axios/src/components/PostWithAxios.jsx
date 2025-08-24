import React from "react";
import axios from "axios";
import { useState } from "react";

const PostWithAxios = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId,
        }
      );
      setResponseData(response.data);
      setTitle("");
      setBody("");
      setUserId("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  //Output
  return (
    <div>
      <h2>Create New Post</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",

          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="User Id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {loading && <p>Submitting...</p>}
      {error && <p>Error: {error}</p>}

      {responseData && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PostWithAxios;
