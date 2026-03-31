import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);