import React, { useState } from "react";
import FetchSinglePost from "./components/FetchSinglePost";

const App = () => {
  const [postId, SetPostId] = useState(1);
  return (
    <div>
      <h1>This is the Main App</h1>
      <input
        type="number"
        value={postId}
        onChange={(e) => SetPostId(e.target.value)}
      />
      <FetchSinglePost postId={postId} />
    </div>
  );
};

export default App;
