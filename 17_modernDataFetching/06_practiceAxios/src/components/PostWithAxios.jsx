import React, { useState } from "react";
import axios from "axios";

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
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={body}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="number"
          value={userId}
          placeholder="User Id"
          onChange={(e) => setUserId(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {loading && <h3>Submitting...</h3>}
      {error && <h3>Error: {error}</h3>}

      {responseData && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(responseData)}</pre>
        </div>
      )}
    </div>
  );
};

export default PostWithAxios;
