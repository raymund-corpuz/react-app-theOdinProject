import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.min.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
