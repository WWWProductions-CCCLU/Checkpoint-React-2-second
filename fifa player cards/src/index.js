import "bootstrap/dist/css/bootstrap.min.css";

// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Global styles
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);