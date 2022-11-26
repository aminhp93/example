import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Test from "./Test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
