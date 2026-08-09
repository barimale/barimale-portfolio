import React from "react";
import ReactDOM from "react-dom/client";
import ResourcedApp from "./ResourcedApp.jsx";
import "./index.css";
import AppState from "./context/AppState";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppState>
    <ResourcedApp />
  </AppState>
//  </React.StrictMode>
);
