import React, { useEffect, useState } from "react";

const FetchSinglePost = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return;

    const controller = new AbortController();

    async function fetchPost() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Error Occured");
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          //do something
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPost();

    return () => {
      controller.abort();
    };
  }, [postId]);

  if (loading) return <h2>Wait until loading is finished...</h2>;
  if (error) return <h2>Error Occured: {error}</h2>;
  if (!post) return <h2>No Post Found!</h2>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default FetchSinglePost;
