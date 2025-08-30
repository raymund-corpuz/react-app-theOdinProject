import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h2>Hello from the Main Page of the App!</h2>
      <p>Here are some exampls of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
