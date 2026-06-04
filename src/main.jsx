import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";   // ← imports your router
import "./index.css";                  // ← global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />                
  </React.StrictMode>
);