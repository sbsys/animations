/* react */
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
/* components */
import App from "./App";
/* utils */
import reportWebVitals from "./reportWebVitals";
/* styles */
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
