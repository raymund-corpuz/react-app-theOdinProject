import React, { useState } from "react";
import FetchSinglePost from "./components/FetchSinglePost";

const App = () => {
  const [id, setId] = useState(1);
  return (
    <div>
      <h2>Fetch a Single Post</h2>

      <input
        type="number"
        value={id}
        min="1"
        max="100"
        onChange={(e) => setId(e.target.value)}
      />

      <FetchSinglePost postId={id} />
    </div>
  );
};

export default App;
