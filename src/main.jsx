import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/layout.css";
import "./assets/css/components.css";
import "./assets/css/pages/home.css";
import "./assets/css/pages/about.css";
import "./assets/css/pages/solutions.css";
import "./assets/css/pages/products.css";
import "./assets/css/pages/contact.css";
import "./assets/css/pages/admin.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);