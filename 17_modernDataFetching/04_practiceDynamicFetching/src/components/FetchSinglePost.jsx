import React, { useEffect, useState } from "react";

const FetchSinglePost = ({ postId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!postId) return;
    const controller = new AbortController();

    async function fetchPost() {
      //try
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
        const json = await response.json();

        setData(json);
      } catch (err) {
        //catch
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        //finally
        setLoading(false);
      }
    }

    fetchPost();
    return () => {
      controller.abort();
    };

    //clean-up function
  }, [postId]);

  //loading
  if (loading) return <h2>Loading some data...</h2>;
  //error
  if (error) return <h2>Error: {error}</h2>;
  //no data
  if (!data) return <h2>No Post Found!</h2>;

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default FetchSinglePost;
