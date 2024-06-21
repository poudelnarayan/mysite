import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navigation from "./portfolio/components/Navigation";
import ColorSwitcher from "./portfolio/components/ColorSwitcher";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <ColorSwitcher />
    <App />
  </React.StrictMode>
);
