import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h3>Hello from the main page of the app!</h3>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
