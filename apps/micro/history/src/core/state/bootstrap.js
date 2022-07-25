import React from "react";
import ReactDOM from "react-dom/client";
import "@/core/theme/css/index.css";
import Core from "@/core/index";
import { historyMocks } from "@/mock/history";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Core {...historyMocks(10)} />
  </React.StrictMode>
);
